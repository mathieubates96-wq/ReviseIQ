"""
ReviseIQ — LC Maths Paper Scraper
Extracts HL Maths questions from PDF papers, maps to LC syllabus topics,
and pairs each question-part with its marking scheme answer.
Output: data/maths_questions.json
Usage: python scrape_maths.py YOUR_API_KEY
"""

import os, sys, json, re, time
import pdfplumber
import anthropic

PAPERS_DIR  = os.path.join(os.path.dirname(__file__), '..', 'papers', 'maths')
OUTPUT_FILE = os.path.join(os.path.dirname(__file__), '..', 'data', 'maths_questions.json')

LC_TOPICS = [
    "Algebra", "Complex Numbers", "Functions & Graphs",
    "Calculus — Differentiation", "Calculus — Integration",
    "Sequences & Series", "Financial Maths",
    "Coordinate Geometry", "Geometry & Proofs",
    "Trigonometry", "Statistics", "Probability",
]

# Map year → {ms, p1, p2}  (skip DEF papers — they share same MS in some years)
YEAR_FILES = {
    2022: {'p1':'2022mathsHLp1.pdf', 'p2':'2022mathsHLp2.pdf', 'ms':'2022mathsHLms.pdf'},
    2023: {'p1':'2023mathsHLp1.pdf', 'p2':'2023mathsHLp2.pdf', 'ms':'2023mathsHLms.pdf'},
    2024: {'p1':'2024mathsHLp1.pdf', 'p2':'2024mathsHLp2.pdf', 'ms':'2024mathsHlms.pdf'},
    2025: {'p1':'2025mathsHLp1.pdf', 'p2':'2025mathsHLp2.pdf', 'ms':'2025mathsHLms.pdf'},
}


def extract_text(pdf_path):
    text = ""
    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            t = page.extract_text()
            if t:
                text += t + "\n"
    return text.strip()


def split_into_questions(paper_text):
    """Return list of {num, text} blocks split by 'Question N'."""
    parts = re.split(r'(?=\bQuestion\s+(\d+)\b)', paper_text, flags=re.IGNORECASE)
    questions = []
    for chunk in parts:
        m = re.match(r'Question\s+(\d+)', chunk, re.IGNORECASE)
        if m:
            questions.append({'num': int(m.group(1)), 'text': chunk.strip()})
    return questions


def extract_ms_block(ms_text, q_num, paper_label):
    """Extract the marking scheme block for Q{q_num} from the combined MS text."""
    # MS has both Paper 1 and Paper 2 sections; find the right one
    # Pattern: "Q{n} Model Solution"
    pattern = rf'\bQ{q_num}\b\s+Model Solution'
    matches = list(re.finditer(pattern, ms_text, re.IGNORECASE))
    if not matches:
        return ""
    # Pick the match in the correct paper section
    # Paper 1 comes first, Paper 2 second in the MS
    if paper_label == 1:
        start = matches[0].start()
    else:
        start = matches[-1].start() if len(matches) > 1 else matches[0].start()

    # End: next Q or 2500 chars
    next_q = re.search(rf'\bQ{q_num + 1}\b\s+Model Solution', ms_text[start + 1:], re.IGNORECASE)
    end = start + 1 + next_q.start() if next_q else start + 3000
    return ms_text[start:end].strip()


def process_question(q_text, ms_block, year, paper_num, q_num, client):
    """Send question + MS block to Claude Haiku; return list of question-part dicts."""

    prompt = f"""You are processing LC Higher Level Maths Question {q_num}, Paper {paper_num}, {year}.

QUESTION TEXT (raw PDF — math symbols may be garbled, interpret them as standard maths):
{q_text[:2500]}

MARKING SCHEME FOR THIS QUESTION:
{ms_block[:2500]}

The LC HL Maths syllabus topics are: {', '.join(LC_TOPICS)}

For each PART of this question ((a), (b), (c) and sub-parts (i),(ii) etc.), return one JSON object.
Write all maths using plain text notation: x^2, sqrt(x), ∫, dy/dx, etc.

Return a JSON array — one entry per part:
[
  {{
    "part": "a",
    "question_text": "Clear statement of what is asked, with maths in plain text",
    "solution": "Key steps of the model solution in plain text",
    "marking_notes": "Partial credit criteria from marking scheme (e.g. 'Low PC: correct substitution; Full credit: simplified answer')",
    "topic": "one of the LC topics listed above",
    "marks": 10,
    "mcq_friendly": true
  }}
]

mcq_friendly = true only if the answer is a single numerical value, expression, or short answer
that can be presented as 4 multiple-choice options (e.g. "find the value of x", "find the roots").
Set false for proofs, sketches, or multi-step derivations.

Combine sub-parts (i),(ii) into the parent part only if they are very short.
Return ONLY the JSON array, no commentary."""

    try:
        msg = client.messages.create(
            model="claude-haiku-4-5-20251001",
            max_tokens=2500,
            messages=[{"role": "user", "content": prompt}]
        )
        raw = msg.content[0].text.strip().replace('```json', '').replace('```', '').strip()
        parts = json.loads(raw)
    except Exception as e:
        print(f"    Parse error Q{q_num}: {e}")
        return []

    results = []
    for p in parts:
        if not isinstance(p, dict) or not p.get('question_text'):
            continue
        results.append({
            'year':         year,
            'paper':        paper_num,
            'question_num': q_num,
            'part':         str(p.get('part', '')),
            'topic':        p.get('topic', 'Unknown'),
            'marks':        int(p.get('marks', 0)) if str(p.get('marks', 0)).isdigit() else 0,
            'question_text':p.get('question_text', ''),
            'solution':     p.get('solution', ''),
            'marking_notes':p.get('marking_notes', ''),
            'mcq_friendly': bool(p.get('mcq_friendly', False)),
            'subject':      'maths',
            'level':        'HL',
        })
    return results


def main():
    if len(sys.argv) < 2:
        print("Usage: python scrape_maths.py YOUR_API_KEY")
        sys.exit(1)

    client = anthropic.Anthropic(api_key=sys.argv[1].strip())

    # Load existing output to allow resuming
    if os.path.exists(OUTPUT_FILE):
        with open(OUTPUT_FILE, encoding='utf-8') as f:
            all_questions = json.load(f)
        done_keys = {(q['year'], q['paper'], q['question_num']) for q in all_questions}
        print(f"Resuming — {len(all_questions)} parts already extracted")
    else:
        all_questions = []
        done_keys = set()

    for year, files in sorted(YEAR_FILES.items()):
        ms_path = os.path.join(PAPERS_DIR, files['ms'])
        if not os.path.exists(ms_path):
            print(f"{year}: marking scheme not found, skipping")
            continue

        print(f"\n{year}: loading marking scheme...")
        ms_text = extract_text(ms_path)

        for paper_num, key in [(1, 'p1'), (2, 'p2')]:
            p_path = os.path.join(PAPERS_DIR, files[key])
            if not os.path.exists(p_path):
                print(f"  Paper {paper_num} not found, skipping")
                continue

            print(f"  Paper {paper_num}: extracting questions...")
            paper_text = extract_text(p_path)
            questions  = split_into_questions(paper_text)
            print(f"    Found {len(questions)} questions")

            for q in questions:
                key_tuple = (year, paper_num, q['num'])
                if key_tuple in done_keys:
                    print(f"    Q{q['num']} already done, skipping")
                    continue

                ms_block = extract_ms_block(ms_text, q['num'], paper_num)
                if not ms_block:
                    print(f"    Q{q['num']}: no MS block found")

                print(f"    Processing Q{q['num']}...")
                parts = process_question(q['text'], ms_block, year, paper_num, q['num'], client)
                print(f"      → {len(parts)} parts extracted")

                all_questions.extend(parts)
                done_keys.add(key_tuple)

                # Save after every question
                with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
                    json.dump(all_questions, f, indent=2, ensure_ascii=False)

                time.sleep(0.3)

        print(f"  {year} done.")

    print(f"\nComplete! {len(all_questions)} question-parts saved to {OUTPUT_FILE}")


if __name__ == '__main__':
    main()

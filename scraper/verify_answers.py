"""
ReviseIQ — Answer Verifier
Cross-references each MCQ question against the official marking scheme
for the same year and corrects the answer + explanation.
Output: data/economics_mcq.json (updated in place)
"""

import os, sys, json, time
import pdfplumber
import anthropic

PAPERS_DIR  = os.path.join(os.path.dirname(__file__), '..', 'papers', 'economics')
MCQ_FILE    = os.path.join(os.path.dirname(__file__), '..', 'data', 'economics_mcq.json')

def extract_text(pdf_path):
    text = ""
    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            t = page.extract_text()
            if t:
                text += t + "\n"
    return text.strip()

def verify_batch(questions, ms_text, paper_text, client):
    """Send a batch of MCQ questions + marking scheme to Claude to verify answers."""

    q_list = "\n\n".join([
        f"Q{i+1} (year {q['year']}, topic: {q['topic']}):\n"
        f"Question: {q['question']}\n"
        f"A: {q['options'][0]}\n"
        f"B: {q['options'][1]}\n"
        f"C: {q['options'][2]}\n"
        f"D: {q['options'][3]}\n"
        f"Current answer: {['A','B','C','D'][q['correct']]}"
        for i, q in enumerate(questions)
    ])

    prompt = f"""You are verifying multiple-choice Economics questions against the official Leaving Certificate marking scheme.

EXAM PAPER TEXT (for context):
{paper_text[:4000]}

MARKING SCHEME TEXT:
{ms_text[:5000]}

QUESTIONS TO VERIFY:
{q_list}

For each question, use the marking scheme to find the correct answer. If the current answer is wrong, correct it.
If the marking scheme doesn't directly address the question (because it was adapted to MCQ format), use your best judgment based on the marking scheme content.

Respond ONLY with a JSON array, one entry per question, in this exact format:
[
  {{
    "index": 0,
    "correct": 0,
    "explanation": "explanation based on the marking scheme"
  }}
]

"correct" is the 0-based index (0=A, 1=B, 2=C, 3=D) of the correct option.
Return exactly {len(questions)} entries."""

    msg = client.messages.create(
        model="claude-haiku-4-5-20251001",
        max_tokens=2000,
        messages=[{"role": "user", "content": prompt}]
    )
    raw = msg.content[0].text.strip()
    raw = raw.replace('```json','').replace('```','').strip()
    return json.loads(raw)

def main():
    if len(sys.argv) < 2:
        print("Usage: python verify_answers.py YOUR_API_KEY")
        sys.exit(1)

    client = anthropic.Anthropic(api_key=sys.argv[1].strip())

    with open(MCQ_FILE, encoding='utf-8') as f:
        mcq_questions = json.load(f)

    # Group questions by year
    by_year = {}
    for i, q in enumerate(mcq_questions):
        yr = str(q['year'])
        by_year.setdefault(yr, []).append((i, q))

    print(f"Loaded {len(mcq_questions)} MCQ questions across {len(by_year)} years\n")

    for year in sorted(by_year.keys()):
        paper_path = os.path.join(PAPERS_DIR, f"{year}ecopp.pdf")
        ms_path    = os.path.join(PAPERS_DIR, f"{year}ecoMS.pdf")

        if not os.path.exists(ms_path):
            print(f"{year}: no marking scheme found, skipping")
            continue

        print(f"{year}: extracting marking scheme...")
        try:
            ms_text    = extract_text(ms_path)
            paper_text = extract_text(paper_path) if os.path.exists(paper_path) else ""
        except Exception as e:
            print(f"  Error reading PDFs: {e}")
            continue

        year_qs = by_year[year]
        print(f"  Verifying {len(year_qs)} questions...")

        # Process in batches of 5 to keep prompts manageable
        batch_size = 5
        for batch_start in range(0, len(year_qs), batch_size):
            batch = year_qs[batch_start:batch_start + batch_size]
            indices = [b[0] for b in batch]
            questions = [b[1] for b in batch]

            try:
                results = verify_batch(questions, ms_text, paper_text, client)

                for r in results:
                    idx = indices[r['index']]
                    old_correct = mcq_questions[idx]['correct']
                    new_correct = r['correct']
                    if old_correct != new_correct:
                        print(f"    Corrected Q{idx+1} ({year}): {['A','B','C','D'][old_correct]} → {['A','B','C','D'][new_correct]}")
                    mcq_questions[idx]['correct']     = new_correct
                    mcq_questions[idx]['explanation'] = r['explanation']

                # Save after each batch
                with open(MCQ_FILE, 'w', encoding='utf-8') as f:
                    json.dump(mcq_questions, f, indent=2, ensure_ascii=False)

                time.sleep(0.3)

            except Exception as e:
                print(f"  Batch error: {e} — skipping batch")

        print(f"  {year} done.")

    print(f"\nAll done! {MCQ_FILE} updated with verified answers.")

if __name__ == '__main__':
    main()

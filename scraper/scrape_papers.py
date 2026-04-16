"""
ReviseIQ — Exam Paper Scraper
Extracts questions from LC economics past papers using pdfplumber,
then uses Claude to structure them into a clean JSON question bank.
"""

import os
import sys
import json
import pdfplumber
import anthropic

PAPERS_DIR = os.path.join(os.path.dirname(__file__), '..', 'papers', 'economics')
OUTPUT_FILE = os.path.join(os.path.dirname(__file__), '..', 'data', 'economics_questions.json')

# Only process exam papers, not marking schemes
PAPER_FILES = [f for f in os.listdir(PAPERS_DIR) if f.endswith('pp.pdf')]
PAPER_FILES.sort()

def extract_text(pdf_path):
    text = ""
    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            t = page.extract_text()
            if t:
                text += t + "\n"
    return text.strip()

def parse_with_claude(text, year, client):
    prompt = f"""You are processing a Leaving Certificate Economics exam paper from {year} (Ireland, SEC).

Extract all questions from the text below. For each question:
- Include the full question text
- Include any sub-parts (a, b, c etc.) as separate entries if they are standalone questions
- Identify the topic/section it belongs to (e.g. "Market Structures", "National Income", "International Trade", etc.)
- Note the marks awarded if visible

Return a JSON array in this exact format:
[
  {{
    "year": {year},
    "subject": "Economics",
    "topic": "topic name here",
    "question": "full question text here",
    "marks": 10
  }}
]

Only include actual exam questions, not instructions or general text.
Return only the JSON array, nothing else.

EXAM PAPER TEXT:
{text[:8000]}
"""

    message = client.messages.create(
        model="claude-haiku-4-5-20251001",
        max_tokens=4096,
        messages=[{"role": "user", "content": prompt}]
    )

    raw = message.content[0].text.strip()
    # Strip markdown code blocks if present
    raw = raw.replace('```json', '').replace('```', '').strip()
    return json.loads(raw)

def main():
    if len(sys.argv) < 2:
        print("Usage: python scrape_papers.py YOUR_API_KEY")
        sys.exit(1)
    api_key = sys.argv[1].strip()
    client = anthropic.Anthropic(api_key=api_key)

    os.makedirs(os.path.dirname(OUTPUT_FILE), exist_ok=True)

    all_questions = []

    for filename in PAPER_FILES:
        year = filename[:4]
        path = os.path.join(PAPERS_DIR, filename)
        print(f"Processing {filename}...")

        try:
            text = extract_text(path)
            if not text:
                print(f"  Could not extract text from {filename} (may be scanned image)")
                continue

            questions = parse_with_claude(text, year, client)
            print(f"  Extracted {len(questions)} questions from {year}")
            all_questions.extend(questions)

        except Exception as e:
            print(f"  Error processing {filename}: {e}")

    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(all_questions, f, indent=2, ensure_ascii=False)

    print(f"\nDone! {len(all_questions)} total questions saved to {OUTPUT_FILE}")

if __name__ == '__main__':
    main()

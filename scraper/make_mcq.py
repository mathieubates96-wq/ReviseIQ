"""
ReviseIQ — MCQ Converter
Converts raw LC economics questions into MCQ format using Claude.
Output: data/economics_mcq.json
"""

import os, sys, json, time
import anthropic

INPUT_FILE  = os.path.join(os.path.dirname(__file__), '..', 'data', 'economics_questions.json')
OUTPUT_FILE = os.path.join(os.path.dirname(__file__), '..', 'data', 'economics_mcq.json')

def make_mcq(q, client):
    prompt = f"""Convert this Leaving Certificate Economics exam question into a multiple-choice question.

Original question: {q['question']}
Topic: {q['topic']}
Year: {q['year']}

Create a clear multiple-choice version with exactly 4 options (A-D). One must be correct.
The question should test the same knowledge as the original.

Respond ONLY with JSON in this exact format:
{{
  "question": "question text here?",
  "options": ["Option A", "Option B", "Option C", "Option D"],
  "correct": 0,
  "explanation": "Clear explanation of why the correct answer is right."
}}

The "correct" field is the 0-based index of the correct option."""

    msg = client.messages.create(
        model="claude-haiku-4-5-20251001",
        max_tokens=600,
        messages=[{"role": "user", "content": prompt}]
    )
    raw = msg.content[0].text.strip()
    raw = raw.replace('```json','').replace('```','').strip()
    return json.loads(raw)

def main():
    if len(sys.argv) < 2:
        print("Usage: python make_mcq.py YOUR_API_KEY")
        sys.exit(1)

    client = anthropic.Anthropic(api_key=sys.argv[1].strip())

    with open(INPUT_FILE, encoding='utf-8') as f:
        questions = json.load(f)

    # Load existing output so we can resume if interrupted
    if os.path.exists(OUTPUT_FILE):
        with open(OUTPUT_FILE, encoding='utf-8') as f:
            done = json.load(f)
        done_count = len(done)
        print(f"Resuming from question {done_count + 1}")
    else:
        done = []
        done_count = 0

    remaining = questions[done_count:]

    for i, q in enumerate(remaining):
        idx = done_count + i + 1
        print(f"[{idx}/{len(questions)}] {q['year']} — {q['topic'][:50]}")
        try:
            mcq = make_mcq(q, client)
            mcq['year']    = q['year']
            mcq['topic']   = q['topic']
            mcq['subject'] = 'Economics'
            done.append(mcq)

            # Save after every question so we can resume
            with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
                json.dump(done, f, indent=2, ensure_ascii=False)

            time.sleep(0.3)  # small delay to avoid rate limits

        except Exception as e:
            print(f"  Error: {e} — skipping")

    print(f"\nDone! {len(done)} MCQ questions saved to {OUTPUT_FILE}")

if __name__ == '__main__':
    main()

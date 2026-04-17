"""
ReviseIQ — Maths MCQ Generator
Converts mcq_friendly maths questions into 4-option MCQ format.
Non-MCQ questions are stored as 'reveal' type (show model answer).
Output: data/maths_mcq.json
Usage: python make_maths_mcq.py YOUR_API_KEY
"""

import os, sys, json, time
import anthropic

INPUT_FILE  = os.path.join(os.path.dirname(__file__), '..', 'data', 'maths_questions.json')
OUTPUT_FILE = os.path.join(os.path.dirname(__file__), '..', 'data', 'maths_mcq.json')


def make_mcq(q, client):
    """Convert a mcq_friendly question into 4-option MCQ."""
    prompt = f"""Convert this LC Higher Level Maths question into a 4-option multiple choice question.

Topic: {q['topic']}
Question: {q['question_text']}
Correct answer / model solution: {q['solution']}
Marking notes: {q['marking_notes']}

Create exactly 4 options (A, B, C, D) where:
- One option is the correct answer (taken from the model solution)
- Three options are plausible but wrong (common mistakes or nearby values)
- Options should be concise — just the answer value or expression, not full working

Return ONLY this JSON (no commentary):
{{
  "question": "Clear question text suitable for a quiz",
  "options": ["option A", "option B", "option C", "option D"],
  "correct": 0,
  "explanation": "Explanation of why the answer is correct, referencing the key method step"
}}

"correct" is the 0-based index of the right option."""

    try:
        msg = client.messages.create(
            model="claude-haiku-4-5-20251001",
            max_tokens=800,
            messages=[{"role": "user", "content": prompt}]
        )
        raw = msg.content[0].text.strip().replace('```json', '').replace('```', '').strip()
        return json.loads(raw)
    except Exception as e:
        print(f"  MCQ error: {e}")
        return None


def main():
    if len(sys.argv) < 2:
        print("Usage: python make_maths_mcq.py YOUR_API_KEY")
        sys.exit(1)

    client = anthropic.Anthropic(api_key=sys.argv[1].strip())

    with open(INPUT_FILE, encoding='utf-8') as f:
        questions = json.load(f)

    # Load existing output to allow resuming
    if os.path.exists(OUTPUT_FILE):
        with open(OUTPUT_FILE, encoding='utf-8') as f:
            mcq_list = json.load(f)
        done = len(mcq_list)
        print(f"Resuming from {done} already processed")
    else:
        mcq_list = []
        done = 0

    mcq_qs    = [q for q in questions if q.get('mcq_friendly')]
    reveal_qs = [q for q in questions if not q.get('mcq_friendly')]

    print(f"Total: {len(questions)} parts | MCQ-friendly: {len(mcq_qs)} | Reveal: {len(reveal_qs)}")

    # Process MCQ-friendly questions
    for i, q in enumerate(mcq_qs):
        if i < done:
            continue

        print(f"[{i+1}/{len(mcq_qs)}] {q['year']} P{q['paper']} Q{q['question_num']}{q['part']} ({q['topic']})...")
        result = make_mcq(q, client)

        if result:
            mcq_list.append({
                'year':         q['year'],
                'paper':        q['paper'],
                'question_num': q['question_num'],
                'part':         q['part'],
                'topic':        q['topic'],
                'marks':        q['marks'],
                'type':         'mcq',
                'question':     result.get('question', q['question_text']),
                'options':      result.get('options', []),
                'correct':      result.get('correct', 0),
                'explanation':  result.get('explanation', q['solution']),
                'solution':     q['solution'],
                'marking_notes':q['marking_notes'],
                'subject':      'maths',
                'level':        'HL',
            })
        else:
            # Fall back to reveal type if MCQ generation fails
            mcq_list.append({**q, 'type': 'reveal'})

        # Save every 5 questions
        if (i + 1) % 5 == 0:
            with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
                json.dump(mcq_list, f, indent=2, ensure_ascii=False)
            print(f"  Saved {len(mcq_list)} so far...")

        time.sleep(0.3)

    # Append all reveal-type questions (no API call needed)
    for q in reveal_qs:
        mcq_list.append({**q, 'type': 'reveal'})

    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(mcq_list, f, indent=2, ensure_ascii=False)

    mcq_count    = sum(1 for q in mcq_list if q['type'] == 'mcq')
    reveal_count = sum(1 for q in mcq_list if q['type'] == 'reveal')
    print(f"\nDone! {len(mcq_list)} total: {mcq_count} MCQ + {reveal_count} reveal-style")
    print(f"Saved to {OUTPUT_FILE}")


if __name__ == '__main__':
    main()

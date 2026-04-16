/* =============================================
   api/quiz.js — Vercel Serverless Function
   Proxies the Anthropic API so the key is never
   exposed in the browser.
   ============================================= */

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin',  '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed.' });

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey)
    return res.status(500).json({ error: 'API key not configured on the server. Add ANTHROPIC_API_KEY in Vercel environment variables.' });

  const { subject, topic, level, count = 5 } = req.body || {};
  if (!subject || !topic || !level)
    return res.status(400).json({ error: 'Missing subject, topic or level.' });

  const safeCount = Math.min(Math.max(parseInt(count) || 5, 1), 20);

  const systemPrompt = `You are an expert Leaving Certificate examiner for Irish secondary schools.
You create challenging, accurate multiple-choice questions that reflect the style and difficulty
of real Leaving Certificate exam questions set by the State Examinations Commission (SEC).
Always respond with valid JSON and nothing else — no markdown, no explanation, just the JSON object.`;

  const userPrompt = `Generate exactly ${safeCount} multiple-choice questions for the following:

Subject: ${subject.charAt(0).toUpperCase() + subject.slice(1)}
Topic: ${topic}
Level: ${level.charAt(0).toUpperCase() + level.slice(1)} Level
Exam: Leaving Certificate (Ireland)

Requirements:
- Questions must be at ${level} level difficulty
- Each question must have exactly 4 answer options labelled A–D
- Questions should cover different aspects of the topic
- Include a clear, educational explanation for the correct answer
- Base questions on the style of real SEC past exam papers

Respond ONLY with a JSON object in this exact format:
{
  "questions": [
    {
      "question": "Full question text here?",
      "options": ["Option A text", "Option B text", "Option C text", "Option D text"],
      "correct": 0,
      "explanation": "Clear explanation of why the answer is correct."
    }
  ]
}

The "correct" field must be the 0-based index (0, 1, 2 or 3) of the correct option.`;

  try {
    const upstream = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type':      'application/json',
        'x-api-key':         apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model:      'claude-haiku-4-5-20251001',
        max_tokens: 4096,
        system:     systemPrompt,
        messages:   [{ role: 'user', content: userPrompt }],
      }),
    });

    if (!upstream.ok) {
      const err = await upstream.json().catch(() => ({}));
      return res.status(upstream.status).json({ error: err?.error?.message || `Anthropic HTTP ${upstream.status}` });
    }

    const data    = await upstream.json();
    const raw     = data?.content?.[0]?.text;
    if (!raw) return res.status(500).json({ error: 'Empty response from Anthropic.' });

    const cleaned = raw.replace(/^```json\s*/i, '').replace(/```\s*$/i, '').trim();
    const parsed  = JSON.parse(cleaned);

    if (!Array.isArray(parsed?.questions) || parsed.questions.length === 0)
      return res.status(500).json({ error: 'Unexpected JSON structure from Anthropic.' });

    return res.status(200).json(parsed);

  } catch (e) {
    return res.status(500).json({ error: e.message || 'Unknown server error.' });
  }
}

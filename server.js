/* =============================================
   ReviseIQ — server.js
   Express server: static files + /paper redirect
   ============================================= */

const express  = require('express');
const fetch    = require('node-fetch');
const path     = require('path');

const app  = express();
const PORT = process.env.PORT || 3000;

// ── Static files ──────────────────────────────
app.use(express.static(path.join(__dirname)));

// ── /paper redirect route ─────────────────────
// GET /paper?subject=EN&year=2023&level=HL
//
// Fetches the SEC school-exam-papers page for the given subject/year,
// scrapes the first PDF link matching the level, and redirects to it.
// Falls back to the SEC search page if no PDF is found.

const LEVEL_CODE = { HL: 'EV', OL: 'OL' };

// SEC search page URL for a given subject + year
function secSearchUrl(sc, year) {
  return `https://www.examinations.ie/school-exam-papers/?l=en&mc=LC&sc=${sc}&y=${year}`;
}

// SEC search page URL without year (fallback)
function secFallbackUrl(sc) {
  return `https://www.examinations.ie/school-exam-papers/?l=en&mc=LC&sc=${sc}`;
}

app.get('/paper', async (req, res) => {
  const { subject, year, level } = req.query;

  // Validate params
  if (!subject || !year || !level) {
    return res.status(400).json({ error: 'Missing required query params: subject, year, level' });
  }

  const sc        = subject.toUpperCase();
  const yr        = String(year);
  const lvlUpper  = level.toUpperCase();

  if (!['HL', 'OL'].includes(lvlUpper)) {
    return res.status(400).json({ error: 'level must be HL or OL' });
  }

  const searchUrl  = secSearchUrl(sc, yr);
  const fallbackUrl = secFallbackUrl(sc);

  try {
    // Fetch the SEC search results page
    const response = await fetch(searchUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; ReviseIQ/1.0)',
        'Accept': 'text/html,application/xhtml+xml',
      },
      timeout: 8000,
    });

    if (!response.ok) {
      return res.redirect(302, searchUrl);
    }

    const html = await response.text();

    // Find PDF links in the page.
    // SEC links look like: href=".../.../LC_XXXX_YYYY_ZZZ.pdf" or similar.
    // We match any href ending in .pdf (case-insensitive).
    const pdfRegex = /href="([^"]+\.pdf)"/gi;
    const allPdfs  = [];
    let match;
    while ((match = pdfRegex.exec(html)) !== null) {
      allPdfs.push(match[1]);
    }

    if (!allPdfs.length) {
      // No PDFs found — send user to the search page
      return res.redirect(302, searchUrl);
    }

    // Filter by level keyword in the filename.
    // HL papers usually contain "EV" or "HL" in the filename.
    // OL papers usually contain "OL" in the filename.
    const levelKeywords = lvlUpper === 'HL' ? ['EV', 'HL'] : ['OL'];
    const levelMatch    = allPdfs.find(url =>
      levelKeywords.some(kw => url.toUpperCase().includes(kw))
    );

    // Resolve relative URLs
    const target = levelMatch || allPdfs[0];
    const resolved = target.startsWith('http')
      ? target
      : `https://www.examinations.ie${target.startsWith('/') ? '' : '/'}${target}`;

    return res.redirect(302, resolved);

  } catch (err) {
    console.error('[/paper] fetch error:', err.message);
    // Network error — redirect to search page
    return res.redirect(302, searchUrl);
  }
});

// ── Start ─────────────────────────────────────
app.listen(PORT, () => {
  console.log(`ReviseIQ server running at http://localhost:${PORT}`);
});

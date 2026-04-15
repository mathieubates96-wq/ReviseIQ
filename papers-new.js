/* =============================================
   papers-new.js  —  ReviseIQ
   Subject + year + level picker → SEC paper cards
   ============================================= */

// ─────────────────────────────────────────────
// Subject data
// sc      : 2-letter SEC subject code used in the
//           school-exam-papers URL (?sc=XX)
// papers  : number of papers in the exam (info only)
// ─────────────────────────────────────────────
const SUBJECT_DATA = {
  maths: {
    label: 'Maths', emoji: '📐',
    sc: 'MA',
    papers: 2,
  },
  english: {
    label: 'English', emoji: '📖',
    sc: 'EN',
    papers: 2,
  },
  irish: {
    label: 'Irish', emoji: '🇮🇪',
    sc: 'IR',
    papers: 1,
  },
  biology: {
    label: 'Biology', emoji: '🧬',
    sc: 'BI',
    papers: 1,
  },
  chemistry: {
    label: 'Chemistry', emoji: '⚗️',
    sc: 'CH',
    papers: 1,
  },
  physics: {
    label: 'Physics', emoji: '🔭',
    sc: 'PH',
    papers: 1,
  },
  history: {
    label: 'History', emoji: '🏛️',
    sc: 'HI',
    papers: 1,
  },
  geography: {
    label: 'Geography', emoji: '🌍',
    sc: 'GE',
    papers: 1,
  },
  business: {
    label: 'Business', emoji: '💼',
    sc: 'BU',
    papers: 1,
  },
  french: {
    label: 'French', emoji: '🥐',
    sc: 'FR',
    papers: 1,
  },
  spanish: {
    label: 'Spanish', emoji: '🇪🇸',
    sc: 'SP',
    papers: 1,
  },
  accounting: {
    label: 'Accounting', emoji: '🧾',
    sc: 'AC',
    papers: 1,
  },
  economics: {
    label: 'Economics', emoji: '📉',
    sc: 'EC',
    papers: 1,
  },
  art: {
    label: 'Art', emoji: '🎨',
    sc: 'AH',
    papers: 1,
  },
  music: {
    label: 'Music', emoji: '🎵',
    sc: 'MU',
    papers: 1,
  },
};

// Years with no written LC exams
const NO_EXAM_YEARS = [2020];

// ─────────────────────────────────────────────
// URL builders
// Primary:  SEC search page filtered to subject + year
//           → directly shows papers & PDF links for that year
// Fallback: SEC search page for subject only (no year filter)
//           → guaranteed to always have results
// ─────────────────────────────────────────────
function secPaperUrl(subject, year) {
  const data = SUBJECT_DATA[subject];
  if (!data?.sc) return secFallbackUrl(subject);
  return `https://www.examinations.ie/school-exam-papers/?l=en&mc=LC&sc=${data.sc}&y=${year}`;
}

function secFallbackUrl(subject) {
  const data = SUBJECT_DATA[subject];
  if (data?.sc) {
    return `https://www.examinations.ie/school-exam-papers/?l=en&mc=LC&sc=${data.sc}`;
  }
  return 'https://www.examinations.ie/school-exam-papers/?l=en&mc=LC';
}

// ─────────────────────────────────────────────
// Card builder
// ─────────────────────────────────────────────
function buildCard(subject, year, level) {
  const data       = SUBJECT_DATA[subject];
  const paperUrl   = secPaperUrl(subject, year);
  const fallback   = secFallbackUrl(subject);
  const levelCls   = level === 'higher' ? 'lvl-higher' : 'lvl-ordinary';
  const levelLabel = level === 'higher' ? 'Higher Level' : 'Ordinary Level';
  const papersNote = data.papers > 1 ? `${data.papers} papers` : '1 paper';

  return `
    <div class="pcard">
      <div class="pcard-top">
        <span class="pcard-year">${year}</span>
        <span class="pcard-level ${levelCls}">${levelLabel}</span>
      </div>
      <div class="pcard-subject">${data.emoji} ${data.label}</div>
      <div class="pcard-info">Leaving Certificate ${year} &middot; ${papersNote}</div>
      <div class="pcard-actions">
        <a href="${paperUrl}"
           target="_blank"
           rel="noopener noreferrer"
           class="pcard-btn pcard-btn-primary">
          📄 Open Paper
        </a>
      </div>
    </div>
  `;
}


// ─────────────────────────────────────────────
// COVID notice
// ─────────────────────────────────────────────
function showCovidNotice(year) {
  return `
    <div class="covid-notice">
      <span class="covid-notice-icon">⚠️</span>
      <p><strong>No written exams in ${year}.</strong>
      The Leaving Certificate ${year} used Accredited Grades instead of written exams due to COVID-19.
      No exam paper was sat — there are no past papers for this year.</p>
    </div>
  `;
}

// ─────────────────────────────────────────────
// Render results
// ─────────────────────────────────────────────
function renderResults(subject, year, level) {
  const resultsArea = document.getElementById('resultsArea');
  const resultsGrid = document.getElementById('resultsGrid');
  const emptyState  = document.getElementById('emptyState');
  const resultsMeta = document.getElementById('resultsMeta');
  const emptyMsg    = document.getElementById('emptyMsg');

  resultsArea.classList.remove('results-hidden');
  emptyState.style.display  = 'none';
  resultsGrid.style.display = 'grid';

  const data       = SUBJECT_DATA[subject];
  const levelLabel = level === 'higher' ? 'Higher Level' : 'Ordinary Level';

  // COVID year — no exam
  if (NO_EXAM_YEARS.includes(parseInt(year))) {
    resultsMeta.innerHTML = `<strong>${data.emoji} ${data.label}</strong> · <strong>${levelLabel}</strong> · <strong>${year}</strong>`;
    resultsGrid.innerHTML  = showCovidNotice(year);
    return;
  }

  // Subject not in our list
  if (!data) {
    resultsGrid.style.display = 'none';
    emptyState.style.display  = 'block';
    emptyMsg.innerHTML = 'Subject not found. Try the SEC website directly.';
    return;
  }

  resultsMeta.innerHTML = `
    Papers for <strong>${data.emoji} ${data.label}</strong>
    · <strong>${levelLabel}</strong>
    · <strong>${year}</strong>
    &nbsp;<a href="${secPaperUrl(subject, year)}" target="_blank" rel="noopener"
      style="color:var(--green-600);font-size:0.8rem;white-space:nowrap;">View on SEC ↗</a>`;

  resultsGrid.innerHTML = buildCard(subject, year, level);
}

// ─────────────────────────────────────────────
// Init
// ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  let selectedLevel = 'higher';

  // Level toggle
  document.querySelectorAll('.pill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedLevel = btn.dataset.level;
    });
  });

  // Search button
  document.getElementById('searchBtn').addEventListener('click', () => {
    const subject = document.getElementById('selSubject').value;
    const year    = document.getElementById('selYear').value;

    if (!subject || !year) {
      if (!subject) document.getElementById('selSubject').classList.add('shake');
      if (!year)    document.getElementById('selYear').classList.add('shake');
      setTimeout(() => {
        document.getElementById('selSubject').classList.remove('shake');
        document.getElementById('selYear').classList.remove('shake');
      }, 500);
      return;
    }

    renderResults(subject, parseInt(year), selectedLevel);
    document.getElementById('resultsArea').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  // Trigger on Enter key inside dropdowns
  ['selSubject', 'selYear'].forEach(id => {
    document.getElementById(id)?.addEventListener('keydown', e => {
      if (e.key === 'Enter') document.getElementById('searchBtn').click();
    });
  });

  // Pre-fill from URL params: papers.html?s=maths&y=2023&l=higher
  const params = new URLSearchParams(location.search);
  const ps = params.get('s'), py = params.get('y'), pl = params.get('l');
  if (ps) document.getElementById('selSubject').value = ps;
  if (py) document.getElementById('selYear').value    = py;
  if (pl) {
    selectedLevel = pl;
    document.querySelectorAll('.pill-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.level === pl);
    });
  }
  if (ps && py) renderResults(ps, parseInt(py), selectedLevel || 'higher');
});

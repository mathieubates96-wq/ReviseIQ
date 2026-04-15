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

// Years with no written LC exams (COVID — no papers sat)
const NO_EXAM_YEARS = [];

// ─────────────────────────────────────────────
// Locally hosted PDFs
// Key format: "subject-year"
// paper: path to exam paper PDF
// ms:    path to marking scheme PDF (optional)
// ─────────────────────────────────────────────
const LOCAL_PAPERS = {
  // ── Economics (Higher & Ordinary — single paper) ──────────────────────────
  'economics-2025': { paper: 'papers/economics/2025ecopp.pdf', ms: 'papers/economics/2025ecoMS.pdf' },
  'economics-2024': { paper: 'papers/economics/2024ecopp.pdf', ms: 'papers/economics/2024ecoMS.pdf' },
  'economics-2023': { paper: 'papers/economics/2023ecopp.pdf', ms: 'papers/economics/2023ecoMS.pdf' },
  'economics-2022': { paper: 'papers/economics/2022ecopp.pdf', ms: 'papers/economics/2022ecoMS.pdf' },
  'economics-2021': { paper: 'papers/economics/2021ecopp.pdf', ms: 'papers/economics/2021ecoMS.pdf' },
  'economics-2020': { paper: 'papers/economics/2020ecopp.pdf', ms: 'papers/economics/2020ecoMS.pdf' },
  'economics-2019': { paper: 'papers/economics/2019ecopp.pdf', ms: 'papers/economics/2019ecoMS.pdf' },
  'economics-2018': { paper: 'papers/economics/2018ecopp.pdf', ms: 'papers/economics/2018ecoMS.pdf' },
  'economics-2017': { paper: 'papers/economics/2017ecopp.pdf', ms: 'papers/economics/2017ecoMS.pdf' },
  'economics-2016': { paper: 'papers/economics/2016ecopp.pdf', ms: 'papers/economics/2016ecoMS.pdf' },
  'economics-2015': { paper: 'papers/economics/2015ecopp.pdf', ms: 'papers/economics/2015ecoMS.pdf' },

  // ── Maths Higher Level (two papers per year + deferred where available) ───
  'maths-2025': {
    p1: 'papers/maths/2025mathsHLp1.pdf',
    p2: 'papers/maths/2025mathsHLp2.pdf',
    ms: 'papers/maths/2025mathsHLms.pdf',
  },
  'maths-2024': {
    p1: 'papers/maths/2024mathsHLp1.pdf',
    p2: 'papers/maths/2024mathsHLp2.pdf',
    ms: 'papers/maths/2024mathsHlms.pdf',
    defp1: 'papers/maths/2024DEFmathsHLp1.pdf',
    defp2: 'papers/maths/2024DEFmathsHLp2.pdf',
    defms: 'papers/maths/2024DEFmathsHLms.pdf',
  },
  'maths-2023': {
    p1: 'papers/maths/2023mathsHLp1.pdf',
    p2: 'papers/maths/2023mathsHLp2.pdf',
    ms: 'papers/maths/2023mathsHLms.pdf',
    defp1: 'papers/maths/2023DEFmathsHLp1.pdf',
    defp2: 'papers/maths/2023DEFmathsHLp2.pdf',
    defms: 'papers/maths/2023DEFmathsHLms.pdf',
  },
  'maths-2022': {
    p1: 'papers/maths/2022mathsHLp1.pdf',
    p2: 'papers/maths/2022mathsHLp2.pdf',
    ms: 'papers/maths/2022mathsHLms.pdf',
  },
};

const SEC_ARCHIVE = 'https://www.examinations.ie/exammaterialarchive/';

// ─────────────────────────────────────────────
// Card builder
// ─────────────────────────────────────────────
function buildCard(subject, year, level) {
  const data       = SUBJECT_DATA[subject];
  const levelCls   = level === 'higher' ? 'lvl-higher' : 'lvl-ordinary';
  const levelLabel = level === 'higher' ? 'Higher Level' : 'Ordinary Level';

  const local = LOCAL_PAPERS[`${subject}-${year}`];

  let actionsHtml;

  if (!local) {
    // No local copy — link to SEC archive
    actionsHtml = `
      <a href="${SEC_ARCHIVE}" target="_blank" rel="noopener noreferrer" class="pcard-btn pcard-btn-primary">📄 Open on SEC Website</a>
    `;
  } else if (local.paper) {
    // Single-paper subject (e.g. Economics)
    actionsHtml = `
      <a href="${local.paper}" target="_blank" rel="noopener noreferrer" class="pcard-btn pcard-btn-primary">📄 Exam Paper</a>
      ${local.ms ? `<a href="${local.ms}" target="_blank" rel="noopener noreferrer" class="pcard-btn pcard-btn-secondary">📝 Marking Scheme</a>` : ''}
    `;
  } else {
    // Two-paper subject (e.g. Maths) — main sitting
    actionsHtml = `
      <a href="${local.p1}" target="_blank" rel="noopener noreferrer" class="pcard-btn pcard-btn-primary">📄 Paper 1</a>
      <a href="${local.p2}" target="_blank" rel="noopener noreferrer" class="pcard-btn pcard-btn-primary">📄 Paper 2</a>
      ${local.ms ? `<a href="${local.ms}" target="_blank" rel="noopener noreferrer" class="pcard-btn pcard-btn-secondary">📝 Marking Scheme</a>` : ''}
    `;
    // Deferred sitting (where available)
    if (local.defp1) {
      actionsHtml += `
        <div class="pcard-deferred-label">Deferred sitting</div>
        <a href="${local.defp1}" target="_blank" rel="noopener noreferrer" class="pcard-btn pcard-btn-deferred">📄 DEF Paper 1</a>
        <a href="${local.defp2}" target="_blank" rel="noopener noreferrer" class="pcard-btn pcard-btn-deferred">📄 DEF Paper 2</a>
        ${local.defms ? `<a href="${local.defms}" target="_blank" rel="noopener noreferrer" class="pcard-btn pcard-btn-deferred">📝 DEF Mark. Scheme</a>` : ''}
      `;
    }
  }

  const papersNote = local?.p1 ? '2 papers' : '1 paper';

  return `
    <div class="pcard">
      <div class="pcard-top">
        <span class="pcard-year">${year}</span>
        <span class="pcard-level ${levelCls}">${levelLabel}</span>
      </div>
      <div class="pcard-subject">${data.emoji} ${data.label}</div>
      <div class="pcard-info">Leaving Certificate ${year} &middot; ${papersNote}</div>
      <div class="pcard-actions">
        ${actionsHtml}
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

  // Maths OL — not yet available locally
  const localKey = `${subject}-${year}`;
  if (subject === 'maths' && level === 'ordinary') {
    resultsGrid.style.display = 'none';
    emptyState.style.display  = 'block';
    emptyMsg.innerHTML = 'Ordinary Level Maths papers are coming soon.<br>Only Higher Level is currently available on ReviseIQ.';
    resultsMeta.innerHTML = `Searching for <strong>${data.emoji} ${data.label}</strong> · <strong>${levelLabel}</strong> · <strong>${year}</strong>`;
    return;
  }

  resultsMeta.innerHTML = `
    Papers for <strong>${data.emoji} ${data.label}</strong>
    · <strong>${levelLabel}</strong>
    · <strong>${year}</strong>
    &nbsp;<a href="https://www.examinations.ie/exammaterialarchive/" target="_blank" rel="noopener"
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

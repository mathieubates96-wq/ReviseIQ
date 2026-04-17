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
// Topic Browser
// ─────────────────────────────────────────────

// Maps raw topic strings → normalised display name
// Consolidates near-duplicate topics from the scraped data
const TOPIC_ALIASES = {
  'Demand and Supply':                  'Supply and Demand',
  'Demand and Market Equilibrium':      'Market Equilibrium',
  'Market Equilibrium':                 'Market Equilibrium',
  'Supply and Demand':                  'Supply and Demand',
  'Price Elasticity of Demand':         'Elasticity of Demand',
  'Production Possibilities Frontier':  'Production Possibility Frontier',
  'Consumer Utility and Demand':        'Consumer Behaviour',
  'Consumer Behaviour / Price Effects': 'Consumer Behaviour',
  'Utility and Consumer Behaviour':     'Consumer Behaviour',
  'Law of Diminishing Marginal Utility':'Consumer Behaviour',
  'Equi-Marginal Principle':            'Consumer Behaviour',
  'Law of Demand':                      'Supply and Demand',
  'Production and Costs':               'Production and Costs',
  'Cost Curves':                        'Production and Costs',
  'Cost Analysis':                      'Production and Costs',
  'Short Run Production Decisions':     'Production and Costs',
  'Law of Diminishing Marginal Returns':'Production and Costs',
  'Specialisation and Cost Advantages': 'Production and Costs',
  'Market Structures - Perfect Competition': 'Market Structures',
  'Market Structures - Oligopoly':      'Market Structures',
  'Market Structures - Monopoly':       'Market Structures',
  'Market Structures / Oligopoly':      'Market Structures',
  'Market Structures and Price Controls':'Market Structures',
  'Perfect Competition':                'Market Structures',
  'Price Discrimination':               'Market Structures',
  'Pricing Strategies':                 'Market Structures',
  'Price Controls':                     'Government Intervention',
  'Price Controls and Housing Market':  'Government Intervention',
  'Price Controls and Market Failure':  'Government Intervention',
  'Price Controls/Labour Market':       'Government Intervention',
  'Housing Market and Government Intervention': 'Government Intervention',
  'Government Intervention':            'Government Intervention',
  'Market Failure':                     'Market Failure',
  'Market Failure - Demerit Goods':     'Market Failure',
  'Greenwashing/Market Failure':        'Market Failure',
  'Merit Goods':                        'Market Failure',
  'Externalities':                      'Market Failure',
  'Opportunity Cost and Externalities': 'Market Failure',
  'Environmental Sustainability':       'Market Failure',
  'National Income/Household Savings':  'National Income',
  'Consumption':                        'National Income',
  'Investment':                         'National Income',
  'Multiplier':                         'National Income',
  'Tourism and Circular Flow':          'Circular Flow of Income',
  'Fiscal Policy':                      'Fiscal Policy',
  'Taxation':                           'Taxation',
  'Government Finance':                 'Government Finance and National Debt',
  'Government Finance and Employment':  'Government Finance and National Debt',
  'Government Policy Objectives':       'Fiscal Policy',
  'Government Policy and Ageing Population': 'Fiscal Policy',
  'Income Inequality and Government Policy': 'Fiscal Policy',
  'Labour Market / Gig Economy':        'Labour Market and Employment',
  'Labour Demand':                      'Labour Market and Employment',
  'Labour Economics':                   'Labour Market and Employment',
  'Labour Economics and Demographic Change': 'Labour Market and Employment',
  'Capital and Labour':                 'Labour Market and Employment',
  'Labour Force, Economic Rent, Bonds, Capital': 'Labour Market and Employment',
  'Unemployment':                       'Unemployment',
  'Employment':                         'Labour Market and Employment',
  'Monetary Policy and Interest Rates': 'Monetary Policy',
  'Monetary Policy and Eurozone':       'Monetary Policy',
  'Central Bank and Financial Regulation': 'European Central Bank',
  'Banking / Financial Services':       'European Central Bank',
  'Banking and Credit':                 'European Central Bank',
  'Household Savings':                  'National Income',
  'Types of Inflation':                 'Inflation',
  'Inflation/Cost of Living':           'Inflation',
  'Inflation/Consumer Price Index':     'Inflation',
  'Exchange Rates':                     'International Trade',
  'International Trade and Exchange Rates': 'International Trade',
  'Trade Protectionism':                'International Trade',
  'Trade Protection/Tariffs':           'International Trade',
  'Balance of Payments':                'Balance of Payments',
  'Economic Growth':                    'Economic Development',
  'Economic Growth and Development':    'Economic Development',
  'Economic Development':               'Economic Development',
  'Development Economics':              'Economic Development',
  'Development Economics - HDI':        'Economic Development',
  'Regional Development':               'Regional Development',
  'Housing and Regional Development':   'Regional Development',
  'Foreign Direct Investment':          'Foreign Direct Investment',
  'Globalisation':                      'International Trade',
  'Demographics and Population':        'Demographics',
  'Ageing Population':                  'Demographics',
  'Labour Market/Price Controls':       'Government Intervention',
  'Supply and Price Discrimination':    'Market Structures',
  'Supply Chain':                       'Production and Costs',
  'Economic Methodology':               'Economic Methodology',
  'Economic Statements/Methodology':    'Economic Methodology',
  'Methodology - Positive and Normative Statements': 'Economic Methodology',
  'Economic Theory':                    'Economic Methodology',
  'Economic Thought':                   'Economic Methodology',
  'Economic Aims':                      'Economic Methodology',
  'Fundamental Economic Concepts':      'Economic Methodology',
  'Opportunity Cost':                   'Economic Methodology',
  'Scarcity & Choice':                  'Economic Methodology',
  'Land Economics':                     'Factors of Production',
  'Capital and Labour':                 'Factors of Production',
  'Education Economics':                'Factors of Production',
  'Tourism':                            'Regional Development',
  'Hidden Economy':                     'National Income',
  'Economic Impact of Events/Cost-Benefit Analysis': 'Cost-Benefit Analysis',
  'Cost-Benefit Analysis':              'Cost-Benefit Analysis',
  'Monetary Policy':                    'Monetary Policy',
  'National Income':                    'National Income',
  'Circular Flow of Income':            'Circular Flow of Income',
};

function normaliseTopic(raw) {
  return TOPIC_ALIASES[raw] || raw;
}

let allEcoQuestions = null;

async function loadEconomicsQuestions() {
  if (allEcoQuestions) return allEcoQuestions;
  try {
    const res = await fetch('data/economics_questions.json');
    allEcoQuestions = await res.json();
    return allEcoQuestions;
  } catch (e) {
    console.error('Failed to load economics questions:', e);
    return [];
  }
}

function buildTopicIndex(questions) {
  const index = {};
  questions.forEach(q => {
    const topic = normaliseTopic(q.topic);
    if (!index[topic]) index[topic] = [];
    index[topic].push({ ...q, normTopic: topic });
  });
  return index;
}

function renderTopicList(index, filter = '') {
  const list = document.getElementById('topicList');
  const countEl = document.getElementById('topicCount');
  const lc = filter.toLowerCase();

  const sorted = Object.entries(index)
    .map(([name, qs]) => ({ name, count: qs.length }))
    .filter(t => !lc || t.name.toLowerCase().includes(lc))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));

  countEl.textContent = sorted.length + ' topics';

  if (!sorted.length) {
    list.innerHTML = '<div style="padding:16px 18px;font-size:0.85rem;color:var(--gray-400);">No topics match your search.</div>';
    return;
  }

  list.innerHTML = sorted.map(t => `
    <div class="topic-item" data-topic="${encodeURIComponent(t.name)}">
      <span class="topic-item-name">${t.name}</span>
      <span class="topic-item-count">${t.count}</span>
    </div>
  `).join('');

  list.querySelectorAll('.topic-item').forEach(el => {
    el.addEventListener('click', () => {
      list.querySelectorAll('.topic-item').forEach(i => i.classList.remove('active'));
      el.classList.add('active');
      const topic = decodeURIComponent(el.dataset.topic);
      showTopicQuestions(topic, index[topic] || []);
    });
  });
}

function showTopicQuestions(topic, questions) {
  const empty   = document.getElementById('topicQsEmpty');
  const content = document.getElementById('topicQsContent');
  const header  = document.getElementById('topicQsHeader');
  const list    = document.getElementById('topicQsList');

  empty.style.display   = 'none';
  content.style.display = 'block';

  const years = [...new Set(questions.map(q => q.year))].sort((a,b) => b - a);
  const totalMarks = questions.reduce((s, q) => s + (q.marks || 0), 0);

  header.innerHTML = `
    <div>
      <div class="topic-qs-name">${topic}</div>
      <div class="topic-qs-meta">${questions.length} question${questions.length !== 1 ? 's' : ''} · ${years.length} year${years.length !== 1 ? 's' : ''} · ${totalMarks} marks total</div>
    </div>
  `;

  const sortedQs = [...questions].sort((a, b) => b.year - a.year);

  list.innerHTML = sortedQs.map(q => {
    const paperKey = `economics-${q.year}`;
    const local = LOCAL_PAPERS[paperKey];
    const paperLink = local?.paper
      ? `<a href="${local.paper}" target="_blank" rel="noopener" class="tq-paper-link">📄 ${q.year} Paper</a>`
      : '';
    const msLink = local?.ms
      ? `<a href="${local.ms}" target="_blank" rel="noopener" class="tq-ms-link">📝 Mark Scheme</a>`
      : '';

    return `
      <div class="tq-card">
        <div class="tq-year">${q.year}</div>
        <div class="tq-body">
          <div class="tq-text">${q.question}</div>
          <div class="tq-footer">
            ${q.marks ? `<span class="tq-marks">${q.marks} marks</span>` : ''}
            ${paperLink}
            ${msLink}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

async function initTopicBrowser() {
  const questions = await loadEconomicsQuestions();
  if (!questions.length) {
    document.getElementById('topicList').innerHTML =
      '<div style="padding:16px 18px;font-size:0.85rem;color:var(--gray-400);">Could not load question data.</div>';
    return;
  }

  const index = buildTopicIndex(questions);
  renderTopicList(index);

  document.getElementById('topicSearchInput').addEventListener('input', e => {
    renderTopicList(index, e.target.value);
  });
}

// ─────────────────────────────────────────────
// Init
// ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  let selectedLevel = 'higher';

  // Mode toggle: Find Papers / Browse by Topic
  let topicBrowserInitialised = false;
  const findSection  = document.getElementById('findPapersSection');
  const topicSection = document.getElementById('topicBrowserSection');

  document.getElementById('modeFindPapers').addEventListener('click', () => {
    document.getElementById('modeFindPapers').classList.add('active');
    document.getElementById('modeBrowseTopics').classList.remove('active');
    findSection.style.display  = '';
    topicSection.style.display = 'none';
  });

  document.getElementById('modeBrowseTopics').addEventListener('click', () => {
    document.getElementById('modeBrowseTopics').classList.add('active');
    document.getElementById('modeFindPapers').classList.remove('active');
    findSection.style.display  = 'none';
    topicSection.style.display = '';
    if (!topicBrowserInitialised) {
      topicBrowserInitialised = true;
      initTopicBrowser();
    }
  });

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

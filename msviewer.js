/* =============================================
   Marking Scheme Viewer
   ============================================= */

// ── SAMPLE DATA ──────────────────────────────
// Replace or extend this array with real questions.
// Each object matches the documented contract:
//   { question, markingScheme, fullMarksTips }
// Plus optional metadata: year, subject, level, section, marks
const MSV_DATA = [
  {
    year: 2023,
    subject: 'Economics',
    level: 'Higher Level',
    section: 'Section B — Q6',
    marks: 30,
    question:
      '(a) Explain what is meant by "market failure" and identify THREE causes of market failure.\n(15 marks)\n\n' +
      '(b) With reference to ONE of the causes you identified above, discuss the role of the government in correcting market failure.\n(15 marks)',
    markingScheme: [
      'Definition of market failure: When the free market fails to allocate resources efficiently, resulting in a loss of economic welfare. (3M)',
      'Cause 1 — Externalities: Costs or benefits that fall on third parties outside a transaction, e.g. pollution from a factory imposing costs on local residents. (3M)',
      'Cause 2 — Public Goods: Goods that are non-rival and non-excludable; the private market under-provides them because no one can be excluded from consuming them, e.g. national defence, lighthouses. (3M)',
      'Cause 3 — Asymmetric Information: One party has more/better information than the other, leading to adverse selection or moral hazard, e.g. a used car seller knows more than the buyer. (3M)',
      'Government role — named intervention linked to the chosen cause, with mechanism explained. (3M)',
    ],
    fullMarksTips: [
      'Use the phrase "allocative efficiency" or "welfare loss" in your definition — examiners reward precise economic language.',
      'For each cause, state the name clearly first, then explain the mechanism, then give a real-world example — all three parts are needed for full marks.',
      'In part (b), name a specific intervention, e.g. "Pigouvian tax", "direct provision", or "regulation" — vague answers like "the government should help" score nothing.',
      'If you draw a diagram showing deadweight welfare loss, label it fully (S, D, P*, Q*, Qsocial) for an additional mark in Section B.',
    ],
  },
  {
    year: 2023,
    subject: 'Economics',
    level: 'Higher Level',
    section: 'Section A — Q3',
    marks: 10,
    question:
      'Define "elasticity of demand" and, using an example, explain why the demand for insulin is said to be price inelastic.\n(10 marks)',
    markingScheme: [
      'Definition: Elasticity of demand measures the responsiveness of quantity demanded to a change in the price of the good. (2M)',
      'Formula stated: PED = % change in quantity demanded ÷ % change in price. (2M)',
      'Price inelastic defined: Absolute value of PED is between 0 and 1 — a price rise causes a proportionally smaller fall in quantity demanded. (2M)',
      'Insulin example — WHY it is inelastic: No close substitutes exist; insulin is a life-sustaining necessity for diabetics, so demand barely falls no matter how much the price rises. (4M)',
    ],
    fullMarksTips: [
      'Always state the PED formula — it earns dedicated marks in almost every elasticity question regardless of level.',
      'Say "between 0 and 1 in absolute value" rather than just "inelastic" — the examiner needs the numeric range for full marks on that point.',
      'The insulin answer must explain WHY demand is unresponsive: "no close substitutes" and "necessity / life-critical good" are the required phrases.',
    ],
  },
  {
    year: 2022,
    subject: 'Economics',
    level: 'Higher Level',
    section: 'Section B — Q7',
    marks: 25,
    question:
      '(a) Explain the difference between a demand-pull and a cost-push cause of inflation.\n(10 marks)\n\n' +
      '(b) Discuss TWO effects of high inflation on the Irish economy.\n(15 marks)',
    markingScheme: [
      'Demand-pull inflation: Occurs when aggregate demand in an economy exceeds aggregate supply — "too much money chasing too few goods", typically during economic booms. (5M)',
      'Cost-push inflation: Occurs when production costs rise (e.g. wages, raw materials, energy), forcing firms to pass higher costs onto consumers as higher prices. (5M)',
      'Effect 1 — Reduced competitiveness: Irish goods become more expensive relative to trading partners, hurting export performance and widening the current account deficit. (7-8M)',
      'Effect 2 — Redistribution of income: Inflation erodes the real value of savings and fixed incomes (e.g. pensioners), while debtors benefit as the real value of debt falls. (7M)',
    ],
    fullMarksTips: [
      'Always contrast the two causes clearly — one is demand-side, one is supply-side — and use an Irish/relevant example for each.',
      'For effects, structure each point as: State the effect → Explain the mechanism → Link to Ireland specifically. This ensures full marks.',
      '"Real value" is a key phrase for the redistribution point — showing you understand the inflation–real wages/savings relationship.',
      'Diagrams (AD/AS) are welcome in Section B; label shifts clearly and they can compensate for a weaker written explanation.',
    ],
  },
  {
    year: 2021,
    subject: 'Economics',
    level: 'Higher Level',
    section: 'Section A — Q1',
    marks: 10,
    question:
      'Distinguish between a "free trade area" and a "customs union" as forms of economic integration, giving ONE example of each.\n(10 marks)',
    markingScheme: [
      'Free trade area defined: Member countries remove tariffs and quotas among themselves but each country keeps its own trade policy toward non-members. (3M)',
      'Example of a free trade area: NAFTA / USMCA (United States, Mexico, Canada), or EFTA. (1M)',
      'Customs union defined: Member countries remove internal trade barriers AND adopt a common external tariff (CET) toward all non-member countries, removing the need for rules of origin checks at internal borders. (4M)',
      'Example of a customs union: The European Union; Turkey–EU Customs Union. (1M)',
      'Clear distinction drawn: The key additional feature of a customs union over a free trade area is the common external tariff. (1M)',
    ],
    fullMarksTips: [
      'The single most-tested difference is the common external tariff — state it explicitly and you have secured the core marks.',
      'Acceptable examples: USMCA/NAFTA for free trade area; EU or Turkey–EU for customs union. Using well-known examples signals confidence.',
      'Avoid confusing a customs union with the Single Market — the Single Market additionally covers free movement of people, capital, and services.',
    ],
  },
];

// ── COLOUR PALETTE for marking points ────────
const POINT_COLORS = [
  '#6366f1', // indigo
  '#0ea5e9', // sky
  '#10b981', // emerald
  '#f59e0b', // amber
  '#8b5cf6', // violet
  '#14b8a6', // teal
  '#ef4444', // red
  '#f97316', // orange
];

// ── STATE ─────────────────────────────────────
let currentIdx = 0;
let schemeVisible = false;

// ── HELPERS ───────────────────────────────────
function parsePoint(text) {
  // Extract trailing mark annotation e.g. "(3M)", "(4 marks)", "(7-8M)"
  const re = /\((\d+(?:[–\-]\d+)?)\s*[Mm](?:arks?)?\)\s*$/;
  const match = text.match(re);
  if (match) {
    return { text: text.slice(0, match.index).trim(), marks: match[1] };
  }
  return { text, marks: null };
}

function totalMarks(data) {
  let sum = 0;
  data.markingScheme.forEach(p => {
    const { marks } = parsePoint(p);
    if (marks) {
      const n = parseInt(marks.split(/[–-]/)[0], 10);
      if (!isNaN(n)) sum += n;
    }
  });
  return sum;
}

// ── RENDER ────────────────────────────────────
function renderNavBar() {
  const nav = document.getElementById('msvNavBar');
  if (!nav) return;
  nav.innerHTML = MSV_DATA.map((d, i) => `
    <button class="msv-nav-btn${i === currentIdx ? ' active' : ''}" data-idx="${i}">
      <span>${d.year}</span>
      <span style="opacity:0.65;font-weight:500;">${d.section}</span>
    </button>`).join('');

  nav.querySelectorAll('.msv-nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentIdx = parseInt(btn.dataset.idx, 10);
      schemeVisible = false;
      renderViewer();
      renderNavBar();
    });
  });
}

function renderViewer() {
  const data = MSV_DATA[currentIdx];

  // ── Question panel ──
  document.getElementById('msvQuestionSection').textContent = data.section;

  // Meta chips
  document.getElementById('msvMeta').innerHTML = `
    <span class="msv-meta-chip">${data.subject}</span>
    <span class="msv-meta-chip">${data.level}</span>
    <span class="msv-meta-chip msv-marks-chip">${data.marks} marks</span>`;

  // Question text — bold anything in parentheses like "(15 marks)"
  const formatted = data.question.replace(
    /(\(\d+ marks?\))/gi,
    '<strong>$1</strong>'
  );
  document.getElementById('msvQuestionText').innerHTML = formatted;

  // ── Scheme panel ──
  renderScheme(data);

  // ── Toggle state ──
  const wrap = document.getElementById('msvWrap');
  const btn  = document.getElementById('msvToggleBtn');
  if (schemeVisible) {
    wrap.classList.add('msv-open');
    btn.classList.add('active');
    btn.innerHTML = `<span class="msv-toggle-icon">▲</span> Hide Marking Scheme`;
  } else {
    wrap.classList.remove('msv-open');
    btn.classList.remove('active');
    btn.innerHTML = `<span class="msv-toggle-icon">👁</span> Show Marking Scheme`;
  }
}

function renderScheme(data) {
  // Points
  const pointsHtml = data.markingScheme.map((raw, i) => {
    const { text, marks } = parsePoint(raw);
    const col = POINT_COLORS[i % POINT_COLORS.length];
    const delayMs = 60 + i * 55;
    return `
      <div class="msv-point" style="--point-color:${col}; animation-delay:${delayMs}ms;">
        <div class="msv-point-num">${i + 1}</div>
        <div class="msv-point-body">
          <div class="msv-point-text">${text}</div>
          ${marks ? `<div class="msv-point-marks">+${marks} mark${marks === '1' ? '' : 's'}</div>` : ''}
        </div>
      </div>`;
  }).join('');

  // Tips
  const tipsHtml = data.fullMarksTips.map(tip => `
    <li class="msv-fm-item">
      <div class="msv-fm-check">✓</div>
      <span>${tip}</span>
    </li>`).join('');

  const tot = totalMarks(data);

  document.getElementById('msvSchemeContent').innerHTML = `
    <div class="msv-points-wrap">
      <div class="msv-points-title">Marking Points</div>
      ${pointsHtml}
    </div>

    ${tot > 0 ? `<div class="msv-score-bar">
      <span>Scheme total</span>
      <span class="msv-score-total">${tot} / ${data.marks} marks accounted for</span>
    </div>` : ''}

    <div class="msv-fm-box">
      <div class="msv-fm-header">
        <span class="msv-fm-icon">🎯</span>
        How to Get Full Marks
      </div>
      <ul class="msv-fm-list">${tipsHtml}</ul>
    </div>`;
}

// ── EVENTS ────────────────────────────────────
function bindEvents() {
  document.getElementById('msvToggleBtn')?.addEventListener('click', () => {
    schemeVisible = !schemeVisible;
    renderViewer();
  });

  document.getElementById('msvCloseBtn')?.addEventListener('click', () => {
    schemeVisible = false;
    renderViewer();
  });
}

// ── INIT ──────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderNavBar();
  renderViewer();
  bindEvents();
});

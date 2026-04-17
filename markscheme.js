/* =============================================
   markscheme.js — ReviseIQ
   ============================================= */

let msData = null;
let activeTopicId = null;

async function loadSubject(subject) {
  try {
    const res = await fetch(`data/markscheme_${subject}.json`);
    return await res.json();
  } catch (e) {
    console.error('Failed to load marking scheme data:', e);
    return null;
  }
}

function renderTopicList(topics, filter = '') {
  const list = document.getElementById('msTopicList');
  const lc   = filter.toLowerCase();
  const filtered = topics.filter(t =>
    !lc || t.topic.toLowerCase().includes(lc) || t.strand.toLowerCase().includes(lc)
  );

  if (!filtered.length) {
    list.innerHTML = '<div class="ms-no-results">No topics match your search.</div>';
    return;
  }

  // Group by strand
  const strands = {};
  filtered.forEach(t => {
    if (!strands[t.strand]) strands[t.strand] = [];
    strands[t.strand].push(t);
  });

  list.innerHTML = Object.entries(strands).map(([strand, items]) => `
    <div class="ms-strand-group">
      <div class="ms-strand-label">${strand.replace('Strand ', 'S').replace(' — ', ' — ')}</div>
      ${items.map(t => `
        <div class="ms-topic-item${t.id === activeTopicId ? ' active' : ''}" data-id="${t.id}">
          ${t.topic}
        </div>
      `).join('')}
    </div>
  `).join('');

  list.querySelectorAll('.ms-topic-item').forEach(el => {
    el.addEventListener('click', () => {
      activeTopicId = el.dataset.id;
      renderTopicList(topics, document.getElementById('msTopicSearch').value);
      const topic = topics.find(t => t.id === el.dataset.id);
      if (topic) renderDetail(topic);
    });
  });
}

function renderDetail(t) {
  document.getElementById('msDetailEmpty').style.display   = 'none';
  document.getElementById('msDetailContent').style.display = 'block';

  const keyPhrasesHtml = t.keyPhrases.map(p =>
    `<span class="ms-phrase-pill">${p}</span>`
  ).join('');

  const fullMarksHtml = t.fullMarks.map(m =>
    `<li class="ms-check-item ms-check-full"><span class="ms-check-icon">✓</span>${m}</li>`
  ).join('');

  const partialMarksHtml = t.partialMarks.map(m =>
    `<li class="ms-check-item ms-check-partial"><span class="ms-check-icon">~</span>${m}</li>`
  ).join('');

  const mistakesHtml = t.commonMistakes.map(m =>
    `<li class="ms-check-item ms-check-mistake"><span class="ms-check-icon">✗</span>${m}</li>`
  ).join('');

  document.getElementById('msDetailContent').innerHTML = `
    <div class="ms-detail-header">
      <div>
        <div class="ms-detail-strand">${t.strand}</div>
        <h2 class="ms-detail-title">${t.topic}</h2>
      </div>
    </div>

    <div class="ms-overview-card">
      <div class="ms-section-icon">📋</div>
      <p class="ms-overview-text">${t.overview}</p>
    </div>

    <div class="ms-section">
      <div class="ms-section-header">
        <span class="ms-section-dot dot-phrase"></span>
        <h3 class="ms-section-title">Key Phrases Examiners Want to See</h3>
      </div>
      <div class="ms-phrases">${keyPhrasesHtml}</div>
    </div>

    <div class="ms-two-col">
      <div class="ms-section ms-card ms-card-full">
        <div class="ms-section-header">
          <span class="ms-section-dot dot-full"></span>
          <h3 class="ms-section-title">For Full Marks</h3>
        </div>
        <ul class="ms-check-list">${fullMarksHtml}</ul>
      </div>

      <div class="ms-section ms-card ms-card-partial">
        <div class="ms-section-header">
          <span class="ms-section-dot dot-partial"></span>
          <h3 class="ms-section-title">Partial Credit Only</h3>
        </div>
        <ul class="ms-check-list">${partialMarksHtml}</ul>
      </div>
    </div>

    <div class="ms-section ms-card ms-card-mistakes">
      <div class="ms-section-header">
        <span class="ms-section-dot dot-mistake"></span>
        <h3 class="ms-section-title">Common Mistakes That Cost Marks</h3>
      </div>
      <ul class="ms-check-list">${mistakesHtml}</ul>
    </div>

    <div class="ms-tip-card">
      <div class="ms-tip-label">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="7" cy="7" r="6"/><path d="M7 4v3l2 2"/>
        </svg>
        Exam Tip
      </div>
      <p class="ms-tip-text">${t.examTip}</p>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', async () => {
  msData = await loadSubject('economics');
  if (!msData) return;

  renderTopicList(msData.topics);

  // Auto-open first topic
  if (msData.topics.length) {
    activeTopicId = msData.topics[0].id;
    renderTopicList(msData.topics);
    renderDetail(msData.topics[0]);
  }

  // Search
  document.getElementById('msTopicSearch').addEventListener('input', e => {
    renderTopicList(msData.topics, e.target.value);
  });

  // Subject switcher (only economics active for now)
  document.querySelectorAll('.ms-subject-btn:not([disabled])').forEach(btn => {
    btn.addEventListener('click', async () => {
      document.querySelectorAll('.ms-subject-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      msData = await loadSubject(btn.dataset.subject);
      activeTopicId = null;
      document.getElementById('msDetailEmpty').style.display   = 'flex';
      document.getElementById('msDetailContent').style.display = 'none';
      if (msData) {
        renderTopicList(msData.topics);
        if (msData.topics.length) {
          activeTopicId = msData.topics[0].id;
          renderTopicList(msData.topics);
          renderDetail(msData.topics[0]);
        }
      }
    });
  });
});

/* =============================================
   flashcards.js — ReviseIQ
   ============================================= */

let allCards   = [];
let deck       = [];      // current filtered + ordered deck
let deckIndex  = 0;
let knownSet   = new Set();
let reviewSet  = new Set();
let activeFilter = 'all';
let isFlipped  = false;

// ── Load cards ──────────────────────────────
async function loadCards(subject) {
  try {
    const res = await fetch(`data/flashcards_${subject}.json`);
    return await res.json();
  } catch (e) {
    console.error('Failed to load flashcard data:', e);
    return [];
  }
}

// ── Build topic dropdown ─────────────────────
function populateTopicFilter(cards) {
  const sel = document.getElementById('fcTopic');
  const topics = [...new Set(cards.map(c => c.topic))].sort();
  sel.innerHTML = '<option value="all">All topics</option>' +
    topics.map(t => `<option value="${t}">${t}</option>`).join('');
}

// ── Build deck from filter ───────────────────
function buildDeck() {
  const topic = document.getElementById('fcTopic').value;
  let source = allCards.filter(c => topic === 'all' || c.topic === topic);

  if (activeFilter === 'review') source = source.filter(c => reviewSet.has(c.id));
  if (activeFilter === 'known')  source = source.filter(c => knownSet.has(c.id));

  deck = source;
}

// ── Shuffle ──────────────────────────────────
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

// ── Render current card ──────────────────────
function renderCard(animate = true) {
  const wrap  = document.getElementById('fcCardWrap');
  const empty = document.getElementById('fcEmpty');
  const nav   = document.getElementById('fcNav');

  if (!deck.length) {
    wrap.style.display  = 'none';
    nav.style.display   = 'none';
    empty.style.display = 'flex';

    const allKnown = activeFilter === 'all' && knownSet.size === allCards.length;
    document.getElementById('fcEmptyTitle').textContent = allKnown ? 'You know them all! 🎉' : 'No cards here';
    document.getElementById('fcEmptyMsg').textContent   = allKnown
      ? 'You\'ve marked every card as known. Reset to start fresh.'
      : 'No cards match this filter. Try switching back to "All cards".';
    return;
  }

  empty.style.display = 'none';
  wrap.style.display  = 'block';
  nav.style.display   = 'flex';

  const card = deck[deckIndex];
  if (!card) return;

  // Unflip
  isFlipped = false;
  document.getElementById('fcCard').classList.remove('flipped');

  // Inject content
  document.getElementById('fcFrontTopic').textContent = card.topic;
  document.getElementById('fcBackTopic').textContent  = card.topic;
  document.getElementById('fcTerm').textContent        = card.term;
  document.getElementById('fcDefinition').textContent  = card.definition;
  document.getElementById('fcExample').textContent     = card.example ? `e.g. ${card.example}` : '';
  document.getElementById('fcExample').style.display   = card.example ? '' : 'none';

  // Highlight if already marked
  const knownBtn  = document.getElementById('markKnownBtn');
  const reviewBtn = document.getElementById('markReviewBtn');
  knownBtn.classList.toggle('active-state',  knownSet.has(card.id));
  reviewBtn.classList.toggle('active-state', reviewSet.has(card.id));

  // Prev/next buttons
  document.getElementById('prevBtn').disabled = deckIndex === 0;
  document.getElementById('nextBtn').disabled = deckIndex === deck.length - 1;

  // Progress label
  document.getElementById('fcProgressLabel').textContent = `Card ${deckIndex + 1} of ${deck.length}`;

  updateProgress();
  updateTopicPanel();

  if (animate) {
    wrap.classList.remove('card-enter', 'card-exit');
    void wrap.offsetWidth;
    wrap.classList.add('card-enter');
  }
}

// ── Progress bar ─────────────────────────────
function updateProgress() {
  const total   = deck.length || allCards.length;
  const known   = deck.filter(c => knownSet.has(c.id)).length;
  const current = deckIndex + 1;

  const knownPct   = (known / total) * 100;
  const currentPct = Math.max(0, ((current / total) * 100) - knownPct);

  document.getElementById('fcProgressKnown').style.width  = knownPct + '%';
  document.getElementById('fcProgressCurrent').style.width = currentPct + '%';
}

// ── Topic side panel ─────────────────────────
function updateTopicPanel() {
  const topics = [...new Set(allCards.map(c => c.topic))].sort();
  const container = document.getElementById('fcTopicList');

  container.innerHTML = topics.map(topic => {
    const total    = allCards.filter(c => c.topic === topic).length;
    const known    = allCards.filter(c => c.topic === topic && knownSet.has(c.id)).length;
    const pct      = total ? Math.round((known / total) * 100) : 0;
    return `
      <div class="fc-topic-row">
        <div class="fc-topic-row-header">
          <span class="fc-topic-row-name" title="${topic}">${topic}</span>
          <span class="fc-topic-row-count">${known}/${total}</span>
        </div>
        <div class="fc-topic-mini-track">
          <div class="fc-topic-mini-fill" style="width:${pct}%"></div>
        </div>
      </div>
    `;
  }).join('');
}

// ── Badge counts ─────────────────────────────
function updateBadges() {
  document.getElementById('reviewBadge').textContent = reviewSet.size;
  document.getElementById('knownBadge').textContent  = knownSet.size;
}

// ── Navigate ─────────────────────────────────
function goNext() {
  if (deckIndex < deck.length - 1) {
    deckIndex++;
    renderCard();
  }
}

function goPrev() {
  if (deckIndex > 0) {
    deckIndex--;
    renderCard();
  }
}

// ── Mark card ────────────────────────────────
function markKnown() {
  const card = deck[deckIndex];
  if (!card) return;
  knownSet.add(card.id);
  reviewSet.delete(card.id);
  updateBadges();

  // Advance automatically
  if (deckIndex < deck.length - 1) {
    deckIndex++;
    renderCard();
  } else {
    renderCard(false);
  }
  updateProgress();
  updateTopicPanel();
}

function markReview() {
  const card = deck[deckIndex];
  if (!card) return;
  reviewSet.add(card.id);
  knownSet.delete(card.id);
  updateBadges();
  if (deckIndex < deck.length - 1) {
    deckIndex++;
    renderCard();
  } else {
    renderCard(false);
  }
  updateProgress();
  updateTopicPanel();
}

// ── Init ─────────────────────────────────────
document.addEventListener('DOMContentLoaded', async () => {
  const subject = document.getElementById('fcSubject').value;
  allCards = await loadCards(subject);

  if (!allCards.length) {
    document.getElementById('fcEmpty').style.display = 'flex';
    document.getElementById('fcCardWrap').style.display = 'none';
    document.getElementById('fcNav').style.display = 'none';
    document.getElementById('fcEmptyTitle').textContent = 'No cards found';
    document.getElementById('fcEmptyMsg').textContent = 'Could not load flashcard data.';
    return;
  }

  populateTopicFilter(allCards);
  buildDeck();
  renderCard(false);
  updateBadges();

  // Flip card on click
  document.getElementById('fcCardWrap').addEventListener('click', () => {
    isFlipped = !isFlipped;
    document.getElementById('fcCard').classList.toggle('flipped', isFlipped);
  });

  // Keyboard navigation
  document.addEventListener('keydown', e => {
    if (e.target.tagName === 'SELECT' || e.target.tagName === 'INPUT') return;
    if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); goNext(); }
    if (e.key === 'ArrowLeft')  { e.preventDefault(); goPrev(); }
    if (e.key === 'ArrowUp' || e.key === 'Enter') {
      e.preventDefault();
      isFlipped = !isFlipped;
      document.getElementById('fcCard').classList.toggle('flipped', isFlipped);
    }
    if (e.key === 'k' || e.key === 'K') markKnown();
    if (e.key === 'r' || e.key === 'R') markReview();
  });

  // Nav buttons
  document.getElementById('nextBtn').addEventListener('click', goNext);
  document.getElementById('prevBtn').addEventListener('click', goPrev);
  document.getElementById('markKnownBtn').addEventListener('click', markKnown);
  document.getElementById('markReviewBtn').addEventListener('click', markReview);

  // Topic filter
  document.getElementById('fcTopic').addEventListener('change', () => {
    buildDeck();
    deckIndex = 0;
    renderCard();
  });

  // Subject change
  document.getElementById('fcSubject').addEventListener('change', async () => {
    allCards = await loadCards(document.getElementById('fcSubject').value);
    knownSet.clear();
    reviewSet.clear();
    populateTopicFilter(allCards);
    buildDeck();
    deckIndex = 0;
    renderCard();
    updateBadges();
  });

  // Shuffle
  document.getElementById('shuffleBtn').addEventListener('click', () => {
    const btn = document.getElementById('shuffleBtn');
    btn.classList.toggle('active');
    buildDeck();
    if (btn.classList.contains('active')) shuffle(deck);
    deckIndex = 0;
    renderCard();
  });

  // Reset
  document.getElementById('resetBtn').addEventListener('click', () => {
    knownSet.clear();
    reviewSet.clear();
    buildDeck();
    deckIndex = 0;
    activeFilter = 'all';
    document.querySelectorAll('.fc-tab').forEach(t => t.classList.toggle('active', t.dataset.filter === 'all'));
    renderCard();
    updateBadges();
  });

  // Empty state reset
  document.getElementById('fcEmptyReset').addEventListener('click', () => {
    knownSet.clear();
    reviewSet.clear();
    activeFilter = 'all';
    document.querySelectorAll('.fc-tab').forEach(t => t.classList.toggle('active', t.dataset.filter === 'all'));
    buildDeck();
    deckIndex = 0;
    renderCard();
    updateBadges();
  });

  // Filter tabs
  document.querySelectorAll('.fc-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      activeFilter = tab.dataset.filter;
      document.querySelectorAll('.fc-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      buildDeck();
      deckIndex = 0;
      renderCard();
    });
  });
});

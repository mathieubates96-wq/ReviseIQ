/* =============================================
   ReviseIQ — timer.js
   Pomodoro Study Timer (25 min)
   ============================================= */

(function initPomodoro() {
  const WORK_SECONDS = 25 * 60;

  let totalSeconds  = WORK_SECONDS;
  let remaining     = WORK_SECONDS;
  let intervalId    = null;
  let running       = false;

  // ── DOM refs ──────────────────────────────
  const timeDisplay  = document.getElementById('timerTime');
  const labelDisplay = document.getElementById('timerLabel');
  const fillEl       = document.getElementById('timerFill');
  const btnStart     = document.getElementById('timerBtnStart');
  const btnPause     = document.getElementById('timerBtnPause');
  const btnReset     = document.getElementById('timerBtnReset');

  if (!timeDisplay) return; // timer not on this page

  // SVG circle circumference: r=54 → C = 2π×54 ≈ 339.29
  const CIRCUMFERENCE = 2 * Math.PI * 54;
  fillEl.style.strokeDasharray  = CIRCUMFERENCE;
  fillEl.style.strokeDashoffset = 0;

  // ── Helpers ───────────────────────────────
  function fmt(s) {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
  }

  function updateDisplay() {
    timeDisplay.textContent = fmt(remaining);
    const progress = 1 - remaining / totalSeconds;
    fillEl.style.strokeDashoffset = CIRCUMFERENCE * (1 - progress);
  }

  function beep() {
    try {
      const AudioCtx = window.AudioContext || /** @type {any} */ (window).webkitAudioContext;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, ctx.currentTime);
      gain.gain.setValueAtTime(0.4, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 1.2);
    } catch (_) {}
  }

  function setButtons(state) {
    // state: 'idle' | 'running' | 'paused' | 'done'
    btnStart.disabled = state === 'running' || state === 'done';
    btnPause.disabled = state !== 'running';
    btnReset.disabled = false;

    if (state === 'done') {
      btnStart.textContent = '▶ Start';
    } else if (state === 'paused') {
      btnStart.textContent = '▶ Resume';
    } else {
      btnStart.textContent = '▶ Start';
    }
  }

  function tick() {
    remaining--;
    updateDisplay();
    if (remaining <= 0) {
      clearInterval(intervalId);
      running = false;
      labelDisplay.textContent = '🎉 Break time!';
      setButtons('done');
      beep();
    }
  }

  // ── Controls ──────────────────────────────
  btnStart.addEventListener('click', () => {
    if (running || remaining <= 0) return;
    running = true;
    labelDisplay.textContent = '⏳ Focus time';
    setButtons('running');
    intervalId = setInterval(tick, 1000);
  });

  btnPause.addEventListener('click', () => {
    if (!running) return;
    clearInterval(intervalId);
    running = false;
    labelDisplay.textContent = '⏸ Paused';
    setButtons('paused');
  });

  btnReset.addEventListener('click', () => {
    clearInterval(intervalId);
    running = false;
    remaining = totalSeconds;
    updateDisplay();
    labelDisplay.textContent = 'Study Session';
    setButtons('idle');
  });

  // ── Init ──────────────────────────────────
  updateDisplay();
  setButtons('idle');
})();

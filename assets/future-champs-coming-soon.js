(() => {
  'use strict';
  const cinema = document.querySelector('[data-cinema]');
  const holding = document.querySelector('.holding');
  const skip = document.querySelector('[data-skip]');
  const replay = document.querySelector('[data-replay]');
  const soundButton = document.querySelector('[data-sound]');
  const bell = document.querySelector('[data-bell]');
  const title = document.querySelector('#page-title');
  if (!cinema || !holding || !title) return;

  document.querySelector('[data-year]').textContent = String(new Date().getFullYear());
  const scenes = Object.fromEntries(
    [...cinema.querySelectorAll('[data-scene]')].map(el => [el.dataset.scene, el])
  );
  const videos = ['seattle', 'round', 'pickup'].map(key => scenes[key].querySelector('video'));
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  const saveData = Boolean(conn?.saveData || /(^|-)2g$/.test(conn?.effectiveType || '') || conn?.effectiveType === 'slow-2g');

  let timers = [];
  let running = false;
  let soundOn = false;
  const schedule = (callback, milliseconds) => {
    timers.push(setTimeout(callback, milliseconds));
  };
  const cancel = () => {
    timers.forEach(clearTimeout);
    timers = [];
  };
  const stopMedia = () => {
    for (const video of videos) { try { video.pause(); video.currentTime = 0; } catch (_) {} }
    if (bell) { bell.pause(); try { bell.currentTime = 0; } catch (_) {} }
  };
  const playBell = () => {
    if (!soundOn || !bell) return;
    bell.currentTime = 0;
    bell.play().catch(() => {});
  };
  const scene = name => {
    for (const [key, el] of Object.entries(scenes)) {
      el.classList.toggle('active', key === name);
      el.setAttribute('aria-hidden', key === name ? 'false' : 'true');
    }
  };
  const finish = () => {
    if (!running) return;
    cancel();
    stopMedia();
    running = false;
    cinema.hidden = true;
    cinema.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('is-playing');
    holding.inert = false;
    holding.removeAttribute('aria-hidden');
    replay.hidden = false;
    try { sessionStorage.setItem('fcComingSoonPlayed', '1'); } catch (_) {}
    title.setAttribute('tabindex', '-1');
    title.focus({preventScroll:true});
  };
  const playSceneVideo = index => {
    const video = videos[index];
    if (!video || !running) return;
    video.muted = !soundOn;
    video.preload = 'auto';
    video.playsInline = true;
    try { video.load(); } catch (_) {}
    video.play().catch(() => { if (running) finish(); });
  };
  const play = ({focusSkip = false} = {}) => {
    cancel();
    stopMedia();
    running = true;
    cinema.hidden = false;
    cinema.setAttribute('aria-hidden', 'false');
    holding.inert = true;
    holding.setAttribute('aria-hidden', 'true');
    document.body.classList.add('is-playing');
    scene('seattle');
    playSceneVideo(0);
    if (focusSkip) skip?.focus({preventScroll:true});

    // Existing source films, edited by scene timing only:
    // Seattle -> sparring -> helping fighter up -> Round 8 wordmark -> Coming Soon.
    schedule(() => { if (!running) return; videos[0].pause(); scene('round'); playBell(); playSceneVideo(1); }, 4200);
    schedule(() => { if (!running) return; videos[1].pause(); scene('pickup'); playSceneVideo(2); }, 9500);
    schedule(() => { if (!running) return; videos[2].pause(); scene('title'); playBell(); }, 15700);
    schedule(finish, 18500);
  };

  skip?.addEventListener('click', finish);
  replay?.addEventListener('click', () => { soundOn = false; soundButton.setAttribute('aria-pressed', 'false'); soundButton.textContent = 'Sound off'; play({focusSkip:true}); });
  document.querySelector('.skip-link')?.addEventListener('click', () => { if (running) finish(); });
  soundButton?.addEventListener('click', () => {
    soundOn = !soundOn;
    soundButton.setAttribute('aria-pressed', String(soundOn));
    soundButton.textContent = soundOn ? 'Sound on' : 'Sound off';
    for (const video of videos) video.muted = !soundOn;
  });
  document.addEventListener('keydown', event => {
    if (running && event.key === 'Escape') finish();
  });

  let played = false;
  try { played = sessionStorage.getItem('fcComingSoonPlayed') === '1'; } catch (_) {}
  if (!reducedMotion && !saveData && (!played || new URLSearchParams(location.search).has('intro'))) {
    play();
  } else {
    replay.hidden = false;
  }
})();

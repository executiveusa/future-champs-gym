(() => {
  const root = document.documentElement;
  const intro = document.querySelector('[data-fc-intro]');
  const site = document.querySelector('[data-fc-site]');
  if (!intro || !site) return;

  const scenes = {
    seattle: intro.querySelector('[data-scene="seattle"]'),
    round: intro.querySelector('[data-scene="round"]'),
    pickup: intro.querySelector('[data-scene="pickup"]'),
    quote: intro.querySelector('[data-scene="quote"]'),
    title: intro.querySelector('[data-scene="title"]'),
    enter: intro.querySelector('[data-scene="enter"]')
  };

  const bell = intro.querySelector('[data-audio="bell"]');
  const bag = intro.querySelector('[data-audio="bag"]');
  const start = intro.querySelector('[data-start]');
  const skip = intro.querySelector('[data-skip]');
  const enter = intro.querySelector('[data-enter]');

  let timers = [];
  let started = false;

  const later = (fn, ms) => {
    const id = window.setTimeout(fn, ms);
    timers.push(id);
    return id;
  };

  const clearTimers = () => {
    timers.forEach(clearTimeout);
    timers = [];
  };

  const stopMedia = () => {
    Object.values(scenes).forEach(el => {
      if (el && el.tagName === 'VIDEO') {
        el.pause();
        el.currentTime = 0;
      }
    });
    [bell, bag].forEach(a => {
      if (!a) return;
      a.pause();
      a.currentTime = 0;
    });
  };

  const showScene = name => {
    Object.entries(scenes).forEach(([key, el]) => {
      if (!el) return;
      const active = key === name;
      el.classList.toggle('is-active', active);
      el.setAttribute('aria-hidden', active ? 'false' : 'true');
    });
  };

  const playVideo = async video => {
    if (!video) return;
    video.currentTime = 0;
    video.muted = false;
    try { await video.play(); }
    catch {
      video.muted = true;
      try { await video.play(); } catch {}
    }
  };

  const playAudio = async audio => {
    if (!audio) return;
    audio.currentTime = 0;
    try { await audio.play(); } catch {}
  };

  const revealSite = () => {
    clearTimers();
    stopMedia();
    intro.classList.add('is-leaving');
    sessionStorage.setItem('fcIntroPlayed', '1');
    later(() => {
      intro.hidden = true;
      site.removeAttribute('aria-hidden');
      site.classList.add('is-visible');
      root.classList.remove('fc-intro-lock');
      document.body.style.overflow = '';
      site.querySelector('a,button,[tabindex]:not([tabindex="-1"])')?.focus({preventScroll:true});
    }, 700);
  };

  const runIntro = () => {
    if (started) return;
    started = true;
    start.hidden = true;
    skip.hidden = false;

    showScene('seattle');
    playVideo(scenes.seattle);

    later(() => {
      scenes.seattle?.pause();
      showScene('');
    }, 4080);

    later(() => playAudio(bell), 4250);

    later(() => {
      showScene('round');
      playVideo(scenes.round);
    }, 6600);

    later(() => {
      scenes.round?.pause();
      showScene('pickup');
      playVideo(scenes.pickup);
    }, 12150);

    later(() => {
      scenes.pickup?.pause();
      showScene('quote');
    }, 18650);

    later(() => showScene(''), 22400);

    later(() => playAudio(bag), 22600);

    later(() => {
      showScene('title');
      playAudio(bell);
    }, 22950);

    later(() => showScene(''), 25550);

    later(() => {
      showScene('enter');
      enter?.focus({preventScroll:true});
    }, 26000);
  };

  start?.addEventListener('click', runIntro);
  skip?.addEventListener('click', revealSite);
  enter?.addEventListener('click', revealSite);

  if (sessionStorage.getItem('fcIntroPlayed') === '1') {
    intro.hidden = true;
    site.removeAttribute('aria-hidden');
    site.classList.add('is-visible');
    return;
  }

  site.setAttribute('aria-hidden', 'true');
  root.classList.add('fc-intro-lock');
  document.body.style.overflow = 'hidden';

  // Hold on Seattle as the opening frame until the user grants sound playback.
  showScene('seattle');
  scenes.seattle?.load();
  start.hidden = false;
  skip.hidden = false;
})();
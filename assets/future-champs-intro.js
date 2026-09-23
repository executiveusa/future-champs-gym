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

  const videos = {
    seattle: scenes.seattle?.querySelector('video'),
    round: scenes.round?.querySelector('video'),
    pickup: scenes.pickup?.querySelector('video')
  };

  const bell = intro.querySelector('[data-audio="bell"]');
  const bag = intro.querySelector('[data-audio="bag"]');
  const start = intro.querySelector('[data-start]');
  const skip = intro.querySelector('[data-skip]');
  const enter = intro.querySelector('[data-enter]');
  const forceIntro = new URLSearchParams(location.search).get('intro') === '1';

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

  const showScene = name => {
    Object.entries(scenes).forEach(([key, el]) => {
      if (!el) return;
      const active = key === name;
      el.classList.toggle('is-active', active);
      el.setAttribute('aria-hidden', active ? 'false' : 'true');
    });
  };

  const stopMedia = () => {
    Object.values(videos).forEach(video => {
      if (!video) return;
      video.pause();
      video.currentTime = 0;
    });
    [bell, bag].forEach(audio => {
      if (!audio) return;
      audio.pause();
      audio.currentTime = 0;
    });
  };

  const playVideo = async (video, muted = false) => {
    if (!video) return;
    video.pause();
    video.currentTime = 0;
    video.loop = false;
    video.muted = muted;
    try {
      await video.play();
    } catch {
      video.muted = true;
      try { await video.play(); } catch {}
    }
  };

  const playAudio = async audio => {
    if (!audio) return;
    audio.pause();
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

  const runIntro = async () => {
    if (started) return;
    started = true;
    clearTimers();
    stopMedia();
    start.hidden = true;
    skip.hidden = false;

    showScene('seattle');
    await playVideo(videos.seattle, false);

    later(() => {
      videos.seattle?.pause();
      showScene('');
    }, 4080);

    later(() => playAudio(bell), 4250);

    later(() => {
      showScene('round');
      playVideo(videos.round, false);
    }, 6600);

    later(() => {
      videos.round?.pause();
      showScene('pickup');
      playVideo(videos.pickup, false);
    }, 12150);

    later(() => {
      videos.pickup?.pause();
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

  if (!forceIntro && sessionStorage.getItem('fcIntroPlayed') === '1') {
    intro.hidden = true;
    site.removeAttribute('aria-hidden');
    site.classList.add('is-visible');
    return;
  }

  site.setAttribute('aria-hidden', 'true');
  root.classList.add('fc-intro-lock');
  document.body.style.overflow = 'hidden';

  showScene('seattle');
  if (videos.seattle) {
    videos.seattle.muted = true;
    videos.seattle.loop = true;
    videos.seattle.play().catch(() => {});
  }
  start.hidden = false;
  skip.hidden = false;
})();
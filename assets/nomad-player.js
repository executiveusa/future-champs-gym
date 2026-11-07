"use strict";
(() => {
  const root = document.querySelector("[data-nomad-player]");
  if (!root) return;
  const button = root.querySelector("[data-nomad-start]");
  const video = root.querySelector("video");
  const status = root.querySelector("[data-nomad-status]");
  const setStatus = text => { status.textContent = text; };
  fetch("/assets/nomad-video.json", {cache:"no-store"})
    .then(r => { if (!r.ok) throw new Error("manifest unavailable"); return r.json(); })
    .then(data => {
      const url = data.playbackUrl;
      if (data.publish !== true || data.rightsStatus !== "approved" ||
          typeof url !== "string" || !/^https:\/\//.test(url)) {
        setStatus("Trailer prepared. Publication and streaming endpoint are not yet enabled.");
        return;
      }
      if (typeof data.posterUrl === "string" && /^https:\/\//.test(data.posterUrl))
        video.poster = data.posterUrl;
      if (typeof data.captionsUrl === "string" && /^https:\/\//.test(data.captionsUrl)) {
        const track = document.createElement("track");
        track.kind = "captions"; track.label = "English"; track.srclang = "en";
        track.src = data.captionsUrl; video.append(track);
      }
      button.hidden = false;
      setStatus("Tap to play · approximately 17 seconds.");
      button.addEventListener("click", async () => {
        button.hidden = true;
        video.hidden = false;
        video.src = url;
        video.load();
        try { await video.play(); } catch { setStatus("Press play in the video controls."); }
      }, {once:true});
      video.addEventListener("error", () => setStatus("Playback unavailable. Please try again later."));
    }).catch(() => setStatus("Video temporarily unavailable."));
})();

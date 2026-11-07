# ROUND 8 / HyperFrames motion identity v1

**Creative decision:** This replaces the low-quality Nomad review cut's title treatment. It is a reusable identity sting, **not** approval of the cut or website release.

- Source: `motion/round8-intro/index.html`
- Exact mark: `assets/future-champs-round8.svg` (custom outlined vector typography; do not substitute a generic font)
- Canonical composition: 1920×1080, 16:9, 4.0 seconds, **silent source render**. The distributed video identity adds an original synthesized sonic logo from the review package.
- Action: restraint → rope-rule tension → red sweeping strike → exact wordmark reveals → restrained final hard flash → edit point
- Palette: ink `#08090b`, chalk white `#edf0ef`, signal red `#be303d`
- Technical contract: HyperFrames `data-composition-id`, timed `class="clip"` nodes and paused GSAP timeline registered under the composition key. See https://hyperframes.app/docs/1-startup/2-quickstart

## Local rendering
From repository root, with Node 22+, FFmpeg, and HyperFrames CLI installed, run from this directory:
```sh
cd motion/round8-intro
npx hyperframes lint
npx hyperframes preview
npx hyperframes render --output round8-identity-v1.mp4
```
**Verified:** GitHub Actions executed HyperFrames 0.9.19 lint and rendered a 4.000-second 1920×1080 MP4 at 30fps successfully. See https://github.com/executiveusa/future-champs-gym/actions/runs/42332025695 (artifact `round8-hyperframes-review`). Initial failed lints were repaired before this passing proof. Production remains untouched.

## Editorial sequence following the sting
The film needs its own cut. Recommended direction: immediate boxing action for 1.5–2 seconds, then sustained 3–5 second shots with a clear person/setting/meaning; no random food or crowd cutaways. Sound should be sourced from approved location recordings rather than generic cinematic drums. Tell the story with authentic ambient audio and human voices before overlay music.

## Gate
An editor must reject/fix pacing, continuity, subject credit, aspect ratio, audio mix and readability. No public upload, merge or deploy until approved. Rollback: revert the motion files; legacy cut remains unreferenced by the production site.

## Brand package v1
Reusable widescreen/short/vertical export contract and Nomad cut approval gate are documented in [BRAND_STANDARD_V1.md](BRAND_STANDARD_V1.md). For reconstructing the image-only variants from the canonical HyperFrames master see [`export-variants.sh`](export-variants.sh); original synchronized sound and full editorial-cut Python/FFmpeg recipe are in the internal reviewer package. Do not commit source video or output binaries to the repository.

# FUTURE CHAMPS / ROUND 08 — Film Identity Standard (working v1)
Date: 2026-11-07
Status: **Version-locked for reuse, but creative approval pending.** This is one brand package, not three independent competing logos.

## Non-negotiable identity source
- The wordmark is the EXACT outlined vector from `assets/future-champs-round8.svg`, not a font substitution. Its provenance is the source of truth for all formats.
- HyperFrames motion source: `motion/round8-intro/index.html`; original canonical 1920×1080 4s composition; verified rendered in Actions run https://github.com/executiveusa/future-champs-gym/actions/runs/42332025695 .
- Visual language: charcoal/ink `#08090b`, paper white `#edf0ef`, accent red `#be303d`. Letterform geometry cannot be stretched.
- Audio identity: **original synthesized** low impact, short metallic tones and restrained friction swish; no sample library, borrowed track or commercial music. The original sound's editable WAV and build recipe are in the reviewer export package, not GitHub binary history.
- Animation should earn its duration. Long-form opener maximum four seconds; short-form one to two seconds; mobile vertical a real 9:16 design, not letterboxed export.

## Export contract and verified first review outputs
| Asset | Dimensions | Actual duration | Purpose |
| --- | --- | --- | --- |
| `round8-film-16x9.mp4` | 1920×1080 | 4.00s | Official working long-form opener |
| `round8-social-16x9.mp4` | 1920×1080 | 1.57s | Short widescreen hook/intro |
| `round8-vertical-9x16.mp4` | 720×1280 | 2.60s | Social vertical opener with the exact wordmark revealed in two rows |
| `nomad-documentary-cut-16x9.mp4` | 1280×720 | 34.63s | Re-edited Nomad narrative draft, owner-confirmed sources |
| `nomad-vertical-story-9x16.mp4` | 720×1280 | 20.63s | Alternate vertical Nomad story draft |

**Provenance of generated edits:** Reusable Python/FFmpeg build source and integrity/codec report accompany the internally downloadable 2026-11-07 package. Source footage remains in the original owner-controlled Drive archive and is not copied to GitHub. Existing HyperFrames source remains GitHub canonical.

## Editor cut rules
1. No opening music bed or generic motivational drums; establish context with truthful gym atmosphere and footage.
2. Film cut: **cold open action → Round 8 identity → training progression → ringside → forward-looking final beat**. Respect action direction and shot continuity.
3. Nomad v2 references three owner-supplied files only: `cad195eb4a2d82e3e13035d4977ed7b5.mp4` (12–35s subranges), `VID_20260912_153741642.mp4` (11–20s subranges), and `FB_VID_4213978428419504448.mp4` (48–53s); remaining six owner-submitted sources remain parked, not forced into the cut.
4. Original camera audio retained where present; original sonic logo only during title sting. No invented interview voice-over, biography, or news footage.
5. Real camera footage is often vertical. Long-form uses an intentional dark editorial graphic stage rather than stretching it to fill landscape; the social cut uses 9:16 originals.
6. Keep any subject/guardian releases on a separate legal track even after owner confirms footage rights. Avoid claims about named people from appearance alone.

## Repeatable delivery flow
`Drive originals (immutable) → scene-inventory → Montage or reversible FFmpeg cut script → HyperFrames identity master + original sound → 16:9/9:16 H.264/AAC +faststart exports → independent visual/audio review → private R2 → verified range requests & mobile Safari/Chrome → explicit publication approval.`

### Reproducibility and QA
- First 5 deliverables were decoded to completion and validated for H.264, AAC, duration, dimensions and MP4 faststart. Independent creative/human review has **not** been completed.
- All generated MP4s are review copies, not approved public master files.
- The site manifest `assets/nomad-video.json` remains `publish:false` with no public playbackUrl.
- The R2 bucket remains isolated. No media upload, public video link, production deployment, or PR merge is authorized by this brand lock.
- Rollback: remove/disable only the draft manifest and restore previous Nomad player title copy; keep original HyperFrames SVG and videos intact.

## Suggested follow-up refinements
Tighten silent frames and natural-sound transitions by ear; review social safe areas and accessibility captions; if a cut genuinely needs narration, commission it from approved participants rather than generating fabricated interview dialogue. Version any accepted changes as v2 — do not silently replace v1.

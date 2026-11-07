#!/usr/bin/env bash
# Round 08: canonical identity export wrappers, 2026-11-07.
# The HyperFrames composition and exact vector mark are the source of truth.
set -euo pipefail
INPUT="${1:?Usage: bash export-variants.sh <round8-hyperframes-master.mp4> [out-dir]}"
DEST="${2:-round8-exports}"
mkdir -p "$DEST"
test -s "$INPUT"
command -v ffmpeg >/dev/null
# Master original sound cue is supplied in the review package and is not in GitHub.
if [[ -f "$DEST/round8-sonic-logo-original.wav" ]]; then
  ffmpeg -y -v error -i "$INPUT" -i "$DEST/round8-sonic-logo-original.wav" \
   -map 0:v:0 -map 1:a:0 -c:v copy -c:a aac -b:a 160k \
   -movflags +faststart "$DEST/round8-film-16x9.mp4"
else
  ffmpeg -y -v error -i "$INPUT" -c:v copy -an -movflags +faststart \
    "$DEST/round8-film-16x9.mp4"
  echo "NOTE: soundless film export; copy approved original sonic cue into $DEST and rerun." >&2
fi
# 1.57-sec fast intro. No letterform substitution.
ffmpeg -y -v error -ss .4 -t 1.75 -i "$INPUT" \
  -vf "setpts=PTS/1.12,fps=30" -an -c:v libx264 -crf 21 -preset veryfast \
  -pix_fmt yuv420p -movflags +faststart "$DEST/round8-social-16x9.mp4"
# Vertical: two camera crops of the exact existing outlined letters, stacked.
FONT=/usr/share/fonts/truetype/dejavu/DejaVuSansCondensed-Bold.ttf
if [[ -f "$FONT" ]]; then
  ffmpeg -y -v error -ss .4 -t 2.6 -i "$INPUT" \
    -filter_complex "[0:v]fps=30,split=2[s1][s2];[s1]crop=760:500:120:290,scale=700:460[future];[s2]crop=880:500:900:290,scale=700:398[champs];color=c=0x090b10:s=720x1280:r=30:d=2.6[bg];[bg][future]overlay=10:330:shortest=1[one];[one][champs]overlay=10:670:shortest=1,drawtext=fontfile=$FONT:text='ROUND 08':fontsize=54:fontcolor=white:x=52:y=170,drawtext=fontfile=$FONT:text='ORIGINAL FILMS':fontsize=21:fontcolor=white:x=53:y=260,drawtext=fontfile=$FONT:text='THE FIGHT BEGINS BEFORE THE BELL':fontsize=18:fontcolor=white:x=53:y=1125,drawbox=x=52:y=1165:w=616:h=6:color=0xbe303d:t=fill[v]" \
    -map "[v]" -an -c:v libx264 -crf 21 -preset veryfast \
    -pix_fmt yuv420p -movflags +faststart "$DEST/round8-vertical-9x16.mp4"
else
  echo "Font needed for secondary labels: $FONT (the branded lettering remains vector)." >&2
fi
echo "Exported. Reviewer package additionally contains synchronized original sound and the editable complete Nomad cut recipe."

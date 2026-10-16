#!/usr/bin/env bash
set -euo pipefail

# Public holding mode: only index + its required assets are published.
# The full media site remains in GitHub branches; do not accidentally ship it.
rm -rf dist-preview
mkdir -p dist-preview/assets
cp index.html dist-preview/index.html
cp assets/future-champs-round8.svg dist-preview/assets/future-champs-round8.svg
cp assets/future-champs-coming-soon.css dist-preview/assets/future-champs-coming-soon.css
cp assets/future-champs-coming-soon.js dist-preview/assets/future-champs-coming-soon.js
test ! -e dist-preview/watch
test ! -e dist-preview/gyms-and-corners
echo 'Coming Soon bundle:'
find dist-preview -type f | sort

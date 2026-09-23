#!/usr/bin/env bash
set -euo pipefail

rm -rf dist-preview
mkdir -p dist-preview

copy_route() {
  local route="$1"
  mkdir -p "dist-preview/$route"
  cp "$route/index.html" "dist-preview/$route/index.html"
}

cp index.html dist-preview/index.html
cp -R assets dist-preview/assets
cp sitemap.xml dist-preview/sitemap.xml

copy_route watch
copy_route fighters
copy_route gyms-and-corners
copy_route blog
cp blog/post.html dist-preview/blog/post.html
copy_route about
copy_route get-involved

echo "Preview bundle contains only public site files:"
find dist-preview -maxdepth 3 -type f | sort

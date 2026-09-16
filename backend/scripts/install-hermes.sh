#!/usr/bin/env bash
set -euo pipefail

# Install on the private operations host, never inside the public web root.
backend_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
runtime_root="${HERMES_RUNTIME_ROOT:-${backend_root}/.runtime}"
hermes_src="${runtime_root}/hermes-agent"
venv_path="${runtime_root}/hermes-venv"
firstmate_src="${runtime_root}/firstmate"

mkdir -p "$runtime_root"
if [[ ! -d "$hermes_src/.git" ]]; then
  git clone --depth 1 https://github.com/NousResearch/hermes-agent.git "$hermes_src"
fi
if [[ ! -d "$firstmate_src/.git" ]]; then
  git clone --depth 1 https://github.com/kunchenguid/firstmate.git "$firstmate_src"
fi

uv venv "$venv_path" --python 3.11
uv pip install --python "$venv_path/bin/python" -e "$hermes_src"

echo "Hermes installed at $venv_path"
echo "Firstmate source available at $firstmate_src"
echo "Next: configure Hermes, review config/firstmate.routes.yaml, then start the private gateway."

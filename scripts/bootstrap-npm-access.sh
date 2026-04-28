#!/usr/bin/env bash
set -euo pipefail

NPM_TOKEN_VALUE="${NPM_TOKEN:-}"
NPM_REGISTRY_VALUE="${NPM_REGISTRY:-https://registry.npmjs.org/}"
NPM_SCOPE_VALUE="${NPM_SCOPE:-}"

if [[ -z "$NPM_TOKEN_VALUE" ]]; then
  echo "ERROR: NPM_TOKEN is required."
  echo "Set it with: export NPM_TOKEN=<your-token>"
  exit 1
fi

host="${NPM_REGISTRY_VALUE#https://}"
host="${host#http://}"
host="${host%/}"

if [[ -n "$NPM_SCOPE_VALUE" ]]; then
  cat > .npmrc <<RC
registry=${NPM_REGISTRY_VALUE}
${NPM_SCOPE_VALUE}:registry=${NPM_REGISTRY_VALUE}
//${host}/:_authToken=${NPM_TOKEN_VALUE}
always-auth=true
RC
else
  cat > .npmrc <<RC
registry=${NPM_REGISTRY_VALUE}
//${host}/:_authToken=${NPM_TOKEN_VALUE}
always-auth=true
RC
fi

echo "Wrote repository .npmrc for ${NPM_REGISTRY_VALUE}."
echo "Run: npm whoami --registry ${NPM_REGISTRY_VALUE}"

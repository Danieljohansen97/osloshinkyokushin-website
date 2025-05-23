#!/usr/bin/env bash

echo
echo "*******************************************"
echo "*** Generating translationkeys for i18n ***"
echo "*******************************************"
echo

PROJECT_HOME=$(git rev-parse --show-toplevel)
SCRIPT_HOME="$PROJECT_HOME/src/tools"
i18n_HOME="$PROJECT_HOME/src/i18n"

translations="$i18n_HOME/translations/no/translations.json"
translationKeys="$i18n_HOME/translations/translationKeys.ts"

KEYS=$(jq 'reduce paths(type!="object" and type=="string") as $p (.;
  setpath($p; ($p | join("."))))
' < $translations)

export KEYS
cat "$SCRIPT_HOME/translationKeys.template" | envsubst > $translationKeys

npx prettier --write $translationKeys >/dev/null

cat $translationKeys

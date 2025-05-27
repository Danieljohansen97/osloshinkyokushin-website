#!/usr/bin/env bash
PROJECT_HOME=$(git rev-parse --show-toplevel)
SCRIPT_HOME="$PROJECT_HOME/tools"
i18n_HOME="$PROJECT_HOME/src/i18n"

# All translation files across all languages
translation_files="$i18n_HOME/translations/*/translations.json"

# Destination file
translationKeys_file="$i18n_HOME/translations/translationKeys.ts"

# Supress resulting file output?
quiet=false

while getopts q flag
do
    case "${flag}" in
        q) quiet=true;;
    esac
done

if [ "$quiet" != "true" ]; then
  echo
  echo "*******************************************"
  echo "*** Generating translationkeys for i18n ***"
  echo "*******************************************"
  echo
fi

# Create a union of the different translation files.
# This way, we don't miss out on any keys that may have been added
# to one of the languages but not the other.
#
# The translated texts will be combined willy-nilly,
# but we only care about the keys so that is acceptable.
translations=$(jq -s 'reduce .[] as $obj ({}; . * $obj)' $translation_files)

# Then, we get all the keys from the combined translations object
# and replace the values with the dotted-out path to the related translation.
KEYS=$(jq 'reduce paths(type!="object" and type=="string") as $path (.;
  setpath($path; ($path | join("."))))
' <<< $translations)

export KEYS
cat "$SCRIPT_HOME/translationKeys.template" | envsubst > $translationKeys_file

# Prettify the translation keys file to match TS standards
npx prettier --write $translationKeys_file > /dev/null

if [ "$quiet" != "true" ]; then
  echo "Operation successful. The following has been written to"
  echo "$translationKeys_file:"
  echo
  cat $translationKeys_file
fi

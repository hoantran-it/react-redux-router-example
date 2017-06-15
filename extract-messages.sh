#!/usr/bin/env bash
node node_modules/extract-react-intl-messages/cli.js -l=en,vi -o src/i18n -d en --flat false 'src/i18n/messages.js'
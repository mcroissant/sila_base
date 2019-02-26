#!/usr/bin/env bash
SCHEMA_BASE_URL=https://gitlab.com/SiLA2/sila_base/raw/master/schema/
grep -rl $(SCHEMA_BASE_URL) schema/ | xargs sed -i 's|'"$SCHEMA_BASE_URL"'||g'
find feature_definitions/ -type f -name "*.sila.xml" | xargs xmllint --schema schema/FeatureDefinition.xsd --noout

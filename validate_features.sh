#!/usr/bin/env bash
SCHEMA_BASE_URL=https://gitlab.com/SiLA2/sila_base/raw/master/schema/
LOCAL_SCHEMA_URI=file://$(pwd)/schema/

# Replace schema location on XSD to relative paths
grep -rnl "$SCHEMA_BASE_URL" . --include *.xsd | xargs sed -i 's|'"$SCHEMA_BASE_URL"'||g'

# replace schema reference in XML's to local file
grep -rnl "$SCHEMA_BASE_URL" . --include *.xml | xargs sed -i 's|'"$SCHEMA_BASE_URL"'|'"$LOCAL_SCHEMA_URI"'|g'

find feature_definitions/ -type f -name "*.sila.xml" | xargs xmllint --schema schema/FeatureDefinition.xsd --noout

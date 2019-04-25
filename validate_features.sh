#!/usr/bin/env bash
INVALID_XML=`comm -23 <(find feature_definitions/ -type f -name "*.xml") <(find feature_definitions/ -type f -name "*.sila.xml")`

if [ -z "$INVALID_XML" ]
then
      echo "No XML files found without SiLA Extension"
else
      printf '%s\n' "Error: Only feature definitions with '*.sila.xml' are allowed: $INVALID_XML" >&2
      exit 1
fi

find feature_definitions/ -type f -name "*.sila.xml" | xargs xmllint --schema schema/FeatureDefinition.xsd --noout

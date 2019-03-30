#!/usr/bin/env bash
find feature_definitions/ -type f -name "*.sila.xml" | xargs xmllint --schema schema/FeatureDefinition.xsd --noout

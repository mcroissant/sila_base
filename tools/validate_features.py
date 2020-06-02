# python script for validating all schemas in repository according to current FDL schema

import os
from lxml import etree

XSI = "http://www.w3.org/2001/XMLSchema-instance"
SILA_VERSION = "1.0"
SILA_SCHEMA_LOC = "https://gitlab.com/SiLA2/sila_base/raw/master/schema/FeatureDefinition.xsd"

schema_parent_dir =  ".."

def validate_feature(qualified_filename):
    print( 'Validating: ' + qualified_filename )

    # Schema validation
    schema_xsd = etree.XMLSchema(
        etree.parse(os.path.join(schema_parent_dir, "schema", "FeatureDefinition.xsd"))
    )
    feature_xml = etree.parse(qualified_filename)
    schema_xsd.assertValid(feature_xml)

    # SiLA Version Check
    sila_version = feature_xml.xpath("@SiLA2Version")[0]
    if sila_version != SILA_VERSION:
        raise Exception("Features in sila_base must be of version " + SILA_VERSION)

    # Check use case and correct location
    originator_path = convert_to_path(feature_xml.xpath("@Originator"))
    category_path = convert_to_path(feature_xml.xpath("@Category"))
    schemaLocation = convert_to_path(feature_xml.xpath("//*/@xsi:schemaLocation", namespaces={'xsi': XSI}))\
        .replace("\\", ".")

    if SILA_SCHEMA_LOC not in schemaLocation:
        raise Exception("Features schema location must contain `" + SILA_SCHEMA_LOC +
                       "` but found `" + schemaLocation + "` in feature `" + qualified_filename + "`.")

    expected_directory = os.path.join(
        schema_parent_dir,
        "feature_definitions",
        originator_path,
        category_path
    )

    filename = qualified_filename.split(os.sep)[-1]
    expected_filename = os.path.join(
        expected_directory,
        filename
    )

    if expected_filename != qualified_filename:
        raise Exception("Features need to be located in an originator + category folder structure. " +
                            filename + " needs to be located in " + expected_directory)
    print('Validated')

def convert_to_path(feature_namespace):
    if feature_namespace:
        namespace = str(feature_namespace[0])
        return namespace.replace(".", os.sep)
    else:
        return ""

def main():
    for (dirpath, dirnames, filenames) in os.walk(os.path.join(schema_parent_dir, "feature_definitions")):
        for filename in filenames:
            qualified_filename = os.path.join(dirpath, filename)
            if filename.endswith(".xml"):
                if filename.endswith(".sila.xml"):
                    validate_feature(qualified_filename)
                else:
                    raise Exception("Only feature definitions ending with '.sila.xml' are allowed ! but found : ''" +
                                        qualified_filename + "'")

if __name__ == "__main__":
    main()

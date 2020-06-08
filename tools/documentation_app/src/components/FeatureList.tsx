import React from "react";
import CoreList from "../documentation/features/feature_list_core.md";
import AlphabeticList from "../documentation/features/feature_list_alph.md";
import CategoryList from "../documentation/features/feature_list_categories.md";
import ReactMarkdown from "react-markdown";
import Utilities from "../services/Utilities";

export enum FeatureMode {
    Core,
    Alphabetical,
    Category,
}

function modeToMarkDownPath(mode: FeatureMode) : string {
    if (mode === FeatureMode.Core) {
        return (CoreList);
    }
    if (mode === FeatureMode.Alphabetical) {
        return (AlphabeticList);
    }
    if (mode === FeatureMode.Category) {
        return (CategoryList);
    }
    return ("");
}

const FeatureList: React.FunctionComponent<{ mode: FeatureMode }> = ({ mode }) => (
    <>
        {/* Just transform the links of the features with the Utilities.transformLinkUri*/}
        <ReactMarkdown
            renderers={Utilities.MDRenderers}
            transformLinkUri={Utilities.transformLinkUri}
            source= {modeToMarkDownPath(mode)}
        />
    </>
);

export default FeatureList;

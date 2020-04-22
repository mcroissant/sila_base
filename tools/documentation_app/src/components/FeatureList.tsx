import React from "react";
import CoreList from "../documentation/features/feature_list_core.md";
import AlphabeticList from "../documentation/features/feature_list_alph.md";
import CategoryList from "../documentation/features/feature_list_categories.md";
import ReactMarkdown from "react-markdown";
import Utilities from "../services/Utilities";

function test(mode: string) : string {
    // @ts-ignore
    return {
        'alphabet': AlphabeticList,
        'category': CategoryList,
        'core': CoreList
    }[mode]
}

const FeatureList: React.FunctionComponent<{ mode: "alphabet" | "category" | "core" }> = ({ mode }) => (
    <>
        {/* Just transform the links of the features with the Utilities.transformLinkUri*/}
        <ReactMarkdown
            renderers={Utilities.MDRenderers}
            transformLinkUri={Utilities.transformLinkUri}
            source= {test(mode)}
        />
    </>
);

export default FeatureList;

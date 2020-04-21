import React from "react";
import AlphabeticList from "../documentation/features/feature_list_alph.md";
import CategoryList from "../documentation/features/feature_list_categories.md";
import ReactMarkdown from "react-markdown";
import Utilities from "../services/Utilities";

const FeatureList: React.FunctionComponent<{ mode: "alphabet" | "category" }> = ({ mode }) => (
    <>
        {/* Just transform the links of the features with the Utilities.transformLinkUri*/}
        <ReactMarkdown
            renderers={Utilities.MDRenderers}
            transformLinkUri={Utilities.transformLinkUri}
            source={mode === "alphabet" ? AlphabeticList : CategoryList}
        />
    </>
);

export default FeatureList;

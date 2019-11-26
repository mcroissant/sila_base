import React from "react";
import AlphabeticList from "../md/feature_list_alph.md";
import CategoryList from "../md/feature_list_categories.md";
import ReactMarkdown from "react-markdown";

const FeatureList: React.FunctionComponent<{ mode: "alphabet" | "category" }> = ({ mode }) => (
    <>
        <ReactMarkdown source={mode === "alphabet" ? AlphabeticList : CategoryList} />
    </>
);

export default FeatureList;

import React from "react";
import ReactMarkdown from "react-markdown";
import markdown from "../md/mainpage.md";
import markdownBottom from "../md/mainpage_bottom.md";
import Utilities from "../services/Utilities";

const IndexPage: React.FunctionComponent = () => (
    <>
        {/* Just transform the links of the features with the Utilities.transformLinkUri*/}
        <ReactMarkdown
            renderers={Utilities.MDRenderers}
            transformLinkUri={Utilities.transformLinkUri}
            source={markdown}
        />
        <ReactMarkdown renderers={Utilities.MDRenderers} source={markdownBottom} />
    </>
);

export default IndexPage;

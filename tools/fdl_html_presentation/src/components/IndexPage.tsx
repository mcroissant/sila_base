import React from "react";
import ReactMarkdown from "react-markdown";
import markdown from "../md/mainpage.md";
import Utilities from "../services/Utilities";

const IndexPage: React.FunctionComponent = () => (
    <ReactMarkdown transformLinkUri={Utilities.changeMarkdownUrls} source={markdown} />
);

export default IndexPage;

import React from "react";
import ReactMarkdown from "react-markdown";
import markdown from "../md/mainpage.md";

const IndexPage: React.FunctionComponent = () => <ReactMarkdown source={markdown} />;

export default IndexPage;

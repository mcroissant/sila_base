import React, { ReactNode } from "react";
import { GITLAB_API_FILES_PATH } from "../constants";
import { uriTransformer } from "react-markdown";
import { Link } from "react-router-dom";

const updateUrl = (path: string) => GITLAB_API_FILES_PATH + "/" + encodeURIComponent(path) + "/raw?ref=master";

const transformLinkUri: (uri: string, children?: ReactNode, title?: string) => string = (uri) =>
    `${process.env.PUBLIC_URL}/feature?f=${uriTransformer(uri)}`;

const LinkRenderer: React.FunctionComponent<any> = ({ href, ...props }) => <Link to={href} {...props} />;
const MDRenderers = {
    link: LinkRenderer,
};

const Utilities = {
    updateUrl,
    transformLinkUri,
    MDRenderers,
};
export default Utilities;

import React, { ReactNode } from "react";
import { GITLAB_API_FILES_PATH } from "../constants";
import { uriTransformer } from "react-markdown";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography/Typography";

const updateUrl = (path: string) => GITLAB_API_FILES_PATH + "/" + encodeURIComponent(path) + "/raw?ref=master";

const transformLinkUri: (uri: string, children?: ReactNode, title?: string) => string = (uri) =>
    `/feature?f=${uriTransformer(uri)}`;

const LinkRenderer: React.FunctionComponent<any> = ({ href, ...props }) => <Link to={href} {...props} />;
const Heading: React.FunctionComponent<any> = (props) => (
    <Typography variant={"h" + props.level} {...props} style={{ paddingTop: 20 }}>
        {props.children}
    </Typography>
);
const TypographyBody: React.FunctionComponent<any> = ({ href, ...props }) => <Typography style={{paddingTop: 5, paddingBottom: 5}} component="p" {...props} />;
const MDRenderers = {
    link: LinkRenderer,
    heading: Heading,
    paragraph: TypographyBody,
};

const Utilities = {
    updateUrl,
    transformLinkUri,
    MDRenderers,
};
export default Utilities;

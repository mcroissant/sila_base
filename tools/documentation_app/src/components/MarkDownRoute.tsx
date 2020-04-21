import React from "react";
import ReactMarkdown from "react-markdown";
import { Route } from "react-router-dom";
import Utilities from "../services/Utilities";

interface IMarkDownRouteProps {
    source: string;
    path: string;
}

const MarkDownRoute: React.FunctionComponent<IMarkDownRouteProps> = ({ source, path }) => (
    <Route path={path}>
        <ReactMarkdown renderers={Utilities.MDRenderers} source={source} />
    </Route>
);

export default MarkDownRoute;

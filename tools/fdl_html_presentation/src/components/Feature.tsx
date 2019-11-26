import React from "react";
import { RouteComponentProps, withRouter, Redirect } from "react-router";
import XmlRenderer from "../modules/XmlRenderer";

interface IFeatureProps {}

const Feature: React.FunctionComponent<IFeatureProps & RouteComponentProps<{}>> = (props) => {
    const params = new URLSearchParams(props.location.search);
    const feature = params.get("f");

    const updateUrl = (featureUrl: string) =>
        "https://gitlab.com/api/v4/projects/5508183/repository/files/" +
        encodeURIComponent(featureUrl) +
        "/raw?ref=master";

    if (feature) {
        return <XmlRenderer url={updateUrl(feature)} />;
    } else {
        return <Redirect to={"/"} />;
    }
};

export default withRouter(Feature);

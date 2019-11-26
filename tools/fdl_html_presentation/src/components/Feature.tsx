import React from "react";
import { RouteComponentProps, withRouter, Redirect } from "react-router";
import XmlRenderer from "../modules/XmlRenderer";
import Utilities from "../services/Utilities";

interface IFeatureProps {}

const Feature: React.FunctionComponent<IFeatureProps & RouteComponentProps<{}>> = (props) => {
    const params = new URLSearchParams(props.location.search);
    const feature = params.get("f");

    if (feature) {
        return <XmlRenderer url={Utilities.updateUrl(feature)} />;
    } else {
        return <Redirect to={"/"} />;
    }
};

export default withRouter(Feature);

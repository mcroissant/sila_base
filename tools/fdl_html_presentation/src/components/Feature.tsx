import React, { useEffect, useState } from "react";
import { RouteComponentProps, withRouter, Redirect } from "react-router";
import XmlRenderer from "../modules/XmlRenderer";
import Utilities from "../services/Utilities";

interface IFeatureProps {}

const Feature: React.FunctionComponent<IFeatureProps & RouteComponentProps<{}>> = (props) => {
    const [feature, setFeature] = useState(new URLSearchParams(props.location.search).get("f"));

    useEffect(() => {
        setFeature(new URLSearchParams(props.location.search).get("f"));
    }, [props.location.search]);

    if (feature) {
        return <XmlRenderer url={Utilities.updateUrl(feature)} />;
    } else {
        return <Redirect to={"/"} />;
    }
};

export default withRouter(Feature);

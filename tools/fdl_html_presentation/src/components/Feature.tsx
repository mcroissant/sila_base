import React, { useEffect, useState } from "react";
import { RouteComponentProps, withRouter, Redirect } from "react-router";
import XmlRenderer from "../modules/XmlRenderer";
import Utilities from "../services/Utilities";
import { Typography } from "@material-ui/core";

interface IFeatureProps {}

const Feature: React.FunctionComponent<IFeatureProps & RouteComponentProps<{}>> = (props) => {
    const [feature, setFeature] = useState(new URLSearchParams(props.location.search).get("f"));

    useEffect(() => {
        setFeature(new URLSearchParams(props.location.search).get("f"));
    }, [props.location.search]);

    if (feature) {
        return <div>
            <Typography variant="h3">Feature:</Typography>
            <XmlRenderer url={Utilities.updateUrl(feature)} />
        </div>;
    } else {
        return <Redirect to={"/"} />;
    }
};

export default withRouter(Feature);

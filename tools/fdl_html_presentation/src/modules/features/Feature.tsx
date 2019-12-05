import React, { useEffect, useState } from "react";
import { RouteComponentProps, withRouter, Redirect } from "react-router";
import { Typography } from "@material-ui/core";
import XmlRenderer from "../xmlToJsxGen/XmlRenderer";
import Utilities from "../../services/Utilities";
import { XmlToJsxContext } from "../xmlToJsxGen/XmlToJsxGenerator";
import { xmlToJsxMap } from "./WidgetsMapper";

interface IFeatureProps {}

const Feature: React.FunctionComponent<IFeatureProps & RouteComponentProps<{}>> = (props) => {
    const [feature, setFeature] = useState(new URLSearchParams(props.location.search).get("f"));

    useEffect(() => {
        setFeature(new URLSearchParams(props.location.search).get("f"));
    }, [props.location.search]);

    if (feature) {
        return <div>
            <Typography variant="h1">Feature:</Typography>
            <XmlToJsxContext.Provider value={xmlToJsxMap}>
                <XmlRenderer url={Utilities.updateUrl(feature)} />
            </XmlToJsxContext.Provider>
        </div>;
    } else {
        return <Redirect to={"/"} />;
    }
};

export default withRouter(Feature);

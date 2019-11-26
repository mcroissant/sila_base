import React from "react";
import { IXmlJsxBuilder, XmlToJsxChildrenGenerator } from "../XmlToJsxGenerator";
import { Typography } from "@material-ui/core";

const Feature: React.FC<IXmlJsxBuilder> = ({ content }) => {
    return (
        <>
            <Typography variant="h4">Feature</Typography>
            <XmlToJsxChildrenGenerator content={content} />
        </>
    );
};
export default Feature;
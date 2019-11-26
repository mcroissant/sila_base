import React from "react";
import Box from "@material-ui/core/Box/Box";
import { IXmlJsxBuilder, XmlToJsxChildrenGenerator, XmlToJsxTitle } from "../XmlToJsxGenerator";
import { Typography } from "@material-ui/core";

const ExecErrors: React.FC<IXmlJsxBuilder> = ({ content }) => {
    return (
        <Box paddingLeft={1} marginTop={1} marginLeft={1} marginBottom={1}>
            <Box p={1} style={{border: "1px solid grey"}}>
                <XmlToJsxTitle content={content} variant="h6" component="span" />
                <XmlToJsxChildrenGenerator content={content} noText />
            </Box>
        </Box>
    );
};
export default ExecErrors;
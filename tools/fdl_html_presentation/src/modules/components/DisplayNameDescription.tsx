import React from "react";
import Box from "@material-ui/core/Box/Box";
import { IXmlJsxBuilder, XmlToJsxChildrenGenerator, XmlToJsxTitle } from "../XmlToJsxGenerator";
import { Typography } from "@material-ui/core";

const DisplayNameDescription: React.FC<IXmlJsxBuilder> = ({ content }) => {
    return (
        <Box paddingLeft={2}>
            <Box p={1} style={{border: "1px solid grey"}}>
                <XmlToJsxTitle content={content} variant="subtitle1" style={{fontWeight: "bold"}} component="span" />
                <Typography variant="body1" component="span">{content.textContent}</Typography>
            </Box>
            <XmlToJsxChildrenGenerator content={content} noText />
        </Box>
    );
};
export default DisplayNameDescription;
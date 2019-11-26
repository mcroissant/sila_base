import React from "react";
import Box from "@material-ui/core/Box/Box";
import { IXmlJsxBuilder, XmlToJsxChildrenGenerator, XmlToJsxTitle } from "../XmlToJsxGenerator";
import { Typography } from "@material-ui/core";

const Identifier: React.FC<IXmlJsxBuilder> = ({ content }) => {
    return (
        <Box paddingLeft={2}>
            <Box p={1} style={{border: "1px solid grey", backgroundColor: "white"}}>
                <XmlToJsxTitle content={content} variant="h5" component="span" />
                <Typography variant="body1" component="span">{content.textContent}</Typography>
            </Box>
            <XmlToJsxChildrenGenerator content={content} noText />
        </Box>
    );
};
export default Identifier;
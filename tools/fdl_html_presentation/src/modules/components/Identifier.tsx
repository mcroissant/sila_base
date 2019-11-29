import React from "react";
import Box from "@material-ui/core/Box/Box";
import { IXmlJsxBuilder, XmlToJsxChildrenGenerator, XmlToJsxTitle } from "../XmlToJsxGenerator";
import { Typography } from "@material-ui/core";

const Identifier: React.FC<IXmlJsxBuilder> = ({ content }) => {
    return (
        <Box paddingTop={1} paddingLeft={1} paddingRight={1}>
            <Box p={1} style={{ border: "1px solid grey", backgroundColor: "white" }}>
                <XmlToJsxTitle content={content} variant="h6" style={{fontWeight: 600}} component="span" />
                <Typography variant="body1" component="span">
                    {content.textContent}
                </Typography>
            </Box>
            <XmlToJsxChildrenGenerator content={content} noText />
        </Box>
    );
};
export default Identifier;

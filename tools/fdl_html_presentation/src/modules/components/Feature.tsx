import React from "react";
import { IXmlJsxBuilder, XmlToJsxChildrenGenerator } from "../XmlToJsxGenerator";
import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";

const Feature: React.FC<IXmlJsxBuilder> = ({ content }) => {
    return (
        <Box paddingLeft={1} marginTop={1} marginLeft={1} marginBottom={1}>
            <Card>
                <Box p={1}>
                    <Typography variant="h4">Feature</Typography>
                    <XmlToJsxChildrenGenerator content={content} />
                </Box>
            </Card>
        </Box>
    );
};
export default Feature;

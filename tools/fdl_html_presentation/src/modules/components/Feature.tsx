import React from "react";
import { IXmlJsxBuilder, XmlToJsxChildrenGenerator } from "../XmlToJsxGenerator";
import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";

const Feature: React.FC<IXmlJsxBuilder> = ({ content }) => {
    return (
        <Box paddingLeft={1} marginTop={1} marginLeft={1} marginBottom={1}>
            <Card style={{padding: 10}}>
                <Box paddingBottom={1}>
                    <Typography variant="h4">Feature</Typography>
                </Box>
                <XmlToJsxChildrenGenerator content={content} />
            </Card>
        </Box>
    );
};
export default Feature;

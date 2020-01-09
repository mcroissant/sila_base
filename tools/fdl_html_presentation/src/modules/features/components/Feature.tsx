import React from "react";
import { IXmlToJsxProps, XmlToJsxChildrenGenerator } from "../../xmlToJsxGen";
import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";

const Feature: React.FC<IXmlToJsxProps> = ({ content, style }) => {
    const getDisplayName = () => content.children[1].textContent; // displayName is the second child in the xml
    return (
        <Box p={1} style={style}>
            <Card style={{ padding: 10 }}>
                <Box paddingBottom={1}>
                    <Typography variant="h2">{getDisplayName()}</Typography>
                </Box>
                <XmlToJsxChildrenGenerator content={content} />
            </Card>
        </Box>
    );
};
export default Feature;

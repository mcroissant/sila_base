import React from "react";
import Box from "@material-ui/core/Box/Box";
import { IXmlJsxBuilder, XmlToJsxChildrenGenerator, XmlToJsxTitle } from "../XmlToJsxGenerator";
import Card from "@material-ui/core/Card";

const Command: React.FC<IXmlJsxBuilder> = ({ content }) => {
    return (
        <Box marginTop={1} marginBottom={1}>
            <Card>
                <Box p={1}>
                    <XmlToJsxTitle variant="h4" component="span" content={content} />
                    <XmlToJsxChildrenGenerator content={content} noText />
                </Box>
            </Card>
        </Box>
    );
};
export default Command;

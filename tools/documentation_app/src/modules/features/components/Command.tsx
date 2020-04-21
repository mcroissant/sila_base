import React from "react";
import Box from "@material-ui/core/Box/Box";
import { IXmlToJsxProps, XmlToJsxChildrenGenerator, XmlToJsxTitle } from "../../xmlToJsxGen";
import Card from "@material-ui/core/Card";

const Command: React.FC<IXmlToJsxProps> = ({ content, style }) => {
    return (
        <Box marginTop={1} marginBottom={1} style={style}>
            <Card>
                <Box p={1}>
                    <XmlToJsxTitle variant="h4" content={content} />
                    <XmlToJsxChildrenGenerator content={content} noText />
                </Box>
            </Card>
        </Box>
    );
};
export default Command;

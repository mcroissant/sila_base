import React from "react";
import Box from "@material-ui/core/Box/Box";
import { IXmlToJsxProps, XmlToJsxChildrenGenerator, XmlToJsxTitle } from "../../xmlToJsxGen";
import Card from "@material-ui/core/Card";

const ExecErrors: React.FC<IXmlToJsxProps> = ({ content, style }) => {
    return (
        <Box p={1} style={style}>
            <Card>
                <Box p={1}>
                    <XmlToJsxTitle content={content} variant="h4" />
                    <XmlToJsxChildrenGenerator content={content} noText />
                </Box>
            </Card>
        </Box>
    );
};
export default ExecErrors;

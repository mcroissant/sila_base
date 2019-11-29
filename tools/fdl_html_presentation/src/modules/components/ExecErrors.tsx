import React from "react";
import Box from "@material-ui/core/Box/Box";
import { IXmlJsxBuilder, XmlToJsxChildrenGenerator, XmlToJsxTitle } from "../XmlToJsxGenerator";
import Card from "@material-ui/core/Card";

const ExecErrors: React.FC<IXmlJsxBuilder> = ({ content }) => {
    return (
        <Box p={1}>
            <Card>
                <Box p={1}>
                    <XmlToJsxTitle content={content} variant="h4" component="span" />
                    <XmlToJsxChildrenGenerator content={content} noText />
                </Box>
            </Card>
        </Box>
    );
};
export default ExecErrors;

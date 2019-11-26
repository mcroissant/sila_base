import React from "react";
import Box from "@material-ui/core/Box/Box";
import { IXmlJsxBuilder, XmlToJsxChildrenGenerator, XmlToJsxTitle } from "../XmlToJsxGenerator";
import Card from "@material-ui/core/Card";

const ExecErrors: React.FC<IXmlJsxBuilder> = ({ content }) => {
    return (
        <Box paddingLeft={1} marginTop={1} marginLeft={1} marginBottom={1}>
            <Card>
                <Box p={1}>
                    <XmlToJsxTitle content={content} variant="h6" component="span" />
                    <XmlToJsxChildrenGenerator content={content} noText />
                </Box>
            </Card>
        </Box>
    );
};
export default ExecErrors;

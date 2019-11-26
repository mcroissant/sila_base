import React from "react";
import Box from "@material-ui/core/Box/Box";
import { IXmlJsxBuilder, XmlToJsxChildrenGenerator, XmlToJsxTitle } from "../XmlToJsxGenerator";

const Command: React.FC<IXmlJsxBuilder> = ({ content }) => {
    return (
        <Box paddingLeft={1} marginTop={1} marginLeft={1} marginBottom={1}>
            <Box p={1} style={{backgroundColor: "#dedede"}}>
                <XmlToJsxTitle variant="h6" component="span" content={content} />
                <XmlToJsxChildrenGenerator content={content} noText />
            </Box>
        </Box>
    );
};
export default Command;
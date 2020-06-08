import React from "react";
import Box from "@material-ui/core/Box/Box";
import { IXmlToJsxProps, XmlToJsxChildrenGenerator, XmlToJsxTitle } from "../../xmlToJsxGen";
import { Typography } from "@material-ui/core";

const Description: React.FC<IXmlToJsxProps> = ({ content, style }) => {
    return (
        <Box paddingLeft={1} paddingBottom={1} paddingRight={1} style={style}>
            <Box p={1} style={{ border: "1px solid grey" }}>

                <XmlToJsxTitle content={content} variant="h6" style={{fontWeight: 400}} />
                <Typography variant="body1" component="p">
                    {content.textContent}
                </Typography>
            </Box>
            <XmlToJsxChildrenGenerator content={content} noText />
        </Box>
    );
};
export default Description;

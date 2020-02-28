import React from "react";
import Box from "@material-ui/core/Box/Box";
import { IXmlToJsxProps, XmlToJsxChildrenGenerator, XmlToJsxTitle } from "../../xmlToJsxGen";
import { Typography } from "@material-ui/core";

const Identifier: React.FC<IXmlToJsxProps> = ({ content, style }) => {
    return (
        <Box paddingTop={1} paddingLeft={1} paddingRight={1} style={style}>
            <Box p={1} style={{ border: "1px solid grey", backgroundColor: "white" }}>
                <XmlToJsxTitle content={content} variant="body1" style={{fontWeight: 400}} />
                <Typography variant="body1" component="span" style={{fontWeight: 600}}>
                    {content.textContent}
                </Typography>
            </Box>
            <XmlToJsxChildrenGenerator content={content} noText />
        </Box>
    );
};
export default Identifier;

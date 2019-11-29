import React from "react";
import Box from "@material-ui/core/Box/Box";
import { IXmlJsxBuilder, XmlToJsxChildrenGenerator, XmlToJsxTitle } from "../XmlToJsxGenerator";
import Card from "@material-ui/core/Card";

const Constraints: React.FC<IXmlJsxBuilder> = ({ content }) => {
    const style: React.CSSProperties = { borderLeft: "rgb(225,225,225) 5px solid", marginLeft: 5, paddingBottom: 0 };
    return (
        <Box paddingLeft={1} marginTop={1} marginLeft={1} marginBottom={1}>
            <Card>
                <Box p={1}>
                    <XmlToJsxTitle content={content} variant="h4" component="span" />
                    <XmlToJsxChildrenGenerator style={style} content={content} noText />
                </Box>
            </Card>
        </Box>
    );
};
export default Constraints;

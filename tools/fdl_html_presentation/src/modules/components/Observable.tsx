import React from "react";
import Box from "@material-ui/core/Box/Box";
import { IXmlJsxBuilder, XmlToJsxTitle } from "../XmlToJsxGenerator";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";

const Observable: React.FC<IXmlJsxBuilder> = ({ content }) => {
    return (
        <Box p={1}>
            <Box p={1} style={{ display: "inline-flex" }}>
                <XmlToJsxTitle content={content} variant="h4" component="span" />
                {content.textContent === "No" && <ClearIcon color="error" fontSize={"large"} />}
                {content.textContent === "Yes" && <CheckIcon color="action" fontSize={"large"} />}
            </Box>
        </Box>
    );
};
export default Observable;

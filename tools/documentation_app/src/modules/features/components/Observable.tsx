import React from "react";
import Box from "@material-ui/core/Box/Box";
import { IXmlToJsxProps, XmlToJsxTitle } from "../../xmlToJsxGen";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";

const Observable: React.FC<IXmlToJsxProps> = ({ content, style }) => {
    return (
        <Box p={1} style={style}>
            <Box p={1} style={{ display: "inline-flex", alignItems: "center" }}>
                <XmlToJsxTitle content={content} variant="h4" />
                {content.textContent === "No" && <ClearIcon color="error" fontSize={"default"} />}
                {content.textContent === "Yes" && <CheckIcon color="action" fontSize={"default"} />}
            </Box>
        </Box>
    );
};
export default Observable;

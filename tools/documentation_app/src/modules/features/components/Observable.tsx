import React from "react";
import Box from "@material-ui/core/Box/Box";
import { IXmlToJsxProps, XmlToJsxTitle } from "../../xmlToJsxGen";
import {Typography} from "@material-ui/core";

const Observable: React.FC<IXmlToJsxProps> = ({ content, style }) => {
    return (
        <Box p={1} style={style}>
            <Box p={1} display={"inline-flex"} alignItems={"bottom"}>
                <XmlToJsxTitle content={content} variant="h4" />
                <Typography variant="body1" component="span" style={{fontWeight: 600, paddingLeft: "10px"}}>
                    <p>
                        {(content.textContent === "Yes") ? ("Observable") : ("Unobservable")}
                    </p>
                </Typography>
            </Box>
        </Box>
    );
};
export default Observable;

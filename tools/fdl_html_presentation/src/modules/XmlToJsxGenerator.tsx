import React from "react";
import { Box, Typography } from "@material-ui/core";
import { Mapper, MapperType } from "./WidgetsMapper";
import { TypographyProps } from "@material-ui/core/Typography";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { defaultMaterialTheme } from "../App";

export const capitalize = (str: string): string => {
    if (str) {
        const firstChar = str.charAt(0);
        if (firstChar) {
            return firstChar.toUpperCase() + str.slice(1);
        }
    }
    return str;
};

export interface IXmlJsxBuilder {
    content: Element;
    style?: React.CSSProperties;
}

interface IXmlJsxBuilderProps {
    mapper?: MapperType;
    style?: React.CSSProperties;
}

export const XmlToJsxTitle: React.FunctionComponent<{ content: Element } & TypographyProps> = ({
    content,
    ...props
}) => <Typography {...props}>{capitalize(content.tagName)}: </Typography>;

export const XmlToJsxChildrenGenerator: React.FunctionComponent<{ content: Element; noText?: boolean, style?: React.CSSProperties }> = ({
    content,
    noText = false,
    style = {}
}) => (
    <>
        {!noText &&
            Array.from(content.childNodes).map((child, index) => (
                <XmlToJsxGenerator style={style} key={index} content={child as Element} />
            ))}
        {noText &&
            Array.from(content.children).map((child, index) => (
                <XmlToJsxGenerator style={style} key={index} content={child as Element} />
            ))}
    </>
);

const XmlToJsxGenerator: React.FC<IXmlJsxBuilder & IXmlJsxBuilderProps> = ({ content, mapper = Mapper, style={} }) => {
    let render =
        content.nodeName === "#text" ? (
            <>{content.textContent}</>
        ) : (
            <Box padding={1} style={{...style}}>
                <div style={{fontWeight: 600}}>{capitalize(content.tagName)}:</div>{" "}
                <XmlToJsxChildrenGenerator style={style} content={content} />
            </Box>
        );

    mapper.forEach((mapItem) => {
        if (content.nodeName === mapItem.type) {
            render = <mapItem.component content={content} style={style} />;
        }
    });

    return <MuiThemeProvider theme={defaultMaterialTheme}>{render}</MuiThemeProvider>;
};
export default XmlToJsxGenerator;

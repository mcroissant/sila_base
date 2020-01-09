import React, { createContext, useContext, ElementType } from "react";
import { Box, MuiThemeProvider, Theme, Typography } from "@material-ui/core";
import { TypographyProps } from "@material-ui/core/Typography";
import ReactMarkdown from "react-markdown";
import { IXmlToJsxProps, MapType } from "./index";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

/**
 * Private types
 */
export interface IXmlToJsxContext {
    map: MapType;
    exactPath?: boolean;
    defaultTheme: Theme;
    defaultReactMarkdownRenderers: { [NodeType: string]: ElementType<any> };
}

// Context
export const XmlToJsxContext = createContext<IXmlToJsxContext>({
    map: {},
    defaultTheme: createMuiTheme(),
    defaultReactMarkdownRenderers: {},
});

const DefaultWidget: React.FunctionComponent<IXmlToJsxProps> = ({ content, style }) => {
    const xmlToJsxContext = useContext(XmlToJsxContext);
    if (content.nodeName === "#text") {
        return content.textContent ? (
            <Box style={style}>
                <ReactMarkdown
                    renderers={xmlToJsxContext.defaultReactMarkdownRenderers}
                    source={content.textContent.replace(/^\s+/gm, "")}
                />
            </Box>
        ) : (
            <></>
        );
    } else {
        return (
            <Box paddingLeft={2} style={style}>
                <strong>{capitalize(content.tagName)}:</strong>
                <XmlToJsxChildrenGenerator style={style} content={content} />
            </Box>
        );
    }
};

const getXmlPath = (element: Element) => {
    let node: Element | null = element;
    let path = "";
    while (node) {
        const parent = node as Element;
        path = "/" + node.nodeName + path;
        node = parent.parentElement;
    }
    return path;
};

export const capitalize = (str: string): string => {
    if (str) {
        const firstChar = str.charAt(0);
        if (firstChar) {
            return firstChar.toUpperCase() + str.slice(1);
        }
    }
    return str;
};

export const XmlToJsxTitle: React.FunctionComponent<IXmlToJsxProps & TypographyProps> = ({ content, ...props }) => (
    <Typography {...props}>{capitalize(content.tagName)}: </Typography>
);

export const XmlToJsxChildrenGenerator: React.FunctionComponent<{
    content: Element;
    noText?: boolean;
    style?: React.CSSProperties;
}> = ({ content, noText = false, style = {} }) => (
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

const XmlToJsxGenerator: React.FC<IXmlToJsxProps> = ({ content, style }) => {
    const xmlToJsxContext = useContext(XmlToJsxContext);
    let Widget = undefined;
    if (xmlToJsxContext.exactPath) {
        Widget = xmlToJsxContext.map[getXmlPath(content)];
    } else {
        Widget = xmlToJsxContext.map[content.tagName];
    }
    return (
        <MuiThemeProvider theme={xmlToJsxContext.defaultTheme}>
            {Widget ? <Widget style={style} content={content} /> : <DefaultWidget style={style} content={content} />}
        </MuiThemeProvider>
    );
};
export default XmlToJsxGenerator;

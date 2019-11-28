import React from "react";
import { Box, Typography } from "@material-ui/core";
import { Mapper, MapperType } from "./WidgetsMapper";
import { TypographyProps } from "@material-ui/core/Typography";

export const capitalize = (str: string): string => {
    if (str) {
        const firstChar = str.charAt(0);
        if (firstChar) {
            return firstChar.toUpperCase() + str.slice(1);
        }
    }
    return str;
}

export interface IXmlJsxBuilder {
    content: Element;
}

interface IXmlJsxBuilderProps {
    mapper?: MapperType;
}

export const XmlToJsxTitle: React.FunctionComponent<{ content: Element } & TypographyProps> = ({
    content,
    ...props
}) => <Typography {...props}>{capitalize(content.tagName)}: </Typography>;

export const XmlToJsxChildrenGenerator: React.FunctionComponent<{ content: Element; noText?: boolean }> = ({
    content,
    noText = false,
}) => (
    <>
        {!noText &&
            Array.from(content.childNodes).map((child, index) => (
                <XmlToJsxGenerator key={index} content={child as Element} />
            ))}
        {noText &&
            Array.from(content.children).map((child, index) => (
                <XmlToJsxGenerator key={index} content={child as Element} />
            ))}
    </>
);

const XmlToJsxGenerator: React.FC<IXmlJsxBuilder & IXmlJsxBuilderProps> = ({ content, mapper = Mapper }) => {
    let render =
        content.nodeName === "#text" ? (
            <>{content.textContent}</>
        ) : (
            <Box paddingLeft={2}>
                <strong>{capitalize(content.tagName)}:</strong>
                <XmlToJsxChildrenGenerator content={content} />
            </Box>
        );

    mapper.forEach((mapItem) => {
        if (content.nodeName === mapItem.type) {
            render = <mapItem.component content={content} />;
        }
    });

    return render;
};
export default XmlToJsxGenerator;

import React from "react";
import { XmlToJsxChildrenGenerator, XmlToJsxTitle } from "./XmlToJsxGenerator";

export interface IXmlToJsxProps {
    content: Element;
    style?: React.CSSProperties;
}

export type MapType = { [key: string]: React.FunctionComponent<IXmlToJsxProps> };

export { XmlToJsxChildrenGenerator, XmlToJsxTitle };

import React from "react";
import { MapType } from "../xmlToJsxGen";
import Feature from "./components/Feature";
import Identifier from "./components/Identifier";
import DisplayName from "./components/DisplayName";
import Command from "./components/Command";
import ParamProp from "./components/ParamProp";
import ExecErrorsDataTypeDef from "./components/ExecErrors";
import Observable from "./components/Observable";
import Constraints from "./components/Constraints";
import Description from "./components/Description";
import { IXmlToJsxContext } from "../xmlToJsxGen/XmlToJsxGenerator";
import { defaultMaterialTheme } from "../../services/styles";

const WidgetMap: MapType = {
    "Feature": Feature,
    "Identifier": Identifier,
    "DisplayName": DisplayName,
    "Description": Description,
    "Command": Command,
    "Parameter": ParamProp,
    "Property": ParamProp,
    "Response": ParamProp,
    "Observable": Observable,
    "DefinedExecutionErrors": ExecErrorsDataTypeDef,
    "DefinedExecutionError": ExecErrorsDataTypeDef,
    "DataTypeDefinition": ExecErrorsDataTypeDef,
    "DataType": ExecErrorsDataTypeDef,
    "Constrained": ExecErrorsDataTypeDef,
    "Constraints": Constraints,
};

export const xmlToJsxMap: IXmlToJsxContext = {
    map: WidgetMap,
    defaultTheme: defaultMaterialTheme,
    defaultReactMarkdownRenderers: {
        paragraph: props => <>{props.children}</>
    },
};

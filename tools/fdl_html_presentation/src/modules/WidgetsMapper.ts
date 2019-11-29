import React from "react";
import { IXmlJsxBuilder } from "./XmlToJsxGenerator";
import Feature from "./components/Feature";
import Identifier from "./components/Identifier";
import DisplayName from "./components/DisplayName";
import Command from "./components/Command";
import ParamProp from "./components/ParamProp";
import ExecErrorsDataTypeDef from "./components/ExecErrors";
import Observable from "./components/Observable";
import Constraints from "./components/Constraints";
import Description from "./components/Description";

export type MapperType = { type: string; component: React.FunctionComponent<IXmlJsxBuilder> }[];
export const Mapper: MapperType = [
    { type: "Feature", component: Feature },
    { type: "Identifier", component: Identifier },
    { type: "DisplayName", component: DisplayName },
    { type: "Description", component: Description },
    { type: "Command", component: Command },
    { type: "Parameter", component: ParamProp },
    { type: "Property", component: ParamProp },
    { type: "Response", component: ParamProp },
    { type: "Observable", component: Observable },
    { type: "DefinedExecutionErrors", component: ExecErrorsDataTypeDef },
    { type: "DefinedExecutionError", component: ExecErrorsDataTypeDef },
    { type: "DataTypeDefinition", component: ExecErrorsDataTypeDef },
    { type: "DataType", component: ExecErrorsDataTypeDef },
    { type: "Constrained", component: ExecErrorsDataTypeDef },
    { type: "Constraints", component: Constraints },
];

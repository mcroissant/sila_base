export interface IInstrument {
    name: string;
    versions: string[];
}
export interface IIntegration {
    instrumentName: string;
    type: "SiLA" | "OPC" | "REST"
}

const instruments: IInstrument[] = [
    { name: "Robotic Lab Assistant", versions: ["1.0"] },
    { name: "PIXL", versions: ["1.0"] },
    { name: "PHERAstar FSX", versions: ["1.0"] },
    { name: "SiLABOX", versions: ["1.0"] },
    { name: "Brooks TubeMarker 2 driver", versions: ["1.0"] },
    { name: "Waters LC/MS driver for AutoLynx", versions: ["1.0"] },
    { name: "Multidrop", versions: ["1.0"] },
    { name: "Ziath DataPaq", versions: ["1.0"] },
    { name: "BioShake", versions: ["1.0"] },
    { name: "Tecan FluentControl", versions: ["1.0"] },
];
const integrations: IIntegration[] = [];

export const DATA = {
    instruments,
    integrations
}
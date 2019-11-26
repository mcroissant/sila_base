import { DATA, IInstrument, IIntegration } from "../entities/models";

export default class UilApi {
    public static getAllInstruments = (): IInstrument[] => DATA.instruments;
    public static getInstrumentIntegrations = (instrument: IInstrument): IIntegration[] =>
        DATA.integrations.filter((integration) => integration.instrumentName === instrument.name);
}

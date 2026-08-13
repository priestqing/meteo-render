import type { SimpleXmlNode } from '../xml';
export interface MicrowaveStation {
    code: string;
    longitude: number;
    latitude: number;
    altitude: number;
    model: string;
    channelCount: number;
}
export interface MicrowaveTableProduct {
    kind: 'microwave-table';
    version: string;
    station: MicrowaveStation;
    columns: string[];
    records: Array<Array<string | number | null>>;
}
export interface MicrowaveXmlProduct {
    kind: 'microwave-xml';
    root: SimpleXmlNode;
}

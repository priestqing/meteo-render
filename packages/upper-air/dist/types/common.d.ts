export type UpperAirBufferSource = ArrayBuffer | ArrayBufferView;
export type UpperAirTextSource = string | UpperAirBufferSource;
export declare const decodeUpperAirText: (source: UpperAirTextSource) => string;
export declare const toUpperAirDataView: (source: UpperAirBufferSource) => DataView;
export declare const requiredNumber: (value: string, name: string) => number;
export declare const optionalNumber: (value: string | undefined) => number | null;

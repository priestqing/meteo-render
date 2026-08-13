export type SatelliteBufferSource = ArrayBuffer | ArrayBufferView;
export declare class SatelliteBinaryReader {
    private readonly view;
    readonly littleEndian: boolean;
    private offsetValue;
    constructor(view: DataView, littleEndian: boolean);
    get offset(): number;
    get byteLength(): number;
    seek(offset: number): void;
    skip(byteLength: number): void;
    uint8(): number;
    int16(): number;
    uint16(): number;
    int32(): number;
    uint32(): number;
    float32(): number;
    float64(): number;
    text(byteLength: number): string;
    bytes(byteLength: number): Uint8Array;
    private ensure;
}
export declare const toSatelliteDataView: (source: SatelliteBufferSource) => DataView;

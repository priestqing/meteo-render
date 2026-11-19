import type { IStationGridDefinition } from './types';
export declare const geographicDistance: (firstLongitude: number, firstLatitude: number, secondLongitude: number, secondLatitude: number) => number;
export declare const gridCoordinate: (grid: IStationGridDefinition, index: number) => readonly [number, number];
export declare const createOutputGrid: (grid: Required<IStationGridDefinition>, values: Float32Array) => {
    values: Float32Array<ArrayBufferLike>;
    width: number;
    height: number;
    minLng: number;
    maxLng: number;
    minLat: number;
    maxLat: number;
    noData: number;
    valueScale: number;
};

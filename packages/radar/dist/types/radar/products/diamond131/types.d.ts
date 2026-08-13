import type { GridData } from '@meteo-render/rendering';
export interface IDiamond131Header {
    format: string;
    dataName: string;
    flag: string;
    version: string;
    timestamp: string;
    interval: number;
    width: number;
    height: number;
    levelCount: number;
    radarCount: number;
    startLongitude: number;
    startLatitude: number;
    centerLongitude: number;
    centerLatitude: number;
    longitudeResolution: number;
    latitudeResolution: number;
    levelHeights: Float32Array;
    radarStations: readonly string[];
    dataType: number;
    levelDimension: number;
}
export interface IDiamond131RadarProduct {
    kind: 'diamond-131';
    productName: string;
    sourceFileName?: string;
    forecastMinutes?: number;
    header: IDiamond131Header;
    dataType: number;
    noData: number;
    layers: readonly Float32Array[];
    grid: GridData;
}

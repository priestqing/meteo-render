import type { PointData, RasterData } from '@meteo-render/core';
export interface Fy4GiirsSpectrumOptions {
    band?: 'LW' | 'MW';
    noData?: number;
    fileName?: string;
}
export interface Fy4GiirsSpectrumProduct {
    kind: 'fy4-giirs-spectrum';
    band: 'LW' | 'MW';
    channelCount: number;
    fieldOfViewCount: number;
    wavenumbers: Float32Array;
    longitudes: Float32Array;
    latitudes: Float32Array;
    realRadiance: Float32Array;
    imaginaryRadiance: Float32Array;
    noiseEquivalentRadiance: Float32Array;
    noData: number;
}
export interface Fy4GiirsProfileProduct {
    kind: 'fy4-giirs-profile';
    levelCount: number;
    observationCount: number;
    pressure: Float32Array;
    longitudes: Float32Array;
    latitudes: Float32Array;
    temperature: Float32Array;
    humidity: Float32Array;
    geopotentialHeight: Float32Array;
    temperatureQuality: Float32Array;
    humidityQuality: Float32Array;
    noData: number;
}
export interface Fy4PointFieldProduct {
    kind: 'fy4-point-field';
    field: string;
    points: PointData;
    channelIndex?: number;
    channels?: Float32Array;
}
export interface Fy4LayeredGridProduct {
    kind: 'fy4-layered-grid';
    dataset: string;
    shape: readonly [depth: number, height: number, width: number];
    levelIndex: number;
    levels: Float32Array;
    levelUnit?: string;
    values: Float32Array;
    raster: RasterData;
    attributes: Record<string, unknown>;
    noData: number;
}
export interface Fy4NonRasterOptions {
    dataset?: string;
    band?: 'LW' | 'MW';
    channel?: number;
    level?: number;
    noData?: number;
    fileName?: string;
}
export type Fy4NonRasterProduct = Fy4GiirsSpectrumProduct | Fy4GiirsProfileProduct | Fy4PointFieldProduct | Fy4LayeredGridProduct;

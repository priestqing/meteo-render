import type { RasterData } from '@meteo-render/core';
export interface Fy4Hdf5DatasetInfo {
    path: string;
    shape: readonly number[];
    attributes: Readonly<Record<string, unknown>>;
}
export interface Fy4RasterProduct {
    kind: 'fy4-raster';
    satellite: string;
    instrument: string;
    dataset: Fy4Hdf5DatasetInfo;
    calibrationDataset?: string;
    raster: RasterData;
}
export interface Fy4Hdf5ParseOptions {
    dataset?: string;
    noData?: number;
    fileName?: string;
    maxDimension?: number;
    autoSelect?: boolean;
}
export interface Fy4Hdf5RasterWindow {
    rowStart: number;
    rowEnd: number;
    columnStart: number;
    columnEnd: number;
    maxDimension?: number;
}
export interface Fy4Hdf5ProductReader {
    product: Fy4RasterProduct | import('./nonRasterTypes').Fy4NonRasterProduct;
    readRasterWindow(window: Fy4Hdf5RasterWindow): Fy4RasterProduct;
    close(): void;
}

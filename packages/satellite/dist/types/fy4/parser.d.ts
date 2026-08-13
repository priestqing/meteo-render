import { type RasterData } from '@meteo-render/core';
import { type SatelliteBufferSource } from '../common/binaryReader';
import type { Fy4Hdf5DatasetInfo, Fy4Hdf5ParseOptions, Fy4RasterProduct } from './types';
export interface Hdf5Node {
    keys?: string[];
    attrs?: Record<string, unknown>;
    shape?: number[];
    sourceShape?: number[];
    sourceWindow?: {
        rowStart: number;
        columnStart: number;
        rowStride: number;
        columnStride: number;
    };
    value?: ArrayLike<number>;
    readSlice?: (selection: Hdf5Slice[]) => ArrayLike<number> | undefined;
}
export type Hdf5Slice = [] | [number | null] | [number | null, number | null] | [number | null, number | null, number | null];
export interface Hdf5FileLike extends Hdf5Node {
    get(path: string): Hdf5Node | undefined;
}
export declare const parseFy4Hdf5Raster: (source: SatelliteBufferSource, options?: Fy4Hdf5ParseOptions) => Fy4RasterProduct;
export declare const parseFy4Hdf5File: (file: Hdf5FileLike, options?: Fy4Hdf5ParseOptions) => Fy4RasterProduct;
export declare const createFy4Hdf5RasterData: (file: Hdf5FileLike, datasetPath: string, dataset: Hdf5Node, values: Float32Array, noData: number, satellite?: string, instrument?: string) => RasterData;
export declare const listFy4Hdf5Datasets: (source: SatelliteBufferSource, fileName?: string) => Fy4Hdf5DatasetInfo[];
export declare const listFy4Hdf5FileDatasets: (file: Hdf5FileLike) => Fy4Hdf5DatasetInfo[];

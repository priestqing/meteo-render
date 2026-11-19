import type { SatelliteBufferSource } from '../common/binaryReader';
import type { Hdf5FileLike } from '../fy4/parser';
import type { IFy2Hdf5ParseOptions, IFy2RasterProduct } from './types';
export declare const isFy2Hdf5Source: (source: SatelliteBufferSource) => boolean;
export declare const isFy2Hdf5File: (file: Hdf5FileLike) => boolean;
export declare const listFy2Hdf5FileDatasets: (file: Hdf5FileLike) => {
    path: string;
    shape: number[];
    attributes: Record<string, unknown>;
}[];
export declare const parseFy2Hdf5File: (file: Hdf5FileLike, options?: IFy2Hdf5ParseOptions) => IFy2RasterProduct;

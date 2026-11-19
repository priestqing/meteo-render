import type { SatelliteBufferSource } from '../common/binaryReader';
import type { IFy2Hdf5DatasetInfo, IFy2Hdf5ParseOptions, IFy2RasterProduct } from './types';
export declare const listFy2Hdf5DatasetsAsync: (source: SatelliteBufferSource, fileName?: string) => Promise<IFy2Hdf5DatasetInfo[]>;
export declare const parseFy2Hdf5RasterAsync: (source: SatelliteBufferSource, options?: IFy2Hdf5ParseOptions) => Promise<IFy2RasterProduct>;

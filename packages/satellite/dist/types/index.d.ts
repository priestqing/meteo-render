import { type DataMetadata, type GridGeometry, type RasterData } from '@meteo-render/core';
import type { AwxParseOptions, AwxProduct } from './awx/types';
import type { SatelliteBufferSource } from './common/binaryReader';
import type { IFy2Hdf5ParseOptions, IFy2RasterProduct } from './fy2/types';
import type { Fy4NonRasterOptions, Fy4NonRasterProduct } from './fy4/nonRasterTypes';
import type { Fy4Hdf5ParseOptions, Fy4RasterProduct } from './fy4/types';
import type { HimawariParseOptions, HimawariStandardMosaicProduct, HimawariStandardProduct } from './himawari/types';
export { parseAwx, parseAwxGridField, parseAwxImage } from './awx/parser';
export type { AwxImageHeader, AwxImageProduct, AwxParseOptions, AwxPrimaryHeader, AwxProduct, IAwxGridFieldHeader, IAwxGridFieldProduct } from './awx/types';
export type { SatelliteBufferSource } from './common/binaryReader';
export { isFy2Hdf5Source } from './fy2/parser';
export { listFy2Hdf5DatasetsAsync, parseFy2Hdf5RasterAsync } from './fy2/wasm';
export type { IFy2Hdf5DatasetInfo, IFy2Hdf5ParseOptions, IFy2NomFileInfo, IFy2RasterProduct } from './fy2/types';
export { listFy4Hdf5Datasets, parseFy4Hdf5Raster } from './fy4/parser';
export { listFy4Hdf5DatasetsAsync, openFy4Hdf5ProductAsync, parseFy4Hdf5ProductAsync, parseFy4Hdf5RasterAsync, parseFy4NonRasterAsync } from './fy4/wasm';
export type { Fy4Hdf5DatasetInfo, Fy4Hdf5ParseOptions, Fy4Hdf5ProductReader, Fy4Hdf5RasterWindow, Fy4RasterProduct } from './fy4/types';
export { parseFy4CsrPointField, parseFy4GiirsPointField, parseFy4GiirsProfile, parseFy4GiirsSpectrum, parseFy4LayeredGrid, parseFy4NonRaster } from './fy4/nonRaster';
export type { Fy4GiirsProfileProduct, Fy4GiirsSpectrumOptions, Fy4GiirsSpectrumProduct, Fy4LayeredGridProduct, Fy4NonRasterOptions, Fy4NonRasterProduct, Fy4PointFieldProduct } from './fy4/nonRasterTypes';
export { parseHimawariStandardData } from './himawari/parser';
export { mergeHimawariStandardDataSegments, parseHimawariStandardDataSegments } from './himawari/mosaic';
export type { HimawariBasicHeader, HimawariCalibrationHeader, HimawariDataHeader, HimawariParseOptions, HimawariProjectionHeader, HimawariSegmentHeader, HimawariSegmentMergeOptions, HimawariStandardMosaicProduct, HimawariStandardProduct } from './himawari/types';
export type SatelliteProduct = AwxProduct | HimawariStandardProduct | HimawariStandardMosaicProduct | IFy2RasterProduct | Fy4RasterProduct | Fy4NonRasterProduct;
export interface SatelliteParseOptions {
    awx?: AwxParseOptions;
    himawari?: HimawariParseOptions;
    fy2?: IFy2Hdf5ParseOptions;
    fy4?: Fy4Hdf5ParseOptions;
    fy4NonRaster?: Fy4NonRasterOptions;
}
export type SatelliteSource = SatelliteBufferSource | Blob | string | URL;
/** 根据文件内部签名识别 AWX、Himawari Standard Data 或 HDF5/NetCDF4。 */
export declare const parseSatellite: (source: SatelliteBufferSource, options?: SatelliteParseOptions) => SatelliteProduct;
/** 使用 HDF5 C/WASM 解析 NetCDF4，避免纯 JavaScript HDF5 读取器的大数组开销。 */
export declare const parseSatelliteAsync: (source: SatelliteBufferSource, options?: SatelliteParseOptions) => Promise<SatelliteProduct>;
export declare const loadSatellite: (source: SatelliteSource, options?: SatelliteParseOptions) => Promise<SatelliteProduct>;
export interface SatelliteRasterInput {
    geometry: GridGeometry;
    values: ArrayLike<number>;
    scale?: number;
    offset?: number;
    noData?: number;
    metadata?: DataMetadata;
}
/** Normalize a decoded satellite band into the shared draw-data contract. */
export declare const createSatelliteRasterData: (input: SatelliteRasterInput) => RasterData;

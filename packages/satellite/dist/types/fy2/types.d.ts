import type { RasterData } from '@meteo-render/core';
export interface IFy2NomFileInfo {
    satellite: string;
    productId: string;
    productName: string;
    centerLatitude: number;
    centerLongitude: number;
    satelliteHeight: number;
    nominalType: string;
    calibrationTime: string;
    startTime: string;
    endTime: string;
    processingTime: string;
    equatorialRadius: number;
    samplingAngle: number;
    steppingAngle: number;
    reciprocalFlattening: number;
    comment: string;
}
export interface IFy2Hdf5DatasetInfo {
    path: string;
    shape: readonly number[];
    attributes: Readonly<Record<string, unknown>>;
}
export interface IFy2RasterProduct {
    kind: 'fy2-raster';
    satellite: string;
    instrument: 'VISSR';
    fileInfo: IFy2NomFileInfo;
    dataset: IFy2Hdf5DatasetInfo;
    calibrationDataset?: string;
    raster: RasterData;
}
export interface IFy2Hdf5ParseOptions {
    dataset?: string;
    noData?: number;
    fileName?: string;
    maxDimension?: number;
    autoSelect?: boolean;
}

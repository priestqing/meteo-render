import type { RasterData } from '@meteo-render/core';
export interface AwxPrimaryHeader {
    fileName: string;
    littleEndian: boolean;
    primaryHeaderLength: number;
    secondaryHeaderLength: number;
    paddingLength: number;
    recordLength: number;
    headerRecordCount: number;
    dataRecordCount: number;
    productCategory: number;
    compression: number;
    format: string;
    quality: number;
}
export interface AwxImageHeader {
    satellite: string;
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
    channel: number;
    projection: number;
    width: number;
    height: number;
    topLeftLine: number;
    topLeftPixel: number;
    samplingRate: number;
    north: number;
    south: number;
    west: number;
    east: number;
    centerLatitude: number;
    centerLongitude: number;
    standardLatitude1: number;
    standardLatitude2: number;
    horizontalResolution: number;
    verticalResolution: number;
    gridOverlay: boolean;
    gridValue: number;
    paletteLength: number;
    calibrationLength: number;
    locationLength: number;
}
export interface AwxImageProduct {
    kind: 'awx-image';
    primary: AwxPrimaryHeader;
    image: AwxImageHeader;
    palette?: {
        red: Uint8Array;
        green: Uint8Array;
        blue: Uint8Array;
    };
    calibration?: Float32Array;
    raster: RasterData;
}
export interface IAwxGridFieldHeader {
    satellite: string;
    element: number;
    bytesPerValue: number;
    referenceValue: number;
    scale: number;
    timeScope: number;
    startTime: string;
    endTime: string;
    north: number;
    south: number;
    west: number;
    east: number;
    spacingUnit: number;
    horizontalSpacing: number;
    verticalSpacing: number;
    width: number;
    height: number;
    landMaskEnabled: boolean;
    landValue: number;
    cloudMaskEnabled: boolean;
    cloudValue: number;
    waterMaskEnabled: boolean;
    waterValue: number;
    iceMaskEnabled: boolean;
    iceValue: number;
    qualityControl: number;
    qualityMaximum: number;
    qualityMinimum: number;
}
export interface IAwxGridFieldProduct {
    kind: 'awx-grid-field';
    primary: AwxPrimaryHeader;
    grid: IAwxGridFieldHeader;
    raster: RasterData;
}
export type AwxProduct = AwxImageProduct | IAwxGridFieldProduct;
export interface AwxParseOptions {
    noData?: number;
    maxDimension?: number;
}

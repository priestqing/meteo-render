import type { RasterData } from '@meteo-render/core';
export interface HimawariBasicHeader {
    satellite: string;
    processingCenter: string;
    observationArea: string;
    observationTimeline: number;
    observationStartMjd: number;
    observationEndMjd: number;
    creationMjd: number;
    totalHeaderLength: number;
    totalDataLength: number;
    qualityFlags: readonly number[];
    formatVersion: string;
    fileName: string;
    littleEndian: boolean;
}
export interface HimawariDataHeader {
    bitsPerPixel: number;
    columns: number;
    lines: number;
    compression: number;
}
export interface HimawariProjectionHeader {
    subSatelliteLongitude: number;
    columnScalingFactor: number;
    lineScalingFactor: number;
    columnOffset: number;
    lineOffset: number;
    satelliteDistance: number;
    equatorialRadius: number;
    polarRadius: number;
}
export interface HimawariCalibrationHeader {
    band: number;
    centralWavelength: number;
    validBits: number;
    errorCount: number;
    outsideCount: number;
    radianceSlope: number;
    radianceIntercept: number;
    infrared?: {
        c0: number;
        c1: number;
        c2: number;
        inverseC0: number;
        inverseC1: number;
        inverseC2: number;
        speedOfLight: number;
        planckConstant: number;
        boltzmannConstant: number;
    };
    visible?: {
        albedoCoefficient: number;
        updateMjd: number;
        calibratedSlope: number;
        calibratedIntercept: number;
    };
}
export interface HimawariSegmentHeader {
    totalSegments: number;
    segmentNumber: number;
    firstLine: number;
}
export interface HimawariStandardProduct {
    kind: 'himawari-standard';
    basic: HimawariBasicHeader;
    data: HimawariDataHeader;
    projection: HimawariProjectionHeader;
    calibration: HimawariCalibrationHeader;
    segment: HimawariSegmentHeader;
    raster: RasterData;
}
export interface HimawariStandardMosaicProduct {
    kind: 'himawari-standard-mosaic';
    complete: boolean;
    basic: HimawariBasicHeader;
    data: HimawariDataHeader;
    projection: HimawariProjectionHeader;
    calibration: HimawariCalibrationHeader;
    segments: readonly HimawariSegmentHeader[];
    raster: RasterData;
}
export interface HimawariSegmentMergeOptions {
    requireComplete?: boolean;
}
export interface HimawariParseOptions {
    noData?: number;
}

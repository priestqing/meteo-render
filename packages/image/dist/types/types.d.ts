import type { RadialData } from '@meteo-render/core';
import type { RasterData } from '@meteo-render/core';
import type { ColorMode, ColorRange, ColorStopInput, GridData, SampleMode } from '@meteo-render/rendering';
export type ImageCrs = 'EPSG:4326' | 'EPSG:3857';
export type GeoJsonInput = string | Uint8Array | IGeoJsonObject;
export interface IGeoJsonObject {
    type: string;
    coordinates?: unknown;
    geometry?: IGeoJsonObject | null;
    geometries?: IGeoJsonObject[];
    features?: IGeoJsonObject[];
    properties?: Readonly<Record<string, unknown>> | null;
}
export interface IImageTextOptions {
    property?: string;
    format?: (value: unknown, properties: Readonly<Record<string, unknown>>) => string;
    color?: string;
    opacity?: number;
    fontSize?: number;
}
export interface IImageVectorOptions {
    geoJson: GeoJsonInput;
    sourceCrs?: ImageCrs;
    lineWidth?: number;
    color?: string;
    lineOpacity?: number;
    fill?: string;
    fillOpacity?: number;
    dash?: readonly number[];
    text?: IImageTextOptions;
}
export interface IImageBoundsOptions extends IImageVectorOptions {
    clipMode?: 'bounds' | 'geometry';
    padding?: number;
}
export type IImageMapOptions = IImageVectorOptions;
export interface IImageAxisPartOptions {
    color?: string;
    lineWidth?: number;
    step?: number;
    opacity?: number;
    format?: (coordinate: number) => string;
}
export interface IImageAxisOptions extends IImageAxisPartOptions {
    x?: IImageAxisPartOptions;
    y?: IImageAxisPartOptions;
    tickLength?: number;
    fontSize?: number;
    margin?: {
        left?: number;
        right?: number;
        top?: number;
        bottom?: number;
    };
}
export interface IImageRangeRingTextOptions {
    format?: (distance: number) => string;
    color?: string;
    opacity?: number;
    fontSize?: number;
}
export interface IImageRangeRingsOptions {
    step?: number;
    distances?: readonly number[];
    maxDistance?: number;
    color?: string;
    lineWidth?: number;
    lineOpacity?: number;
    dash?: readonly number[];
    text?: IImageRangeRingTextOptions;
    azimuthStep?: number;
    azimuthText?: IImageRangeRingTextOptions;
}
export interface IImageCommonOptions {
    crs: ImageCrs;
    width: number;
    height?: number;
    backgroundColor?: string;
    opacity?: number;
    map?: IImageMapOptions;
    bounds?: IImageBoundsOptions;
    axis?: IImageAxisOptions;
}
export interface IRasterImageOptions extends IImageCommonOptions {
    colorStops: readonly ColorStopInput[];
    colorRange?: ColorRange;
    colorMode?: ColorMode;
    sampleMode?: SampleMode;
}
export interface IRadialImageOptions extends IImageCommonOptions {
    colorStops: readonly ColorStopInput[];
    colorRange?: ColorRange;
    colorMode?: ColorMode;
    rangeRings?: IImageRangeRingsOptions;
}
export interface INativeRasterImageOptions {
    width: number;
    height?: number;
    backgroundColor?: string;
    opacity?: number;
    colorStops: readonly ColorStopInput[];
    colorRange?: ColorRange;
    colorMode?: ColorMode;
}
export interface IImageRect {
    x: number;
    y: number;
    width: number;
    height: number;
}
export interface IImageProjectedBounds {
    minX: number;
    minY: number;
    maxX: number;
    maxY: number;
}
export interface IRenderedImage {
    bytes: Uint8Array;
    mimeType: 'image/png';
    width: number;
    height: number;
    crs: string;
    plotRect: IImageRect;
    bounds: IImageProjectedBounds;
}
export type RasterImageGrid = GridData;
export type RadialImageData = RadialData;
export type NativeRasterImageData = RasterData;

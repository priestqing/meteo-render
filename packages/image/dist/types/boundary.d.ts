import type { PixelCanvas, ICanvasPoint } from './canvas';
import type { GeoJsonInput, IImageProjectedBounds, IImageRect, IImageVectorOptions, ImageCrs } from './types';
export interface INormalizedFeature {
    polygons: readonly (readonly (readonly (readonly [number, number])[])[])[];
    properties: Readonly<Record<string, unknown>>;
}
export interface INormalizedBoundary {
    features: readonly INormalizedFeature[];
    minLongitude: number;
    minLatitude: number;
    maxLongitude: number;
    maxLatitude: number;
}
export interface IPreparedBoundary {
    boundary: INormalizedBoundary;
    paths: readonly (readonly (readonly (readonly ICanvasPoint[])[])[])[];
    labelPoints: readonly ICanvasPoint[];
    mask: Uint8Array;
    plotRect: IImageRect;
}
export declare const normalizeBoundary: (input: GeoJsonInput, sourceCrs?: ImageCrs) => INormalizedBoundary;
export declare const prepareBoundary: (boundary: INormalizedBoundary, targetCrs: ImageCrs, projectedBounds: IImageProjectedBounds, plotRect: IImageRect) => IPreparedBoundary;
export declare const drawBoundaryFill: (canvas: PixelCanvas, prepared: IPreparedBoundary, options: IImageVectorOptions, globalOpacity: number) => void;
export declare const drawBoundaryStroke: (canvas: PixelCanvas, prepared: IPreparedBoundary, options: IImageVectorOptions, globalOpacity: number) => void;
export declare const boundaryProjectedBounds: (boundary: INormalizedBoundary, crs: ImageCrs) => IImageProjectedBounds;

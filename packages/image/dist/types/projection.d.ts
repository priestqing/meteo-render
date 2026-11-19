import type { ImageCrs, IImageProjectedBounds, IImageRect } from './types';
export interface IProjectedPoint {
    x: number;
    y: number;
}
export declare const projectPoint: (longitude: number, latitude: number, crs: ImageCrs) => IProjectedPoint;
export declare const unprojectPoint: (x: number, y: number, crs: ImageCrs) => readonly [number, number];
export declare const destinationPoint: (longitude: number, latitude: number, bearing: number, distance: number) => readonly [number, number];
export declare const distanceAndBearing: (originLongitude: number, originLatitude: number, longitude: number, latitude: number) => readonly [number, number];
export declare const projectedToPixel: (point: IProjectedPoint, bounds: IImageProjectedBounds, plotRect: IImageRect) => IProjectedPoint;
export declare const pixelToProjected: (x: number, y: number, bounds: IImageProjectedBounds, plotRect: IImageRect) => IProjectedPoint;
export declare const padBounds: (bounds: IImageProjectedBounds, padding: number) => IImageProjectedBounds;
export declare const projectedBoundsFromGeographic: (minLongitude: number, minLatitude: number, maxLongitude: number, maxLatitude: number, crs: ImageCrs) => IImageProjectedBounds;

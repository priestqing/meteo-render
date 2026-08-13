import { type PointData, type RasterData } from '@meteo-render/core';
import type { IPointColumnData } from './point-overlay/types';
import type { RasterGrid } from './raster-overlay/rasterTypes';
export interface RasterGridAdapterOptions {
    crs?: string;
    noData?: number;
}
export interface CoreRasterGridAdapterOptions {
    noData?: number;
    maxDimension?: number;
}
export interface GeographicRasterBounds {
    minLng: number;
    maxLng: number;
    minLat: number;
    maxLat: number;
}
export interface RasterSourceWindow {
    rowStart: number;
    rowEnd: number;
    columnStart: number;
    columnEnd: number;
}
/** Adapt the legacy center-bounded grid without changing its sampled values. */
export declare const rasterGridToRasterData: (grid: RasterGrid, options?: RasterGridAdapterOptions) => RasterData;
/** Convert a core raster to the center-bounded EPSG:4326 grid shared by all raster backends. */
export declare const rasterDataToRasterGrid: (data: RasterData, options?: CoreRasterGridAdapterOptions) => RasterGrid;
/** Resolve a geographic viewport to source rows and columns for a GEOS raster. */
export declare const geographicBoundsToGeostationaryWindow: (data: RasterData, bounds: GeographicRasterBounds, paddingRatio?: number) => RasterSourceWindow | undefined;
/** Convert core point columns without materializing per-point objects. */
export declare const pointDataToPointColumnData: (data: PointData, noData?: number) => IPointColumnData;

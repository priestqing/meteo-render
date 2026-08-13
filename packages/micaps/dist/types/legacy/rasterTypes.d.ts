export interface RasterGrid {
    values: Float32Array;
    width: number;
    height: number;
    minLng: number;
    maxLng: number;
    minLat: number;
    maxLat: number;
    noData?: number;
    valueScale: number;
}
export interface RasterParams {
    values: ArrayLike<number>;
    nx: number;
    ny: number;
    minLng: number;
    minLat: number;
    gjLat: number;
    gjLng: number;
    noData?: number;
    valueScale?: number;
    flipY?: boolean;
}
export interface RasterFileSource {
    type: 'tif' | 'micaps4';
    url: string;
}
export interface RasterParamsSource {
    type: 'params';
    params: RasterParams;
}
export type RasterSource = RasterFileSource | RasterParamsSource;
export interface RasterLoadOptions {
    flipY?: boolean;
    noData?: number;
    valueScale?: number;
}

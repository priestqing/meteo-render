import type { GridData } from '@meteo-render/rendering';
export type StationCoordinateArray = Float32Array | Float64Array;
export type StationValueArray = Float32Array | Float64Array;
export type StationInterpolationBackend = 'auto' | 'cpu' | 'webgpu';
export type KrigingVariogramModel = 'spherical' | 'exponential' | 'gaussian';
export interface IStationCoordinates {
    longitude: StationCoordinateArray;
    latitude: StationCoordinateArray;
}
export interface IStationGridDefinition {
    minLng: number;
    maxLng: number;
    minLat: number;
    maxLat: number;
    width: number;
    height: number;
    noData?: number;
}
export interface IIdwInterpolationMethod {
    type: 'idw';
    power?: number;
    maxNeighbors?: number;
    minNeighbors?: number;
    searchRadius?: number;
}
export interface IKrigingAutoInterpolationMethod {
    type: 'kriging';
    model?: KrigingVariogramModel;
    fit?: 'auto';
    regularization?: number;
}
export interface IKrigingFixedInterpolationMethod {
    type: 'kriging';
    model?: KrigingVariogramModel;
    fit: 'fixed';
    nugget: number;
    sill: number;
    range: number;
    regularization?: number;
}
export type IKrigingInterpolationMethod = IKrigingAutoInterpolationMethod | IKrigingFixedInterpolationMethod;
export type StationInterpolationMethod = IIdwInterpolationMethod | IKrigingInterpolationMethod;
export interface IStationGridInterpolatorCreateOptions {
    coordinates: IStationCoordinates;
    grid: IStationGridDefinition;
    method: StationInterpolationMethod;
    backend?: StationInterpolationBackend;
    signal?: AbortSignal;
}
export interface IStationInterpolationRequestOptions {
    signal?: AbortSignal;
    sourceNoData?: number;
}
export interface IStationGridInterpolator {
    readonly backend: Exclude<StationInterpolationBackend, 'auto'>;
    readonly stationCount: number;
    interpolate: (values: StationValueArray, options?: IStationInterpolationRequestOptions) => Promise<GridData>;
    destroy: () => void;
}
export interface IResolvedIdwMethod {
    type: 'idw';
    power: number;
    maxNeighbors: number;
    minNeighbors: number;
    searchRadius: number;
}
export interface IResolvedKrigingMethod {
    type: 'kriging';
    model: KrigingVariogramModel;
    fit: 'auto' | 'fixed';
    nugget?: number;
    sill?: number;
    range?: number;
    regularization: number;
}
export type ResolvedStationInterpolationMethod = IResolvedIdwMethod | IResolvedKrigingMethod;
export interface IResolvedStationInterpolationOptions {
    coordinates: IStationCoordinates;
    grid: Required<IStationGridDefinition>;
    method: ResolvedStationInterpolationMethod;
}
export interface IKrigingModel {
    stationIndices: Uint32Array;
    coefficients: Float64Array;
    bias: number;
    model: KrigingVariogramModel;
    nugget: number;
    sill: number;
    range: number;
}
export interface IIdwPreparedWeights {
    stationIndices: Uint32Array;
    weights: Float32Array;
    candidateCount: number;
}

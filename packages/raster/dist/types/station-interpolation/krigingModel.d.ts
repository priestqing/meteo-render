import type { IKrigingModel, IResolvedKrigingMethod, IStationCoordinates, StationValueArray } from './types';
export declare const createKrigingModel: (coordinates: IStationCoordinates, values: StationValueArray, sourceNoData: number | undefined, method: IResolvedKrigingMethod) => IKrigingModel;
export declare const predictKrigingValue: (longitude: number, latitude: number, coordinates: IStationCoordinates, model: IKrigingModel) => number;

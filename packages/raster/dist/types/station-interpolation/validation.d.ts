import type { IResolvedStationInterpolationOptions, IStationGridInterpolatorCreateOptions, StationValueArray } from './types';
export declare const resolveStationInterpolationOptions: (options: IStationGridInterpolatorCreateOptions) => IResolvedStationInterpolationOptions;
export declare const validateStationValues: (values: StationValueArray, stationCount: number, sourceNoData: number | undefined) => void;

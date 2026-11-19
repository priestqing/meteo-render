import type { IIdwPreparedWeights, IResolvedIdwMethod, IStationCoordinates, IStationGridDefinition } from './types';
export declare const INVALID_STATION_INDEX = 4294967295;
export declare const prepareIdwWeights: (coordinates: IStationCoordinates, grid: Required<IStationGridDefinition>, method: IResolvedIdwMethod, signal?: AbortSignal) => Promise<IIdwPreparedWeights>;

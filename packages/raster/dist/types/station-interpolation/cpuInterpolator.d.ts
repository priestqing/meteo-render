import type { GridData } from '@meteo-render/rendering';
import type { IResolvedStationInterpolationOptions, IStationGridInterpolator, IStationInterpolationRequestOptions, StationValueArray } from './types';
export declare class CpuStationGridInterpolator implements IStationGridInterpolator {
    private readonly options;
    private readonly idwWeights?;
    readonly backend: 'cpu';
    readonly stationCount: number;
    private destroyed;
    private constructor();
    static create(options: IResolvedStationInterpolationOptions, signal?: AbortSignal): Promise<CpuStationGridInterpolator>;
    interpolate(values: StationValueArray, request?: IStationInterpolationRequestOptions): Promise<GridData>;
    destroy(): void;
    private interpolateIdw;
    private interpolateIdwFallback;
    private yieldIfNeeded;
    private assertAvailable;
}

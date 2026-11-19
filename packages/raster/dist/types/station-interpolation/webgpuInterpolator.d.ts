import type { GridData } from '@meteo-render/rendering';
import type { IResolvedStationInterpolationOptions, IStationGridInterpolator, IStationInterpolationRequestOptions, StationValueArray } from './types';
export declare class WebgpuStationGridInterpolator implements IStationGridInterpolator {
    private readonly options;
    private readonly device;
    readonly backend: 'webgpu';
    readonly stationCount: number;
    private destroyed;
    private deviceLost;
    private readonly pipeline;
    private readonly idwIndexBuffer?;
    private readonly idwWeightBuffer?;
    private readonly idwCandidateCount;
    private constructor();
    static create(options: IResolvedStationInterpolationOptions, signal?: AbortSignal): Promise<WebgpuStationGridInterpolator>;
    interpolate(values: StationValueArray, request?: IStationInterpolationRequestOptions): Promise<GridData>;
    destroy(): void;
    private createStationData;
    private createParams;
    private createBuffer;
    private assertAvailable;
}

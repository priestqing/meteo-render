import type { IRoadLayerOptions, IRoadLayerUpdate } from '@meteo-render/raster/core';
import type { IMars3dRoadMapLike, IMars3dRoadRuntime } from './types';
export declare class Mars3dRoadRenderer {
    private readonly runtime;
    private readonly scene;
    private options;
    private collection;
    private interaction;
    constructor(runtime: IMars3dRoadRuntime, map: IMars3dRoadMapLike, options: IRoadLayerOptions);
    update(options: IRoadLayerUpdate): void;
    setShow(show: boolean): void;
    destroy(): void;
    private rebuild;
    private bindInteraction;
    private pick;
}

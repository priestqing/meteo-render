import type { ContourState } from '@meteo-render/raster/core';
import type { IMars3dContourLayerOptions, IMars3dContourMapLike, IMars3dContourRuntime } from './types';
export declare class Mars3dContourRenderer {
    private readonly runtime;
    private readonly map;
    private readonly state;
    private readonly placementOptions;
    readonly readyPromise: Promise<void>;
    private readonly source;
    private lineEntities;
    private labelEntities;
    private labels;
    private destroyed;
    constructor(runtime: IMars3dContourRuntime, map: IMars3dContourMapLike, state: ContourState, placementOptions: IMars3dContourLayerOptions);
    update(geometryChanged: boolean, labelsChanged: boolean): void;
    setShow(show: boolean): void;
    destroy(): void;
    private color;
    private material;
    private labelStyle;
    private rebuild;
    private rebuildLabels;
    private isGround;
    private height;
}

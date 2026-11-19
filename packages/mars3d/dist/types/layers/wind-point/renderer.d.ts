import type { IWindPointLayerOptions, IWindPointLayerUpdate } from '@meteo-render/rendering';
import type { VectorGridData } from '@meteo-render/core';
import type { IMars3dPointMapLike, IMars3dPointRuntime } from '../point/types';
export declare class Mars3dWindPointRenderer {
    private readonly cesium;
    private readonly scene;
    private options;
    private billboards;
    private labels;
    private interaction;
    private selectedIndex;
    private defaultIcon;
    constructor(runtime: IMars3dPointRuntime, map: IMars3dPointMapLike, options: IWindPointLayerOptions);
    setData(data: VectorGridData): void;
    update(options: IWindPointLayerUpdate): void;
    setShow(show: boolean): void;
    clearSelection(): void;
    destroy(): void;
    private rebuild;
    private getDefaultIcon;
    private bindInteraction;
    private pickFeature;
    private removeCollection;
}

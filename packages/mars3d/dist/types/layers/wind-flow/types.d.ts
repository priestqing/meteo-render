import type { IWindFlowDataLayer, IWindFlowLayerOptions, IWindFlowLayerUpdate } from '@meteo-render/rendering';
import type { IMars3dPointBaseLayerLike } from '../point/types';
export interface IMars3dWindFlowLayerOptions extends IWindFlowLayerOptions {
}
export interface IMars3dWindFlowLayer extends IWindFlowDataLayer, IMars3dPointBaseLayerLike {
    update(options: IWindFlowLayerUpdate): void;
}
export interface IMars3dWindFlowMapLike {
    scene: {
        canvas: HTMLCanvasElement;
    };
}
export interface IMars3dWindFlowRuntime {
    readonly Cesium: {
        readonly Cartesian3: {
            fromDegrees(longitude: number, latitude: number, height?: number): unknown;
        };
        readonly SceneTransforms: {
            worldToWindowCoordinates(scene: unknown, position: unknown): {
                x: number;
                y: number;
            } | undefined;
        };
    };
    readonly layer: {
        readonly BaseLayer: new (options?: unknown) => IMars3dPointBaseLayerLike;
    };
}

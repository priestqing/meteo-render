import type { IRoadDataLayer, IRoadLayerOptions, IRoadLayerUpdate } from '@meteo-render/raster/core';
import type { ICesiumColorLike, ICesiumPrimitiveLike, ICesiumScreenSpaceEventHandlerLike, IMars3dPointBaseLayerLike } from '../point/types';
export interface IMars3dRoadLayerOptions extends IRoadLayerOptions {
}
export interface IMars3dRoadLayer extends IRoadDataLayer, IMars3dPointBaseLayerLike {
    update(options: IRoadLayerUpdate): void;
}
export interface IMars3dRoadMapLike {
    scene: {
        canvas: HTMLCanvasElement;
        primitives: {
            add<T extends ICesiumPrimitiveLike>(primitive: T): T;
            remove(primitive: ICesiumPrimitiveLike): boolean;
        };
        pick(position: unknown): {
            id?: unknown;
        } | undefined;
        requestRender(): void;
    };
}
export interface ICesiumPolylineCollectionLike extends ICesiumPrimitiveLike {
    add(options: Record<string, unknown>): unknown;
}
export interface IMars3dRoadRuntime {
    readonly Cesium: {
        readonly Cartesian3: {
            fromDegrees(longitude: number, latitude: number, height?: number): unknown;
        };
        readonly Color: {
            fromCssColorString(color: string): ICesiumColorLike;
        };
        readonly Material: {
            fromType(type: string, uniforms?: Record<string, unknown>): unknown;
        };
        readonly PolylineCollection: new () => ICesiumPolylineCollectionLike;
        readonly ScreenSpaceEventHandler: new (canvas: HTMLCanvasElement) => ICesiumScreenSpaceEventHandlerLike;
        readonly ScreenSpaceEventType: Record<string, unknown>;
    };
    readonly layer: {
        readonly BaseLayer: new (options?: unknown) => IMars3dPointBaseLayerLike;
    };
}

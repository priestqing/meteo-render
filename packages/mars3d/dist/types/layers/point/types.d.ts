import type { IPointDataLayer, IPointLayerCreateOptions, IPointLayerUpdate } from '@meteo-render/raster/core';
export interface IMars3dPointLayerOptions extends IPointLayerCreateOptions {
    name?: string;
    show?: boolean;
}
export interface IMars3dPointLayerUpdate extends IPointLayerUpdate {
}
export interface IMars3dPointLayer extends IPointDataLayer {
    update(options: IMars3dPointLayerUpdate): void | Promise<void>;
    destroy(noDel?: boolean): void;
}
export interface ICesiumColorLike {
    withAlpha(alpha: number): ICesiumColorLike;
}
export interface ICesiumPrimitiveLike {
    show: boolean;
}
export interface ICesiumPointPrimitiveLike {
    id?: unknown;
    outlineWidth?: number;
}
export interface ICesiumCollectionLike extends ICesiumPrimitiveLike {
    add(options: Record<string, unknown>): ICesiumPointPrimitiveLike;
    removeAll(): void;
    destroy(): void;
}
export interface ICesiumScreenSpaceEventHandlerLike {
    setInputAction(callback: (movement: Record<string, unknown>) => void, type: unknown): void;
    destroy(): void;
}
export interface IMars3dPointMapLike {
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
export interface IMars3dPointBaseLayerLike {
    readonly show: boolean;
    readonly _map?: IMars3dPointMapLike;
    destroy(noDel?: boolean): void;
}
export interface IMars3dPointRuntime {
    readonly Cesium: {
        readonly Cartesian3: {
            fromDegrees(longitude: number, latitude: number, height?: number): unknown;
        };
        readonly Color: {
            fromCssColorString(color: string): ICesiumColorLike;
        };
        readonly HorizontalOrigin: Record<string, unknown>;
        readonly VerticalOrigin: Record<string, unknown>;
        readonly LabelStyle: Record<string, unknown>;
        readonly PointPrimitiveCollection: new () => ICesiumCollectionLike;
        readonly BillboardCollection: new () => ICesiumCollectionLike;
        readonly LabelCollection: new () => ICesiumCollectionLike;
        readonly ScreenSpaceEventHandler: new (canvas: HTMLCanvasElement) => ICesiumScreenSpaceEventHandlerLike;
        readonly ScreenSpaceEventType: Record<string, unknown>;
    };
    readonly layer: {
        readonly BaseLayer: new (options?: unknown) => IMars3dPointBaseLayerLike;
    };
}

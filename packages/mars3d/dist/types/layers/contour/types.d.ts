import type { IContourDataLayer, IContourLayerOptions, IContourLayerUpdate, RasterLayerPlacement } from '@meteo-render/raster/core';
import type { ICesiumColorLike, IMars3dPointBaseLayerLike } from '../point/types';
export interface IMars3dContourLayerOptions extends IContourLayerOptions {
    placement?: RasterLayerPlacement;
    height?: number;
    name?: string;
    show?: boolean;
}
export interface IMars3dContourLayerUpdate extends IContourLayerUpdate {
    placement?: RasterLayerPlacement;
    height?: number;
}
export interface IMars3dContourLayer extends IContourDataLayer, IMars3dPointBaseLayerLike {
    readonly readyPromise: Promise<void>;
    update(options: IMars3dContourLayerUpdate): void;
}
export interface ICesiumContourEntity {
    polyline?: {
        width?: unknown;
        material?: unknown;
    };
    label?: {
        fillColor?: unknown;
        outlineColor?: unknown;
    };
}
export interface ICesiumContourDataSource {
    show: boolean;
    entities: {
        add(options: Record<string, unknown>): ICesiumContourEntity;
        remove(entity: ICesiumContourEntity): boolean;
        removeAll(): void;
        suspendEvents(): void;
        resumeEvents(): void;
    };
}
export interface IMars3dContourMapLike {
    viewer: {
        dataSources: {
            add(source: ICesiumContourDataSource): Promise<ICesiumContourDataSource>;
            remove(source: ICesiumContourDataSource, destroy?: boolean): boolean;
        };
    };
    scene: {
        requestRender(): void;
    };
}
export interface IMars3dContourRuntime {
    readonly layer: {
        readonly BaseLayer: new (options?: unknown) => IMars3dPointBaseLayerLike;
    };
    readonly Cesium: {
        readonly CustomDataSource: new (name?: string) => ICesiumContourDataSource;
        readonly Cartesian3: {
            fromDegrees(longitude: number, latitude: number, height?: number): unknown;
        };
        readonly Color: {
            fromCssColorString(color: string): ICesiumColorLike | undefined;
        };
        readonly PolylineDashMaterialProperty: new (options: {
            color: ICesiumColorLike;
            dashLength: number;
            dashPattern: number;
        }) => unknown;
        readonly HeightReference: {
            readonly CLAMP_TO_GROUND: unknown;
            readonly NONE: unknown;
        };
        readonly LabelStyle: {
            readonly FILL_AND_OUTLINE: unknown;
        };
        readonly VerticalOrigin: {
            readonly CENTER: unknown;
        };
        readonly HorizontalOrigin: {
            readonly CENTER: unknown;
        };
    };
}

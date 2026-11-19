import type { IRadarCoverageDataLayer, IRadarCoverageLayerOptions, IRadarCoverageLayerUpdate } from '@meteo-render/rendering';
import type { ICesiumColorLike, ICesiumPrimitiveLike, IMars3dPointBaseLayerLike } from '../point/types';
export interface IMars3dRadarCoverageLayerOptions extends IRadarCoverageLayerOptions {
}
export interface IMars3dRadarCoverageLayer extends IRadarCoverageDataLayer, IMars3dPointBaseLayerLike {
    update(options: IRadarCoverageLayerUpdate): void;
}
export interface ICesiumCoverageCollectionLike extends ICesiumPrimitiveLike {
    add(options: Record<string, unknown>): unknown;
}
export interface IMars3dRadarCoverageMapLike {
    scene: {
        primitives: {
            add<T extends ICesiumPrimitiveLike>(primitive: T): T;
            remove(primitive: ICesiumPrimitiveLike): boolean;
        };
        requestRender(): void;
    };
}
export interface IMars3dRadarCoverageRuntime {
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
        readonly PolylineCollection: new () => ICesiumCoverageCollectionLike;
        readonly PointPrimitiveCollection: new () => ICesiumCoverageCollectionLike;
    };
    readonly layer: {
        readonly BaseLayer: new (options?: unknown) => IMars3dPointBaseLayerLike;
    };
}

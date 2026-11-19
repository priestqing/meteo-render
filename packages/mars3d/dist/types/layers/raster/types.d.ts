import type { IRasterDataLayer, IRasterLayerCreateOptions } from '@meteo-render/raster/core';
import type { CesiumRuntime } from '../../raster-mars3d/types';
import type { IMars3dRasterPlaneLayer } from '../../raster-mars3d/rasterPlaneTypes';
export interface IMars3dRasterLayerOptions extends IRasterLayerCreateOptions {
    minimumLevel?: number;
    maximumLevel?: number;
    tileWidth?: number;
    tileHeight?: number;
}
export interface IMars3dRasterLayer extends IRasterDataLayer {
}
export interface IMars3dRasterBaseLayerLike {
    readonly show: boolean;
    reload?: () => void;
    _removedHook(): void;
    destroy(noDel?: boolean): void;
}
export interface IMars3dRasterRuntime {
    readonly Cesium: CesiumRuntime;
    readonly layer: {
        readonly BaseTileLayer: new (options?: unknown) => IMars3dRasterBaseLayerLike;
        readonly BaseLayer: new (options?: unknown) => IMars3dRasterPlaneLayer;
    };
}

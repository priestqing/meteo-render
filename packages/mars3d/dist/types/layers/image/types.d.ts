import type { IImageDataLayer, IImageLayerOptions, IImageLayerUpdate } from '@meteo-render/raster/core';
export interface IMars3dImageLayerOptions extends IImageLayerOptions {
}
export interface IMars3dImageLayer extends IImageDataLayer {
    update(options: IImageLayerUpdate): Promise<void>;
    destroy(noDel?: boolean): void;
}
export interface ICesiumSingleTileProviderLike {
    destroy?: () => void;
}
export interface IMars3dImageBaseLayerLike {
    readonly show: boolean;
    alpha?: number;
    reload?: () => void;
    _removedHook(): void;
    destroy(noDel?: boolean): void;
}
export interface IMars3dImageRuntime {
    readonly Cesium: {
        readonly Rectangle: {
            fromDegrees(west: number, south: number, east: number, north: number): unknown;
        };
        readonly SingleTileImageryProvider: {
            fromUrl(url: string, options: Record<string, unknown>): Promise<ICesiumSingleTileProviderLike>;
        };
    };
    readonly layer: {
        readonly BaseTileLayer: new (options?: unknown) => IMars3dImageBaseLayerLike;
    };
}

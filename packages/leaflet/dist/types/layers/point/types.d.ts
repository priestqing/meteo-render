import type { IPointLayerCreateOptions, IPointLayerUpdate } from '@meteo-render/raster/core';
import type { IPointLeafletLayer } from '@meteo-render/raster/leaflet';
export interface ILeafletPointLayerOptions extends IPointLayerCreateOptions {
}
export interface ILeafletPointLayer extends IPointLeafletLayer {
    update(options: IPointLayerUpdate): Promise<void>;
    destroy(): void;
}

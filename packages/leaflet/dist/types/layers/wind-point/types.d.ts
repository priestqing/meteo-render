import type * as L from 'leaflet';
import type { IWindPointLeafletLayer, IWindPointLeafletLayerCreateOptions } from '@meteo-render/wind';
import type { IWindPointLayerOptions as ISharedWindPointLayerOptions, IWindPointLayerUpdate } from '@meteo-render/rendering';
export type LeafletWindPointRuntime = typeof L;
export interface IWindPointLayerOptions extends ISharedWindPointLayerOptions, Omit<IWindPointLeafletLayerCreateOptions, 'grid' | keyof ISharedWindPointLayerOptions> {
}
export interface ILeafletWindPointLayer extends IWindPointLeafletLayer {
    setData(data: IWindPointLayerOptions['data']): Promise<void>;
    update(options: IWindPointLayerUpdate): Promise<void>;
    destroy(): void;
}
export type { IWindPointLayerUpdate };

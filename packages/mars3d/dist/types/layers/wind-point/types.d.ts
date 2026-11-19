import type { IWindPointDataLayer, IWindPointLayerOptions, IWindPointLayerUpdate } from '@meteo-render/rendering';
import type { IMars3dPointBaseLayerLike, IMars3dPointRuntime } from '../point/types';
export interface IMars3dWindPointLayerOptions extends IWindPointLayerOptions {
}
export interface IMars3dWindPointLayer extends IWindPointDataLayer, IMars3dPointBaseLayerLike {
    update(options: IWindPointLayerUpdate): void;
}
export type Mars3dWindPointRuntime = IMars3dPointRuntime;

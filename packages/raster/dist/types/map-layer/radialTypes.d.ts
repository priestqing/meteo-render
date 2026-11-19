import type { RadialData } from '@meteo-render/core';
import type { IRasterDataLayer, IRasterLayerCreateOptions, IRasterLayerUpdate } from './types';
export interface IRadialLayerCreateOptions extends Omit<IRasterLayerCreateOptions, 'data'> {
    data: RadialData;
    rasterSize?: number;
}
export interface IRadialLayerUpdate extends Omit<IRasterLayerUpdate, 'data'> {
    data?: RadialData;
    rasterSize?: number;
}
export interface IRadialDataLayer extends Omit<IRasterDataLayer, 'setData' | 'update'> {
    setData(data: RadialData): void | Promise<void>;
    update(options: IRadialLayerUpdate): void | Promise<void>;
}

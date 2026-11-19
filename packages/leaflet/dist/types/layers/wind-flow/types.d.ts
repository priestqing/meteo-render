import type * as L from 'leaflet';
import type { IWindFlowLeafletLayer, IWindFlowLeafletLayerCreateOptions } from '@meteo-render/wind';
import type { IWindFlowLayerOptions as ISharedWindFlowLayerOptions, IWindFlowLayerUpdate } from '@meteo-render/rendering';
export type LeafletWindFlowRuntime = typeof L;
export interface IWindFlowLayerOptions extends ISharedWindFlowLayerOptions, Omit<IWindFlowLeafletLayerCreateOptions, 'grid' | keyof ISharedWindFlowLayerOptions> {
}
export interface ILeafletWindFlowLayer extends IWindFlowLeafletLayer {
    setData(data: IWindFlowLayerOptions['data']): Promise<void>;
    update(options: IWindFlowLayerUpdate): Promise<void>;
    destroy(): void;
}
export type { IWindFlowLayerUpdate };

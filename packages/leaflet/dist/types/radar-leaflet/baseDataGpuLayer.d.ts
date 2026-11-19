import * as L from 'leaflet';
import { LeafletCanvasLayer } from '@meteo-render/raster/leaflet';
import type { IGpuRadarColorStop, IGpuRadarOptions, IGpuRadarSelection, IGpuRadarVolume } from '@meteo-render/radar';
export interface IBaseDataGpuLeafletLayerOptions extends L.LayerOptions {
    volume: IGpuRadarVolume;
    opacity?: number;
    coordinateSystem?: 'wgs84' | 'gcj02';
    onError?: (message: string) => void;
}
/** GPU 产品纹理直接绘制，共用栅格图层的地图交互生命周期。 */
export declare class BaseDataGpuLeafletLayer extends LeafletCanvasLayer {
    private readonly config;
    protected redrawAfterMove: boolean;
    private renderer;
    private stops;
    private opacity;
    private grid?;
    private mesh?;
    private meshKey;
    constructor(config: IBaseDataGpuLeafletLayerOptions);
    onAdd(map: L.Map): this;
    onRemove(map: L.Map): this;
    compute(selection: IGpuRadarSelection, options: IGpuRadarOptions, radius: number, spacing: number): Promise<import("@meteo-render/radar").IGpuRadarResult>;
    readPoint(row: number, col: number): {
        value: number;
        quality: number;
    };
    setColorStops(stops: IGpuRadarColorStop[]): void;
    setOpacity(opacity: number): void;
    protected render(): Promise<void>;
    protected handleRenderError(error: unknown): void;
    private requireRenderer;
    private readonly handleContextLost;
}
export declare const createBaseDataGpuLeafletLayer: (options: IBaseDataGpuLeafletLayerOptions) => BaseDataGpuLeafletLayer;

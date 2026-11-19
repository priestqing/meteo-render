import type * as L from 'leaflet';
import type { RasterColorStopInput, RasterQueryCallback, RasterQueryResult, RasterRendererCreateOptions, RasterRendererType } from './rasterTypes';
/** Leaflet 栅格图层创建配置。 */
export interface RasterLeafletLayerCreateOptions extends RasterRendererCreateOptions<RasterColorStopInput> {
    pane?: string;
    rendererType: RasterRendererType;
    onHover?: RasterQueryCallback;
    onClick?: RasterQueryCallback;
    tooltip?: RasterTooltipOptions;
    queryOutsideClip?: boolean;
    /** 渲染器绘制调用完成后触发，不包含初始化和帧调度等待，也不保证 GPU 已完成。 */
    onRender?: (durationMs: number) => void;
}
export interface RasterQueryEvent extends L.LeafletEvent {
    result: RasterQueryResult;
    latlng: L.LatLng;
    originalEvent: MouseEvent;
}
export interface RasterTooltipOptions {
    enabled?: boolean;
    position?: 'follow' | 'fixed';
    formatter?: (result: RasterQueryResult) => string;
}

import * as L from 'leaflet';
import type { MapRenderViewport } from '@meteo-render/rendering';
/** 共用地图画布定位、缓冲区域、缩放动画和绘制调度。 */
export declare abstract class LeafletCanvasLayer extends L.Layer {
    protected canvas: HTMLCanvasElement | null;
    protected map: L.Map | null;
    protected renderedFrame: MapRenderViewport | null;
    protected redrawAfterMove: boolean;
    private renderedViewport;
    private renderFrame;
    private viewportRefreshNeeded;
    private readonly handleMapChanged;
    private readonly handleMoveEnd;
    private readonly handleMapMove;
    protected attachCanvas(map: L.Map, className: string): HTMLCanvasElement;
    protected detachCanvas(map: L.Map): void;
    redraw(): void;
    getCanvas(): HTMLCanvasElement | null;
    protected abstract render(): Promise<void>;
    protected handleRenderError(error: unknown): void;
    protected syncCanvasToMap(): void;
    /**
     * 合并同一帧内的多次绘制请求
     * @private
     */
    protected requestRender(): void;
    /**
     * 立即绘制当前视口，避免 canvas resize 后空一帧
     */
    private renderImmediately;
    protected getViewport(): MapRenderViewport | null;
    private readonly handleZoomAnimation;
    /**
     * 与 Leaflet Map._getNewPixelOrigin 保持相同的像素原点计算。
     */
    private getNewPixelOrigin;
}

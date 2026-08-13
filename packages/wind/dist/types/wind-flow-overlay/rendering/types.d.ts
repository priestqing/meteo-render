import type { MapCrs, MapRenderViewport } from '@meteo-render/rendering';
import type { ColorStop } from '@meteo-render/rendering';
import type { WindFlowRendererType } from '../types';
export interface IWindFlowRenderSegment {
    startX: number;
    startY: number;
    endX: number;
    endY: number;
    color: ColorStop['color'];
}
export interface IWindFlowRenderFrame {
    viewport: MapRenderViewport;
    retention: number;
    opacity: number;
    trailWidth: number;
    segments: readonly IWindFlowRenderSegment[];
    clipVertices: Float32Array<ArrayBuffer> | null;
}
export interface IWindFlowRenderer {
    readonly backend: WindFlowRendererType;
    initialize: (canvas: HTMLCanvasElement, crs: MapCrs) => void | Promise<void>;
    render: (frame: IWindFlowRenderFrame) => void;
    clear: () => void;
    destroy: () => void;
}

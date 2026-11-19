import { WebglWindFlowRendererBase } from './webglWindFlowRendererBase';
export declare class WebglWindFlowRenderer extends WebglWindFlowRendererBase<'webgl', WebGLRenderingContext> {
    constructor();
    protected createContext(canvas: HTMLCanvasElement, attributes: WebGLContextAttributes): WebGLRenderingContext | null;
}

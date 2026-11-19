import { WebglWindFlowRendererBase } from './webglWindFlowRendererBase';
export declare class Webgl2WindFlowRenderer extends WebglWindFlowRendererBase<'webgl2', WebGL2RenderingContext> {
    constructor();
    protected createContext(canvas: HTMLCanvasElement, attributes: WebGLContextAttributes): WebGL2RenderingContext | null;
}

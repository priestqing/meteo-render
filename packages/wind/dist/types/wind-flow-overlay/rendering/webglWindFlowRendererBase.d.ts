import type { MapCrs } from '@meteo-render/rendering';
import type { IWindFlowRenderFrame, IWindFlowRenderer } from './types';
type WindFlowWebglBackend = 'webgl' | 'webgl2';
type WindFlowGl = WebGLRenderingContext | WebGL2RenderingContext;
interface IWindFlowWebglShaderSources {
    fadeVertex: string;
    fadeFragment: string;
    segmentVertex: string;
    segmentFragment: string;
    clipVertex: string;
    clipFragment: string;
}
export declare abstract class WebglWindFlowRendererBase<TBackend extends WindFlowWebglBackend, TGl extends WindFlowGl> implements IWindFlowRenderer {
    readonly backend: TBackend;
    private readonly shaderSources;
    private canvas;
    private gl;
    private fadeProgram;
    private segmentProgram;
    private clipProgram;
    private fullscreenBuffer;
    private segmentBuffer;
    private clipBuffer;
    private width;
    private height;
    protected constructor(backend: TBackend, shaderSources: IWindFlowWebglShaderSources);
    protected abstract createContext(canvas: HTMLCanvasElement, attributes: WebGLContextAttributes): TGl | null;
    private readonly contextLostHandler;
    private readonly contextRestoredHandler;
    initialize(canvas: HTMLCanvasElement, _crs: MapCrs): void;
    render(frame: IWindFlowRenderFrame): void;
    clear(): void;
    destroy(): void;
    private createContextAndResources;
    private drawFade;
    private drawClip;
    private drawSegments;
    private createProgram;
    private createShader;
    private createBuffer;
    private releaseResources;
    private getGl;
    private getProgram;
}
export {};

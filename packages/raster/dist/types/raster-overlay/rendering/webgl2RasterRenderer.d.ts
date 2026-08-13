import type { Webgl2FrameContext } from '@meteo-render/rendering';
import { BaseWebgl2Renderer } from '@meteo-render/rendering';
import type { RendererReleaseReason } from '@meteo-render/rendering';
import type { ClipMode } from '@meteo-render/rendering';
import type { PolygonMeshInput } from '@meteo-render/rendering';
import type { ColorMode, ColorRange, ColorStop, GridData, SampleMode } from '@meteo-render/rendering';
import { RasterRenderState } from './rasterRenderState';
import type { RasterRenderer } from './renderer';
/** 通过公共 WebGL2 生命周期渲染栅格及其四种裁剪模式。 */
export declare class Webgl2RasterRenderer extends BaseWebgl2Renderer implements RasterRenderer<'webgl2'> {
    private readonly rasterState;
    private normalProgram;
    private directProgram;
    private visualizationResources;
    private coverageResources;
    private appliedGridRevision;
    private appliedColorStopsRevision;
    private appliedClipRevision;
    constructor(rasterState?: RasterRenderState);
    setGrid(grid: GridData): void;
    setColorStops(colorStops: readonly ColorStop[]): void;
    setColorRange(colorRange: ColorRange | null): void;
    setOpacity(opacity: number): void;
    setColorMode(colorMode: ColorMode): void;
    setSampleMode(sampleMode: SampleMode): void;
    setClip(data: PolygonMeshInput | null, mode?: ClipMode): void;
    setClipMode(mode: ClipMode): void;
    protected createFeatureResources(): void;
    protected releaseFeatureResources(_reason: RendererReleaseReason): void;
    protected prepareFrame(frame: Webgl2FrameContext): void;
    protected encodePrePasses(frame: Webgl2FrameContext): void;
    protected encodeMainPass(frame: Webgl2FrameContext): void;
    private syncResources;
}

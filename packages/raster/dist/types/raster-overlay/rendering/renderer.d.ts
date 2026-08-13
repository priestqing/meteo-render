import type { MapRenderer, RendererBackend } from '@meteo-render/rendering';
import type { ClipMode } from '@meteo-render/rendering';
import type { PolygonMeshInput } from '@meteo-render/rendering';
import type { ColorMode, ColorRange, ColorStop, GridData, SampleMode } from '@meteo-render/rendering';
/** 栅格渲染器的统一运行时接口。 */
export interface RasterRenderer<TBackend extends RendererBackend = RendererBackend> extends MapRenderer<TBackend> {
    setGrid(grid: GridData): void;
    setColorStops(colorStops: readonly ColorStop[]): void;
    setColorRange(colorRange: ColorRange | null): void;
    setOpacity(opacity: number): void;
    setColorMode(colorMode: ColorMode): void;
    setSampleMode(sampleMode: SampleMode): void;
    setClip(data: PolygonMeshInput | null, mode?: ClipMode): void;
    setClipMode(mode: ClipMode): void;
}

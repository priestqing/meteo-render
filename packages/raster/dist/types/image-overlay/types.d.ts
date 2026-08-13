import type * as L from 'leaflet';
import type { RasterRendererType, RasterSampleMode } from '../raster-overlay/rasterTypes';
export type ImageOverlaySource = string | Blob | CanvasImageSource;
export interface ImageLeafletLayerCreateOptions extends L.LayerOptions {
    source: ImageOverlaySource;
    bounds: L.LatLngBoundsExpression;
    rendererType: RasterRendererType;
    sampleMode?: RasterSampleMode;
    opacity?: number;
    crossOrigin?: '' | 'anonymous' | 'use-credentials';
}
export interface ImageLeafletLayer extends L.Layer {
    setSource(source: ImageOverlaySource): Promise<void>;
    setBounds(bounds: L.LatLngBoundsExpression): void;
    setSampleMode(sampleMode: RasterSampleMode): void;
    setOpacity(opacity: number): void;
    redraw(): void;
    getCanvas(): HTMLCanvasElement | null;
}

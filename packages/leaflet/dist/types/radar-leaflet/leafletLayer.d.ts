import * as L from 'leaflet';
import type { RadarLeafletLayerCreateOptions } from '@meteo-render/radar';
import type { ColorMode, ColorRange, ColorStopInput } from '@meteo-render/rendering';
export interface RadarLeafletLayer extends L.Layer {
    redraw(): void;
    getCanvas(): HTMLCanvasElement | null;
    setColorStops(colorStops: ColorStopInput[]): void;
    setColorRange(range: ColorRange): void;
    setOpacity(opacity: number): void;
    setColorMode(colorMode: ColorMode): void;
}
export declare const createRadarLeafletLayer: (options: RadarLeafletLayerCreateOptions) => RadarLeafletLayer;

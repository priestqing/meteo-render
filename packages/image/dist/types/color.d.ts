import type { ColorMode, ColorRange, ColorStopInput } from '@meteo-render/rendering';
export type RgbaColor = readonly [number, number, number, number];
export declare const parseColor: (color: string) => RgbaColor;
export declare const createColorMapper: (inputs: readonly ColorStopInput[], mode?: ColorMode, range?: ColorRange) => ((value: number) => RgbaColor | undefined);
export declare const resolveOpacity: (value: number | undefined, fallback?: number) => number;

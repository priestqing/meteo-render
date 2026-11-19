import type { RadialData, RasterData } from '@meteo-render/core';
import type { ColorMode, ColorRange, ColorStopInput } from '@meteo-render/rendering';
import type { IImageRangeRingsOptions, IRenderedImage } from './types';
export interface IImageDashboardPanel {
    data: RadialData | RasterData;
    title: string;
    unit: string;
    colorStops: readonly ColorStopInput[];
    colorRange?: ColorRange;
    colorMode?: ColorMode;
    rangeRings?: IImageRangeRingsOptions;
    xLabel?: string;
    yLabel?: string;
}
export interface IImageDashboardInfo {
    label: string;
    value: string | number;
}
export interface IImageDashboardOptions {
    panels: readonly IImageDashboardPanel[];
    info?: readonly IImageDashboardInfo[];
    title?: string;
    width?: number;
    backgroundColor?: string;
    foregroundColor?: string;
    gridColor?: string;
}
export type ImageDashboardResult = IRenderedImage;

import type { DataMetadata, RasterData } from '@meteo-render/core';
import type { RasterColorStopInput } from '../raster-overlay/rasterTypes';
export type ContourPosition = readonly [number, number];
export type ContourLevels = readonly number[] | 'color-scale';
export interface IContourLine {
    value: number;
    coordinates: readonly ContourPosition[];
    closed: boolean;
}
export interface IContourData {
    kind: 'contours';
    crs: 'EPSG:4326';
    levels: readonly number[];
    lines: readonly IContourLine[];
    metadata?: DataMetadata;
}
export interface IContourOptions {
    /** 使用解码后的物理量数值，空数组表示清空等值线。 */
    levels: readonly number[];
    /** 仅用于 GEOS 投影转经纬度时限制重采样尺寸。 */
    maxDimension?: number;
}
export interface IContourLabelOptions {
    show?: boolean;
    maxCount?: number;
    fontSize?: number;
    color?: string;
    /** auto 优先使用色标填充色，没有色标时使用线色。 */
    contrastSource?: 'auto' | 'fill' | 'line';
    outlineColor?: string;
    outlineWidth?: number;
    formatter?: (value: number) => string;
}
export interface IContourLineStyle {
    color?: string;
    lineWidth?: number;
    opacity?: number;
    /** 交替的实线、空白长度，单位为像素；空数组表示实线。 */
    dashArray?: readonly number[];
}
export interface IContourLayerOptions extends IContourLineStyle {
    data: RasterData;
    levels?: ContourLevels;
    maxDimension?: number;
    colorStops?: readonly RasterColorStopInput[];
    colorMode?: 'step' | 'smooth';
    getLineStyle?: (value: number) => IContourLineStyle;
    label?: IContourLabelOptions;
}
export interface IResolvedContourOptions extends IContourLayerOptions {
    levels: readonly number[];
}
export interface IResolvedContourStyle {
    color: string;
    lineWidth: number;
    opacity: number;
    dashArray: readonly number[];
    labelColor: string;
    outlineColor: string;
}
export interface IContourLayerUpdate extends Partial<IContourLayerOptions> {
}
export interface IContourDataLayer {
    setData(data: RasterData): void;
    setLevels(levels: ContourLevels): void;
    update(options: IContourLayerUpdate): void;
    setOpacity(opacity: number): void;
    redraw(): void;
    destroy(noDel?: boolean): void;
}
export interface IContourNode {
    position: ContourPosition;
    neighbors: number[];
}
export interface IContourLabel {
    position: ContourPosition;
    text: string;
    lineIndex: number;
}

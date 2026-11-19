import type { ColorStop } from '@meteo-render/rendering';
import type { INormalizedPointData } from './data';
import type { IPointFrame, PointLabelOptions, PointLabelPosition, PointColorMode } from './types';
export interface ITextBounds {
    left: number;
    right: number;
    top: number;
    bottom: number;
}
export interface IResolvedPointLabelPartOptions {
    position: PointLabelPosition;
    colorMode?: PointColorMode;
    color: string;
    font: string;
}
export interface IPointLabelLine extends IResolvedPointLabelPartOptions {
    text: string;
}
export interface IPositionedPointLabelLine extends IPointLabelLine {
    top: number;
}
export interface IResolvedPointLabelOptions extends Required<Omit<PointLabelOptions, 'getName' | 'formatter' | 'valueFormatter' | 'name' | 'value'>>, Pick<PointLabelOptions, 'getName' | 'formatter' | 'valueFormatter'> {
    collision: boolean;
    name: IResolvedPointLabelPartOptions;
    value: IResolvedPointLabelPartOptions;
}
export interface IDrawPointLabelsOptions {
    context: CanvasRenderingContext2D;
    data: INormalizedPointData;
    frame: IPointFrame;
    getPointRadius: (pointIndex: number) => number;
    labelOptions: PointLabelOptions;
    colorStops?: readonly ColorStop[];
    zoom: number;
}

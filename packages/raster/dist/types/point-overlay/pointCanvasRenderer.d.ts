import type { IPointAlwaysVisibleStation, IPointFrame } from './types';
export interface IDrawPriorityStationsOptions {
    canvas: HTMLCanvasElement;
    frame: IPointFrame;
    opacity: number;
    priority: ReadonlyMap<number, IPointAlwaysVisibleStation>;
}
export interface IDrawPointInteractionStateOptions {
    canvas: HTMLCanvasElement;
    findFrameIndex: (pointIndex: number) => number | null;
    frame: IPointFrame;
    getHitRadius: () => number;
    hoveredFrameIndex: number | null;
    selectedPointIndex: number | null;
}
export declare const drawPriorityStations: ({ canvas, frame, opacity, priority }: IDrawPriorityStationsOptions) => void;
export declare const drawPointInteractionState: ({ canvas, findFrameIndex, frame, getHitRadius, hoveredFrameIndex, selectedPointIndex }: IDrawPointInteractionStateOptions) => void;

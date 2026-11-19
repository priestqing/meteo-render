import type { RgbaColor } from './color';
export interface ICanvasPoint {
    x: number;
    y: number;
}
export interface ICanvasRect extends ICanvasPoint {
    width: number;
    height: number;
}
export declare class PixelCanvas {
    readonly width: number;
    readonly height: number;
    readonly data: Uint8Array;
    constructor(width: number, height: number);
    fill(color: RgbaColor): void;
    fillRect(rect: ICanvasRect, color: RgbaColor, opacity?: number): void;
    drawCanvas(source: PixelCanvas, x: number, y: number): void;
    blendPixel(x: number, y: number, color: RgbaColor, opacity?: number): void;
    drawLine(start: ICanvasPoint, end: ICanvasPoint, color: RgbaColor, width?: number, opacity?: number, dash?: readonly number[], clipRect?: ICanvasRect): void;
    drawPath(points: readonly ICanvasPoint[], color: RgbaColor, width?: number, opacity?: number, dash?: readonly number[], clipRect?: ICanvasRect): void;
    drawText(text: string, x: number, y: number, color: RgbaColor, fontSize?: number, opacity?: number, align?: 'left' | 'center' | 'right'): void;
    private drawDisc;
}

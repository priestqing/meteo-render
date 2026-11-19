import type { RgbaColor } from './color';
interface ITextTarget {
    blendPixel(x: number, y: number, color: RgbaColor, opacity?: number): void;
}
export declare const drawTypefaceText: (target: ITextTarget, text: string, x: number, y: number, color: RgbaColor, fontSize: number, opacity: number, align: 'left' | 'center' | 'right') => void;
export {};

import type { IResolvedContourOptions, IResolvedContourStyle } from './types';
export declare const validateContourLineStyle: (color: string, lineWidth: number, opacity: number, dashArray: readonly number[]) => void;
export declare const createContourStyles: (options: IResolvedContourOptions) => ReadonlyMap<number, IResolvedContourStyle>;

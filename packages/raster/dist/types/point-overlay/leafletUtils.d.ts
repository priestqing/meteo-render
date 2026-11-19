import type { IPointAlwaysVisibleStation, IPointAlwaysVisibleStyle, IPointColorOptions, IPointFrame } from './types';
export declare const normalizeOpacity: (opacity: number) => number;
export declare const normalizePointColorStops: (colorStops: NonNullable<IPointColorOptions['colorStops']>) => import("@meteo-render/rendering").ColorStop[];
export declare const resolvePriorityStyle: (style: IPointAlwaysVisibleStyle | undefined) => Required<IPointAlwaysVisibleStyle>;
export declare const filterPointFrame: (frame: IPointFrame, excluded: ReadonlyMap<number, IPointAlwaysVisibleStation>) => IPointFrame;
export declare const emptyFrame: () => IPointFrame;
export declare const bucketKey: (x: number, y: number, size: number) => string;

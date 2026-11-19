import type { IContourLine, IContourNode } from './types';
export declare const traceContourLines: (nodes: ReadonlyMap<number, IContourNode>, value: number) => IContourLine[];

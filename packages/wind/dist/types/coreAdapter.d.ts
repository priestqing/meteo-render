import { type VectorGridData } from '@meteo-render/core';
import type { IWindGrid } from './wind-data/types';
export declare const windGridToVectorGridData: (grid: IWindGrid, noData?: number) => VectorGridData;

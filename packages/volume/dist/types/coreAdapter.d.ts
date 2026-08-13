import { type VolumeData } from '@meteo-render/core';
import type { IInMemoryVolumeData } from './volume-scene/sourceTypes';
export declare const inMemoryVolumeToVolumeData: (source: IInMemoryVolumeData, timeIndex?: number, noData?: number) => VolumeData;

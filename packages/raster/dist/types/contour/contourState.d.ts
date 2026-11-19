import type { IContourData, IContourLayerOptions, IContourLayerUpdate, IResolvedContourOptions, IResolvedContourStyle } from './types';
export declare class ContourState {
    options: IResolvedContourOptions;
    data: IContourData;
    styles: ReadonlyMap<number, IResolvedContourStyle>;
    private input;
    constructor(options: IContourLayerOptions);
    update(update: IContourLayerUpdate): boolean;
}

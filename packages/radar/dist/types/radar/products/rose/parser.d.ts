import type { RadarBinaryReader } from '../../common/binaryReader';
import type { IRadarProductParseContext, IRadarProductParser } from '../../common/parserTypes';
import type { RoseRadarProduct } from '../../types';
import { RadarProductType } from '../../types';
export declare class RoseRadarParser implements IRadarProductParser<RoseRadarProduct> {
    private readonly expectedProductType;
    constructor(expectedProductType: RadarProductType);
    parse(reader: RadarBinaryReader, context: IRadarProductParseContext): RoseRadarProduct;
    private get productName();
}

import type { RadarBinaryReader } from '../../common/binaryReader';
import type { IRadarProductParseContext, IRadarProductParser } from '../../common/parserTypes';
import type { EbRadarProduct } from '../../types';
export declare class EbRadarParser implements IRadarProductParser<EbRadarProduct> {
    parse(reader: RadarBinaryReader, context: IRadarProductParseContext): EbRadarProduct;
}

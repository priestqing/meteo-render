import type { RadarBinaryReader } from '../../common/binaryReader';
import type { IRadarProductParseContext, IRadarProductParser } from '../../common/parserTypes';
import type { CrxRadarProduct } from '../../types';
/** 54 号厂商扩展 CR 产品解析器：64 字节来源名称参数 + 单个规则栅格。 */
export declare class CrxRadarParser implements IRadarProductParser<CrxRadarProduct> {
    parse(reader: RadarBinaryReader, context: IRadarProductParseContext): CrxRadarProduct;
}

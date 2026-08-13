import type { UpperAirTextSource } from '../common';
import type { MicrowaveTableProduct, MicrowaveXmlProduct } from './types';
export declare const parseMicrowaveTable: (source: UpperAirTextSource) => MicrowaveTableProduct;
export declare const parseMicrowaveXml: (source: UpperAirTextSource) => MicrowaveXmlProduct;

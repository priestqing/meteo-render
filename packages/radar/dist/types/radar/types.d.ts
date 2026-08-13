import type { RasterColorStop, RasterLeafletLayerCreateOptions, RasterRendererCreateOptions, RasterRendererType } from '@meteo-render/raster';
import type { GridData } from '@meteo-render/rendering';
import type { IDiamond131RadarProduct } from './products/diamond131/types';
export declare const RADAR_MAGIC_NUMBER = 1297371986;
export declare enum RadarProductType {
    PPI = 1,
    RHI = 2,
    CAPPI = 3,
    MAX = 4,
    ET = 6,
    VCS = 8,
    LRA = 9,
    LRM = 10,
    SRR = 13,
    SRM = 14,
    CR = 18,
    WER = 20,
    VIL = 23,
    HSR = 24,
    OHP = 25,
    THP = 26,
    STP = 27,
    USP = 28,
    VAD = 31,
    VWP = 32,
    SHEAR = 34,
    SWP = 36,
    STI = 37,
    HI = 38,
    M = 39,
    TVS = 40,
    SS = 41,
    GAGE = 48,
    ML = 50,
    HCL = 51,
    QPE = 52,
    /** ROSE 文档之外、由实际文件结构确认的厂商扩展产品。 */
    EB = 53,
    CRX = 54,
    HMAX = 58
}
export declare enum RadarProjectionType {
    MERCATOR = 1,
    AZIMUTHAL_EQUIDISTANT = 2,
    LAMBERT_AZIMUTHAL_EQUAL_AREA = 13
}
export interface RadarGenericHeader {
    magicNumber: number;
    majorVersion: number;
    minorVersion: number;
    genericType: number;
    productType: number;
}
export interface RadarStation {
    siteCode: string;
    siteName: string;
    latitude: number;
    longitude: number;
    antennaHeight: number;
    groundHeight: number;
    frequency: number;
    beamWidthHori: number;
    beamWidthVert: number;
    rdaVersion: number;
    radarType: number;
}
export interface RadarTask {
    taskName: string;
    taskDescription: string;
    polarizationType: number;
    scanType: number;
    pulseWidth: number;
    scanStartTime: number;
    cutNumber: number;
    horizontalNoise: number;
    verticalNoise: number;
    horizontalCalibration: number;
    verticalCalibration: number;
    horizontalNoiseTemperature: number;
    verticalNoiseTemperature: number;
    zdrCalibration: number;
    phidpCalibration: number;
    ldrCalibration: number;
}
export interface RadarScan {
    processMode: number;
    waveForm: number;
    prf1: number;
    prf2: number;
    dealiasingMode: number;
    azimuth: number;
    elevation: number;
    startAngle: number;
    endAngle: number;
    angularResolution: number;
    scanSpeed: number;
    logResolution: number;
    dopplerResolution: number;
    maximumRange1: number;
    maximumRange2: number;
    startRange: number;
    sample1: number;
    sample2: number;
    phaseMode: number;
    atmosphericLoss: number;
    nyquistSpeed: number;
    momentsMask: bigint;
    momentsSizeMask: bigint;
    miscFilterMask: number;
    sqiThreshold: number;
    sigThreshold: number;
    csrThreshold: number;
    logThreshold: number;
    cpaThreshold: number;
    pmiThreshold: number;
    dpLogThreshold: number;
    dBTMask: number;
    dBZMask: number;
    velocityMask: number;
    spectrumWidthMask: number;
    dpMask: number;
    scanSync: number;
    direction: number;
    groundClutterClassifierType: number;
    groundClutterFilterType: number;
    groundClutterFilterNotchWidth: number;
    groundClutterFilterWindow: number;
}
export interface RadarProductHeader {
    productType: number;
    productName: string;
    productGenerationTime: number;
    scanStartTime: number;
    dataStartTime: number;
    dataEndTime: number;
    projectionType: number;
    dataType1: number;
    dataType2: number;
}
export interface RadarMetadata {
    generic: RadarGenericHeader;
    station: RadarStation;
    task: RadarTask;
    scans: RadarScan[];
    product: RadarProductHeader;
    littleEndian: boolean;
}
export interface RadarGridHeader {
    dataType: number;
    scale: number;
    offset: number;
    binLength: number;
    flags: number;
    rowResolution: number;
    columnResolution: number;
    rowSideLength: number;
    columnSideLength: number;
    maximumData: number;
    rangeOfMaximumValue: number;
    azimuthOfMaximumValue: number;
    minimumData: number;
    rangeOfMinimumValue: number;
    azimuthOfMinimumValue: number;
}
export interface RadarRadialHeader {
    dataType: number;
    scale: number;
    offset: number;
    binLength: number;
    flags: number;
    resolution: number;
    startRange: number;
    maxRange: number;
    numberOfRadials: number;
    maximumValue: number;
    rangeOfMaximumValue: number;
    azimuthOfMaximumValue: number;
    minimumValue: number;
    rangeOfMinimumValue: number;
    azimuthOfMinimumValue: number;
}
export interface RadarRadial {
    /** 径向起始边方位角，单位为度，北为 0，顺时针增加。 */
    startAngle: number;
    angularWidth: number;
    centerAngle: number;
    encodedValues: RadarEncodedValues;
    values: Float32Array;
}
export type RadarEncodedValues = Uint8Array | Uint16Array;
export interface IRadarStormAttribute {
    stormId: number;
    azimuth: number;
    range: number;
    tvsType: number;
    mesocycloneType: number;
    severeHailProbability: number;
    hailProbability: number;
    hailSize: number;
    verticallyIntegratedLiquid: number;
    maximumReflectivity: number;
    maximumReflectivityHeight: number;
    echoTop: number;
    direction: number;
    speed: number;
}
export interface IRadarProjectedGrid {
    projectionType: number;
    centerLatitude: number;
    centerLongitude: number;
    minX: number;
    maxX: number;
    minY: number;
    maxY: number;
}
export interface RadarProductBase {
    metadata: RadarMetadata;
    dataType: number;
    noData: number;
}
export interface RadarBaseMetadata {
    generic: RadarGenericHeader;
    station: RadarStation;
    task: RadarTask;
    scans: RadarScan[];
    littleEndian: boolean;
}
export interface RadarBaseMomentHeader {
    dataType: number;
    scale: number;
    offset: number;
    binLength: number;
    flags: number;
    length: number;
}
export interface RadarBaseMoment {
    header: RadarBaseMomentHeader;
    encodedValues: RadarEncodedValues;
    values: Float32Array;
}
export interface RadarBaseRadialHeader {
    radialState: number;
    spotBlank: number;
    sequenceNumber: number;
    radialNumber: number;
    elevationNumber: number;
    azimuth: number;
    elevation: number;
    seconds: number;
    microseconds: number;
    length: number;
    momentNumber: number;
}
export interface RadarBaseRadial {
    header: RadarBaseRadialHeader;
    moments: RadarBaseMoment[];
}
export interface RadarBaseCut {
    elevationNumber: number;
    elevation: number;
    radials: RadarBaseRadial[];
}
export interface RadarBaseDataProduct {
    kind: 'base-data';
    metadata: RadarBaseMetadata;
    noData: number;
    cuts: RadarBaseCut[];
    radials: RadarBaseRadial[];
}
export interface RadarGridProductBase extends RadarProductBase {
    header: RadarGridHeader;
    encodedValues: RadarEncodedValues;
    projectedGrid: IRadarProjectedGrid;
    /** 供现有经纬度规则栅格渲染器使用的局部近似。 */
    grid: GridData;
}
export interface RadarRadialProductBase extends RadarProductBase {
    header: RadarRadialHeader;
    elevation: number;
    radials: RadarRadial[];
}
export interface RadarRasterBlock {
    header: RadarGridHeader;
    encodedValues: RadarEncodedValues;
    values: Float32Array;
}
export interface RadarRadialBlock {
    header: RadarRadialHeader;
    radials: RadarRadial[];
}
export type RoseProductParameters = Record<string, number | boolean | string | number[]>;
export type RoseProductData = {
    format: 'raster';
    block: RadarRasterBlock;
} | {
    format: 'radial';
    block: RadarRadialBlock;
} | {
    format: 'radial-layers';
    layers: RadarRadialBlock[];
} | {
    format: 'raster-views';
    top: RadarRasterBlock;
    northSouth: RadarRasterBlock;
    eastWest: RadarRasterBlock;
} | {
    format: 'wer-layers';
    layers: Array<{
        elevation: number;
        scanTime: number;
        centerHeight: number;
        block: RadarRasterBlock;
    }>;
} | {
    format: 'records';
    value: unknown;
};
/** 尚未建立专用渲染适配器的 ROSE 标准产品解析结果。 */
export interface RoseRadarProduct extends RadarProductBase {
    kind: 'rose';
    productType: RadarProductType;
    productName: string;
    parameters: RoseProductParameters;
    data: RoseProductData;
}
export interface CrRadarProduct extends RadarGridProductBase {
    kind: 'cr';
    productType: RadarProductType.CR;
    storms: IRadarStormAttribute[];
}
export interface EtRadarParameters {
    reflectivityContour: number;
}
export interface EtRadarProduct extends RadarGridProductBase {
    kind: 'et';
    productType: RadarProductType.ET;
    parameters: EtRadarParameters;
}
export interface EbRadarProduct extends RadarGridProductBase {
    kind: 'eb';
    productType: RadarProductType.EB;
    parameters: Record<string, never>;
}
export interface VilRadarProduct extends RadarGridProductBase {
    kind: 'vil';
    productType: RadarProductType.VIL;
    parameters: Record<string, never>;
}
export interface PpiRadarProduct extends RadarRadialProductBase {
    kind: 'ppi';
    productType: RadarProductType.PPI;
}
export interface PrecipitationRadarParameters {
    baseProduct: number;
    cappiHeight: number;
    cappiFill: boolean;
    rainGageAdjustment: boolean;
}
export interface OhpBiasData {
    meanBias: number;
    errorVariance: number;
    productAdjusted: boolean;
}
export interface OhpAdaptationData {
    minimumReflectivity: number;
    maximumReflectivity: number;
    lowReflectivity: number;
    innerRangeLimit: number;
    outerRangeLimit: number;
    maximumBiScanRange: number;
    minimumEchoArea: number;
    minimumAreaWeightedReflectivity: number;
    maximumAreaReductionPercent: number;
    accumulationCoefficient: number;
    powerCoefficient: number;
    minimumConversionReflectivity: number;
    maximumConversionReflectivity: number;
    minimumBiScanRange: number;
    maximumStormSpeed: number;
    maximumScanInterval: number;
    minimumContinuityArea: number;
    precipitationChangeRate1: number;
    precipitationChangeRate2: number;
    maximumEchoAreaChangeRate: number;
    rangeEffectCutoff: number;
    rangeEffectCoefficient1: number;
    rangeEffectCoefficient2: number;
    rangeEffectCoefficient3: number;
    minimumPrecipitationRate: number;
    maximumPrecipitationRate: number;
    restartTime: number;
    maximumInterpolationTime: number;
    minimumAccumulationTime: number;
    hourlyOutlierLimit: number;
    gageAccumulationEndTime: number;
    maximumScanAccumulation: number;
    maximumHourlyAccumulation: number;
    biasUpdateDelay: number;
    minimumGageRadarPairs: number;
    biasResetValue: number;
    errorVarianceResetValue: number;
    maximumErrorVariance: number;
    gageTimeDifferenceThreshold: number;
    maximumBiasResetTime: number;
    systemNoise: number;
    varianceAdjustmentFactor: number;
    gageDiscardThreshold: number;
    maximumGageAccumulation: number;
    minimumBiasAccumulation: number;
}
export interface OhpRadarProduct extends RadarRadialProductBase {
    kind: 'ohp';
    productType: RadarProductType.OHP;
    parameters: PrecipitationRadarParameters;
    bias: OhpBiasData;
    adaptation: OhpAdaptationData;
}
export interface ThpBiasRecord extends OhpBiasData {
    scanTime: number;
}
export interface ThpRadarParameters extends PrecipitationRadarParameters {
    hours: number;
}
export interface ThpRadarProduct extends RadarRadialProductBase {
    kind: 'thp';
    productType: RadarProductType.THP;
    parameters: ThpRadarParameters;
    continueHours: number;
    biasRecords: ThpBiasRecord[];
}
export interface StiPosition {
    azimuth: number;
    range: number;
    volumeTime: number;
}
export interface StiMotion {
    azimuth: number;
    range: number;
    speed: number;
    direction: number;
    forecastError: number;
    meanForecastError: number;
}
export interface StiTrack {
    motion: StiMotion;
    forecast: StiPosition[];
    history: StiPosition[];
}
export interface StiStormAttribute {
    stormId: number;
    stormType: number;
    numberOfVolumes: number;
    azimuth: number;
    range: number;
    height: number;
    maximumReflectivity: number;
    maximumReflectivityHeight: number;
    verticallyIntegratedLiquid: number;
    numberOfComponents: number;
    firstComponentIndex: number;
    topHeight: number;
    topIndex: number;
    bottomHeight: number;
    bottomIndex: number;
}
export interface StiComponent {
    height: number;
    maximumReflectivity: number;
    nextComponentIndex: number;
}
export interface StiAdaptationData {
    defaultDirection: number;
    defaultSpeed: number;
    maximumVolumeInterval: number;
    pastVolumeCount: number;
    correlationSpeed: number;
    minimumSpeed: number;
    allowableError: number;
    forecastInterval: number;
    forecastCount: number;
    errorInterval: number;
}
export interface StiRadarProduct extends RadarProductBase {
    kind: 'sti';
    productType: RadarProductType.STI;
    parameters: {
        maximumRange: number;
    };
    continuousStormCount: number;
    averageSpeed: number;
    averageDirection: number;
    tracks: StiTrack[];
    storms: StiStormAttribute[];
    components: StiComponent[];
    adaptation: StiAdaptationData;
}
export type RadarGridProduct = CrRadarProduct | EbRadarProduct | EtRadarProduct | VilRadarProduct | IDiamond131RadarProduct;
export type RadarRadialProduct = PpiRadarProduct | OhpRadarProduct | ThpRadarProduct;
export type RadarProduct = RadarBaseDataProduct | RadarGridProduct | RadarRadialProduct | StiRadarProduct | RoseRadarProduct;
export type RadarBufferSource = ArrayBuffer | ArrayBufferView;
export type RadarSource = RadarBufferSource | Blob | string | URL;
export interface RadarParseOptions {
    magicNumber?: number;
    noData?: number;
    fileName?: string;
}
export interface PpiRasterizeOptions {
    /** 输出正方形栅格边长，默认根据最大库数计算并限制为 2048。 */
    size?: number;
    maxSize?: number;
    noData?: number;
}
export interface RadarRendererCreateOptions extends Omit<RasterRendererCreateOptions<RasterColorStop>, 'grid'> {
    product: RadarProduct;
    ppi?: PpiRasterizeOptions;
}
export interface RadarLeafletLayerCreateOptions extends Omit<RasterLeafletLayerCreateOptions, 'grid' | 'source' | 'params'> {
    product: RadarProduct;
    rendererType: RasterRendererType;
    ppi?: PpiRasterizeOptions;
}

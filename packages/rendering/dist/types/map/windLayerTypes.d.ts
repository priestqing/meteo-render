import type { VectorGridData } from '@meteo-render/core';
import type { ClipMode, CoverageOptions } from '../coverage/types';
import type { ColorMode, ColorRange, ColorStopInput } from '../visualization/types';
export interface IWindPointFeature {
    index: number;
    gridX: number;
    gridY: number;
    x: number;
    y: number;
    u: number;
    v: number;
    speed: number;
    direction: number | null;
}
export interface IWindBarbIcon {
    image: CanvasImageSource;
    width?: number;
    height?: number;
    anchorX?: number;
    anchorY?: number;
    rotationOffset?: number;
}
export type WindBarbIconProvider = (point: IWindPointFeature) => IWindBarbIcon | null | undefined;
export interface IWindBarbStyleOptions {
    showBarb?: boolean;
    width?: number;
    height?: number;
    anchorX?: number;
    anchorY?: number;
    rotationOffset?: number;
    opacity?: number;
}
export type WindPointLabelContent = 'none' | 'speed' | 'direction' | 'speed-direction';
export interface IWindPointLabelOptions {
    content?: WindPointLabelContent;
    speedFormatter?: (speed: number, point: IWindPointFeature) => string;
    directionFormatter?: (direction: number | null, point: IWindPointFeature) => string;
    formatter?: (point: IWindPointFeature) => string;
    minZoom?: number;
    collision?: boolean;
    color?: string;
    font?: string;
    offset?: number;
    lineHeight?: number;
}
export interface IWindPointInteractionOptions {
    hover?: boolean;
    click?: boolean;
    selectOnClick?: boolean;
    hitRadius?: number;
    tooltip?: {
        enabled?: boolean;
        formatter?: (point: IWindPointFeature) => string;
    };
}
export interface IWindPointLodOptions {
    mode?: 'auto' | 'manual';
    minSpacing?: number;
    maxPoints?: number;
    levels?: readonly {
        minZoom: number;
        rowStride: number;
        columnStride?: number;
    }[];
}
export interface IWindPointFilterOptions {
    valueRange?: boolean;
    clip?: boolean;
}
export type WindPointCallback = (point: IWindPointFeature) => void;
export interface IWindPointLayerOptions {
    data: VectorGridData;
    getIcon?: WindBarbIconProvider;
    colorRange?: ColorRange;
    opacity?: number;
    lod?: IWindPointLodOptions;
    style?: IWindBarbStyleOptions;
    label?: IWindPointLabelOptions;
    interaction?: IWindPointInteractionOptions;
    clip?: CoverageOptions;
    filter?: IWindPointFilterOptions;
    height?: number;
    name?: string;
    show?: boolean;
    onHover?: WindPointCallback;
    onClick?: WindPointCallback;
}
export interface IWindPointLayerUpdate extends Partial<Omit<IWindPointLayerOptions, 'data'>> {
    data?: VectorGridData;
}
export interface IWindPointDataLayer {
    setData(data: VectorGridData): void | Promise<void>;
    update(options: IWindPointLayerUpdate): void | Promise<void>;
    setOpacity(opacity: number): void;
    setClip(clip: CoverageOptions): void;
    setClipMode(mode: ClipMode): void;
    clearClip(): void;
    setLod(options: IWindPointLodOptions): void;
    setBarbStyle(options: IWindBarbStyleOptions): void;
    setLabelOptions(options: IWindPointLabelOptions): void;
    setInteractionOptions(options: IWindPointInteractionOptions): void;
    setFilterOptions(options: IWindPointFilterOptions): void;
    clearSelection(): void;
    redraw(): void;
    destroy(noDel?: boolean): void;
}
export type WindFlowRendererType = 'cpu' | 'webgl' | 'webgl2' | 'webgpu';
export type WindFlowParticleCount = number | 'auto';
export type WindFlowTrailColorMode = 'single' | 'color-stops';
export interface IWindFlowParticleOptions {
    count?: WindFlowParticleCount;
    density?: number;
    maxCount?: number;
    maxAge?: number;
    timeScale?: number;
    maxFrameDelta?: number;
}
export interface IWindFlowTrailOptions {
    width?: number;
    opacity?: number;
    fadeOpacity?: number;
    colorMode?: WindFlowTrailColorMode;
    color?: string;
    colorStops?: ColorStopInput[];
    colorMappingMode?: ColorMode;
    colorRange?: ColorRange;
}
export interface IWindFlowFilterOptions {
    valueRange?: boolean;
    clip?: boolean;
}
export interface IWindFlowLayerOptions {
    data: VectorGridData;
    rendererType?: WindFlowRendererType;
    opacity?: number;
    particle?: IWindFlowParticleOptions;
    trail?: IWindFlowTrailOptions;
    clip?: CoverageOptions;
    filter?: IWindFlowFilterOptions;
    autoStart?: boolean;
    height?: number;
    name?: string;
    show?: boolean;
}
export interface IWindFlowLayerUpdate extends Partial<Omit<IWindFlowLayerOptions, 'data'>> {
    data?: VectorGridData;
}
export interface IWindFlowDataLayer {
    setData(data: VectorGridData): void | Promise<void>;
    update(options: IWindFlowLayerUpdate): void | Promise<void>;
    setOpacity(opacity: number): void;
    setParticleOptions(options: IWindFlowParticleOptions): void;
    setTrailOptions(options: IWindFlowTrailOptions): void;
    setClip(clip: CoverageOptions): void;
    setClipMode(mode: ClipMode): void;
    clearClip(): void;
    setFilterOptions(options: IWindFlowFilterOptions): void;
    start(): void;
    stop(): void;
    clear(): void;
    redraw(): void;
    isRunning(): boolean;
    destroy(noDel?: boolean): void;
}

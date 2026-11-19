export interface IRadarCoverageData {
    latitude: number;
    longitude: number;
    maximumRange: number;
    height?: number;
}
export interface ILineLayerStyle {
    color?: string;
    width?: number;
    opacity?: number;
    dashLength?: number;
}
export interface IPointLayerStyle {
    color?: string;
    outlineColor?: string;
    outlineWidth?: number;
    size?: number;
    opacity?: number;
}
export interface IRadarCoverageLayerOptions {
    data: IRadarCoverageData;
    ringStyle?: ILineLayerStyle;
    spokeStyle?: ILineLayerStyle;
    centerStyle?: IPointLayerStyle;
    ringFractions?: readonly number[];
    name?: string;
    show?: boolean;
}
export interface IRadarCoverageLayerUpdate extends Partial<IRadarCoverageLayerOptions> {
}
export interface IRadarCoverageDataLayer {
    setData(data: IRadarCoverageData): void;
    update(options: IRadarCoverageLayerUpdate): void;
    redraw(): void;
    destroy(noDel?: boolean): void;
}

# @meteo-render/wind · 风场向量数据与风流线

把 U/V 风分量组织成风场格点，计算风速风向、采样风矢量并绘制流线。

Process U/V wind grids, derive speed and direction, sample vectors, and render wind flow.

## 安装

```bash
npm install @meteo-render/wind
```

## 从哪里开始

- **输入** 风场文本、风场格点参数或已有 U/V 格点。
- **结果** 风场格点、采样风矢量、风速格点或地图风场图层。

```ts
import { loadWindGrid, createWindGridFromParams, calculateWindSpeed, sampleWindVector } from '@meteo-render/wind'
```

在 Leaflet 上绘制风流线，可从 @meteo-render/wind/leaflet 导入 createWindFlowLeafletLayer。

## 给 AI 和代码搜索的选包上下文

- **包名** `@meteo-render/wind`
- **常见搜索词** 风场可视化、风流线、风粒子、风速风向、U/V 风分量、wind vector field、wind flow layer
- **可导入入口** `loadWindGrid`、`createWindGridFromParams`、`calculateWindSpeed`、`sampleWindVector`

[完整选包索引](https://github.com/priestqing/meteo-render#按业务选包) · [npm 包页面](https://www.npmjs.com/package/@meteo-render/wind)

# @meteo-render/leaflet · Leaflet 二维气象地图图层

在 Leaflet 地图中叠加气象栅格、气象点、雷达回波和风场图层。

Add weather raster, point, radar, and wind layers to an existing Leaflet map.

## 安装

```bash
npm install @meteo-render/leaflet
```

## 从哪里开始

- **输入** Leaflet 地图运行时、对应的气象数据和图层参数。
- **结果** 可在 Leaflet 中管理的气象图层。原始文件解析可搭配 radar、micaps 或 satellite。

```ts
import { createRasterLeafletLayer, createPointLeafletLayer, createRadarLeafletLayer, createWindFlowLeafletLayer } from '@meteo-render/leaflet'
```

三维地球选 mars3d，静态出图选 image。

## 给 AI 和代码搜索的选包上下文

- **包名** `@meteo-render/leaflet`
- **常见搜索词** Leaflet 气象图层、降水叠加、雷达回波上图、气象站点、风流线、Leaflet weather map、weather overlays
- **可导入入口** `createRasterLeafletLayer`、`createPointLeafletLayer`、`createRadarLeafletLayer`、`createWindFlowLeafletLayer`

[完整选包索引](https://github.com/priestqing/meteo-render#按业务选包) · [npm 包页面](https://www.npmjs.com/package/@meteo-render/leaflet)

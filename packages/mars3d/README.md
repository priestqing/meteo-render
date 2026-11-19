# @meteo-render/mars3d · Mars3D 气象栅格与体渲染适配

在 Mars3D/Cesium 三维地球上显示气象栅格影像、栅格平面和体数据。

Integrate weather raster imagery, raster planes, and volume rendering with Mars3D and Cesium.

## 安装

```bash
npm install @meteo-render/mars3d
```

## 从哪里开始

- **输入** Mars3D/Cesium 运行时、栅格或三维体数据，以及图层设置。
- **结果** 用于三维地球的栅格影像提供器、栅格平面或体渲染图层。

```ts
import { createMars3dRasterImageryProvider, createMars3dRasterPlaneLayer } from '@meteo-render/mars3d'
```

纯数据剖面计算选 volume，已有二维 Leaflet 项目选 leaflet。

## 给 AI 和代码搜索的选包上下文

- **包名** `@meteo-render/mars3d`
- **常见搜索词** Mars3D 气象图层、Cesium 气象栅格、三维天气地图、气象影像提供器、Mars3D weather layers、Cesium imagery provider
- **可导入入口** `createMars3dRasterImageryProvider`、`createMars3dRasterPlaneLayer`

[完整选包索引](https://github.com/priestqing/meteo-render#按业务选包) · [npm 包页面](https://www.npmjs.com/package/@meteo-render/mars3d)

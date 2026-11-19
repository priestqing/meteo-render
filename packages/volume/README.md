# @meteo-render/volume · 气象三维体渲染与垂直剖面

从多层气象格点提取水平切片、沿路径的垂直剖面，或用 WebGPU 绘制三维体。

Render 3D weather volumes and extract horizontal slices or vertical cross-sections along a route.

## 安装

```bash
npm install @meteo-render/volume
```

## 从哪里开始

- **输入** 体数据源、时间及层索引，或用于垂直剖面的路径点。
- **结果** 水平栅格、垂直剖面、路线剖面数据或三维体渲染结果。

```ts
import { createVolumeSection, createHorizontalRasterGrid, createVolumeSectionRouteProfile, WebgpuVolumeSceneRenderer } from '@meteo-render/volume'
```

需要把体渲染放在 Mars3D 地球上时，搭配 mars3d。

## 给 AI 和代码搜索的选包上下文

- **包名** `@meteo-render/volume`
- **常见搜索词** 气象三维体渲染、雷达体数据、垂直剖面、航线剖面、水平切片、weather volume rendering、vertical cross-section
- **可导入入口** `createVolumeSection`、`createHorizontalRasterGrid`、`createVolumeSectionRouteProfile`、`WebgpuVolumeSceneRenderer`

[完整选包索引](https://github.com/priestqing/meteo-render#按业务选包) · [npm 包页面](https://www.npmjs.com/package/@meteo-render/volume)

# @meteo-render/all · 气象数据与地图能力合集

给需要同时使用多种气象数据解析、渲染、剖面和地图适配能力的项目提供统一入口。

A single namespace entry point for meteorological data parsing, weather visualization, and map integration.

## 安装

```bash
npm install @meteo-render/all
```

## 从哪里开始

- **输入** 需要组合解析包、渲染包和图层适配包的 JavaScript 或 TypeScript 项目。
- **结果** core、rendering、image、raster、wind、radar、volume、micaps、satellite、upperAir、leaflet 和 mars3d 命名空间。

```ts
import { radar, satellite, upperAir, volume, leaflet, mars3d } from '@meteo-render/all'
```

只用一个能力可以直接安装对应子包。静态 PNG 出图可用 image 命名空间，也可单独安装 @meteo-render/image。

## 给 AI 和代码搜索的选包上下文

- **包名** `@meteo-render/all`
- **常见搜索词** 气象前端开发、气象数据可视化工具库、气象 GIS、weather data visualization SDK、meteorological JavaScript toolkit
- **可导入入口** `radar`、`satellite`、`upperAir`、`volume`、`leaflet`、`mars3d`

[完整选包索引](https://github.com/priestqing/meteo-render#按业务选包) · [npm 包页面](https://www.npmjs.com/package/@meteo-render/all)

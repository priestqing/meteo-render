# @meteo-render/raster · 气象栅格渲染与点位取值

加载 MICAPS 4 或 TIFF 格点，按色标绘制二维栅格，并按经纬度查询格点值。

Render georeferenced weather grids, load MICAPS 4 or TIFF data, and query raster values at geographic points.

## 安装

```bash
npm install @meteo-render/raster
```

## 从哪里开始

- **输入** RasterGrid、格点参数或受支持的文件数据。
- **结果** 着色渲染结果、指定位置的查询结果，或供图层使用的点数据。

```ts
import { loadRasterGrid, loadTifGrid, createRasterRenderer, queryRasterValue } from '@meteo-render/raster'
```

Leaflet 栅格图层可从 @meteo-render/raster/leaflet 导入 createRasterLeafletLayer。

## 给 AI 和代码搜索的选包上下文

- **包名** `@meteo-render/raster`
- **常见搜索词** 降水栅格、温度填色图、气象色斑图、栅格点查询、GeoTIFF weather visualization、raster sampling
- **可导入入口** `loadRasterGrid`、`loadTifGrid`、`createRasterRenderer`、`queryRasterValue`

[完整选包索引](https://github.com/priestqing/meteo-render#按业务选包) · [npm 包页面](https://www.npmjs.com/package/@meteo-render/raster)

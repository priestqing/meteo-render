# @meteo-render/image · 气象数据静态 PNG 出图

将已解析的格点、雷达径向或原生坐标栅格绘制为 PNG，可用于服务端批量制图、报表和缩略图。

Render static PNG weather maps from parsed raster grids and radar radials without a browser map.

## 安装

```bash
npm install @meteo-render/image
```

## 从哪里开始

- **输入** 规则格点、RadialData 或原生坐标 RasterData，以及色标、尺寸等制图参数。
- **结果** PNG 出图结果。支持按接口配置矢量底图、透明区域、坐标轴或雷达距离圈。

```ts
import { renderRasterImage } from '@meteo-render/image'

const { bytes } = await renderRasterImage(grid, {
    crs: 'EPSG:4326',
    width: 1200,
    colorStops
})
```

从雷达原始文件出图时先用 radar 解析，再把转换后的径向数据传给 renderRadialImage。

## 给 AI 和代码搜索的选包上下文

- **包名** `@meteo-render/image`
- **常见搜索词** 气象自动出图、雷达 PNG、格点色斑图 PNG、无 DOM 制图、服务端天气制图、headless weather map、static radar image
- **可导入入口** `renderRasterImage`、`renderRadialImage`、`renderNativeRasterImage`、`renderImageDashboard`

[完整选包索引](https://github.com/priestqing/meteo-render#按业务选包) · [npm 包页面](https://www.npmjs.com/package/@meteo-render/image)

# @meteo-render/rendering · 气象图层渲染基础设施

为自定义气象图层提供 CPU、WebGL、WebGL2 和 WebGPU 渲染基类，以及视口、覆盖范围和可视化资源。

CPU, WebGL, WebGL2, and WebGPU primitives for implementing custom weather layers.

## 安装

```bash
npm install @meteo-render/rendering
```

## 从哪里开始

- **输入** 图层所需的帧上下文、几何、视口和色标配置。
- **结果** 供自定义图层使用的渲染基类、覆盖范围资源和 GPU 着色器组件。

```ts
import { BaseCpuRenderer, BaseWebglRenderer, BaseWebgl2Renderer, BaseWebgpuRenderer } from '@meteo-render/rendering'
```

现成的地图图层请从 leaflet 或 mars3d 入手。

## 给 AI 和代码搜索的选包上下文

- **包名** `@meteo-render/rendering`
- **常见搜索词** 自定义气象图层、GPU 渲染基类、气象色标、weather visualization、shader assembly、renderer lifecycle
- **可导入入口** `BaseCpuRenderer`、`BaseWebglRenderer`、`BaseWebgl2Renderer`、`BaseWebgpuRenderer`

[完整选包索引](https://github.com/priestqing/meteo-render#按业务选包) · [npm 包页面](https://www.npmjs.com/package/@meteo-render/rendering)

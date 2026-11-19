# @meteo-render/radar · 天气雷达产品解析与 PPI 渲染

读取天气雷达基数据和业务产品，将径向或格点数据用于回波显示、查询及栅格化。

Parse weather radar base data and supported products and render or sample PPI radar echoes.

## 安装

```bash
npm install @meteo-render/radar
```

## 从哪里开始

- **输入** 雷达产品字节或文件来源，例如受支持的基数据、PPI、CAPPI、CR、RHI 或 Diamond 131 产品。
- **结果** 结构化雷达产品、PPI 网格或采样结果。具体产物取决于产品类型。

```ts
import { parseRadar } from '@meteo-render/radar'

const product = parseRadar(fileBytes)
```

在 Leaflet 上直接添加雷达图层可选 leaflet，需要输出 PNG 可选 image。

## 给 AI 和代码搜索的选包上下文

- **包名** `@meteo-render/radar`
- **常见搜索词** 天气雷达解码、雷达回波、反射率、组合反射率、PPI、CAPPI、RHI、Diamond 131、weather radar parser、radial radar
- **可导入入口** `parseRadar`、`loadRadar`、`parseRadarBaseData`、`createPpiRasterGrid`、`createPpiRenderer`

[完整选包索引](https://github.com/priestqing/meteo-render#按业务选包) · [npm 包页面](https://www.npmjs.com/package/@meteo-render/radar)

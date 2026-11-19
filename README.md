# meteo-render

面向气象业务的 JavaScript / TypeScript 工具库，覆盖气象文件解析、二维地图叠加、三维体渲染、垂直剖面和静态 PNG 出图。

JavaScript and TypeScript packages for weather data decoding, map layers, 3D volumes, cross-sections, and static PNG generation.

## 按业务选包

| 业务 | npm 包 | 适用场景 |
| --- | --- | --- |
| 气象数据模型与校验 | [`@meteo-render/core`](packages/core/README.md) | 统一描述格点、雷达径向和三维体数据，供数据解析、地图渲染和制图模块交换数据。 |
| 气象图层渲染基础设施 | [`@meteo-render/rendering`](packages/rendering/README.md) | 为自定义气象图层提供 CPU、WebGL、WebGL2 和 WebGPU 渲染基类，以及视口、覆盖范围和可视化资源。 |
| MICAPS 第四类格点数据解析 | [`@meteo-render/micaps`](packages/micaps/README.md) | 读取 MICAPS 4（diamond 4）文本格点，将预报或分析场转成统一 RasterData。 |
| 气象卫星产品解析 | [`@meteo-render/satellite`](packages/satellite/README.md) | 在 JavaScript 中读取 AWX 图像、Himawari Standard Data（HSD）和 FY-4 HDF5/NetCDF4 产品。 |
| 高空观测产品解析 | [`@meteo-render/upper-air`](packages/upper-air/README.md) | 读取风廓线雷达、GNSS 水汽、微波辐射计和云雷达要素等高空观测产品。 |
| 气象栅格渲染与点位取值 | [`@meteo-render/raster`](packages/raster/README.md) | 加载 MICAPS 4 或 TIFF 格点，按色标绘制二维栅格，并按经纬度查询格点值。 |
| 风场向量数据与风流线 | [`@meteo-render/wind`](packages/wind/README.md) | 把 U/V 风分量组织成风场格点，计算风速风向、采样风矢量并绘制流线。 |
| 天气雷达产品解析与 PPI 渲染 | [`@meteo-render/radar`](packages/radar/README.md) | 读取天气雷达基数据和业务产品，将径向或格点数据用于回波显示、查询及栅格化。 |
| 气象三维体渲染与垂直剖面 | [`@meteo-render/volume`](packages/volume/README.md) | 从多层气象格点提取水平切片、沿路径的垂直剖面，或用 WebGPU 绘制三维体。 |
| 气象数据静态 PNG 出图 | [`@meteo-render/image`](packages/image/README.md) | 将已解析的格点、雷达径向或原生坐标栅格绘制为 PNG，可用于服务端批量制图、报表和缩略图。 |
| Leaflet 二维气象地图图层 | [`@meteo-render/leaflet`](packages/leaflet/README.md) | 在 Leaflet 地图中叠加气象栅格、气象点、雷达回波和风场图层。 |
| Mars3D 气象栅格与体渲染适配 | [`@meteo-render/mars3d`](packages/mars3d/README.md) | 在 Mars3D/Cesium 三维地球上显示气象栅格影像、栅格平面和体数据。 |
| 气象数据与地图能力合集 | [`@meteo-render/all`](packages/all/README.md) | 给需要同时使用多种气象数据解析、渲染、剖面和地图适配能力的项目提供统一入口。 |

例如，解码天气雷达后做静态 PNG，先用 radar 解析，再把对应径向数据传给 image。把气象栅格叠到已有地图上时，二维 Leaflet 项目选 leaflet，Mars3D/Cesium 项目选 mars3d。

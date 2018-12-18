# ssr-starter

同构渲染（服务端渲染）初始化项目

## 目的

- 解决首屏等待时间空白问题
- 解决客户端渲染不被SEO收录问题

## 使用

本地开发：

```
npm run dev
```

打包：
```
npm run build
```

部署：

先安装[deploy-tool](https://github.com/weihomechen/deploy-tool)到本地

```
npm i @ifun/deploy -g
```

先配置项目的信息，详见[deploy-tool说明](https://github.com/weihomechen/deploy-tool/blob/master/README.md)

```sh
# 部署node项目
deploy -n <name>

# 示例
deploy -n ssr-starter
```

## 技术栈

- node
  - [egg](https://github.com/eggjs/egg)
  - [beidou](https://github.com/alibaba/beidou)
- 前端
  - react
  - antd

## 流程

- 浏览器访问url
- node服务器收到访问请求，根据url从路由清单里找到相应的处理（controller）
- controller处理请求
- 如果需要从API服务器获取数据，调用service发起请求
- 等待请求得到响应，将数据传给render方法，进行服务端渲染
- 服务端渲染，返回组件或页面虚拟DOM渲染出来的html字符串
- 将html字符串返给前端，此时该页面没有样式、没有加载真实DOM
- 客户端会再进行一次渲染，请求页面需要的js文件和样式等静态资源、加载真实DOM、将需要真实DOM的处理（事件监听等）加到页面上，完成最后的渲染


## 主要的目录结构

具体可参考[egg](https://eggjs.org/zh-cn/basics/structure.html)或[beidou](https://github.com/alibaba/beidou/blob/master/packages/beidou-docs/zh/quick-start/directory-struct.md)

```
├── README.md
├── app                         // node端文件
│   ├── common                  // 通用方法
│   ├── controller              // 解析用户的输入，处理后返回相应的结果
│   ├── public                  // 静态资源文件
│   ├── router.js               // 配置 URL 路由规则
│   └── service                 // 和服务端交互得数据层
├── app.js                      // 自定义启动时的初始化工作
├── build                       // 打包后的页面静态资源文件
├── client                      // React客户端文件
│   ├── common                  // 客户端通用方法
│   ├── components              // 通用或无状态组件
│   ├── layout.jsx              // 模版文件
│   └── pages                   // 前端页面文件
├── config                      // 配置文件
│   ├── config.default.js       // 默认配置，会被其他环境的配置覆盖
│   ├── config.dev.js           // dev环境配置
│   ├── config.local.js         // 本地环境配置
│   ├── config.private.js       // 存储私密信息
│   ├── config.prod.js          // 生产环境配置
│   ├── config.stable.js        // 测试环境配置
│   ├── plugin.js               // egg插件配置
│   └── webpack.js              // 自定义的webpack配置
├── logs                        // 日志文件
│   ├── alinode                 // alinode监控信息
│   └── ssr-starter             // 项目内的日志
├── mock                        // mock数据
│   └── app.info.json
├── package.json
└── yarn.lock
```
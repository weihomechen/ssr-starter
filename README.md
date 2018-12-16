# ssr-starter

同构渲染（服务端渲染）初始化项目

## 目的

- 解决首屏等待时间空白问题
- 解决客户端渲染不被SEO收录问题

## 技术栈

- node
  - egg/beidou
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
- 客户端会再进行一次渲染，请求页面需要的js文件和样式等静态资源、将需要真实DOM的处理（事件监听等）加到页面上，完成最后的渲染

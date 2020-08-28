# 项目名称 COVID-19

# 项目框架说明

- vue + vue-route + vuex + element-ui 搭建

# 项目代码仓库 https://github.com/zhibingzhang/COVID-19.git

## 获取源代码以及基础操作命令

1，获取源代码 git clone https://github.com/zhibingzhang/COVID-19.git
2，安装对应的依赖包 进入 COVID-19 执行 yarn install
3, 本地运行开发项目 yarn dev
4, 打包生产项目 yarn build:prod 此时会生成 dist 目录

## 项目主要目录结构说明

1，所有源代码在 src 目录中
2，src/api - 所有页面的异步请求接口
3，src/assets - 存放的静态资源如图片，字体等
4，src/layout - 页面基础骨架及公共模块例如公共头，侧边栏等
5，src/store - vuex 数据存放的地方
6，src/styles - 页面公共基础样式
7，src/utils - 公共的一些方法，例如 cookie, http,auth 等
8，src/views - 所有单页面存放的地方
9，src/App.vue - 入口文件

## 打包后的 dist 生产目录如果访问

1，将 dist 目录放入自己的服务器进行访问
2，本地开启一个服务进行访问
2-1，本地安装一个 node
2-2, 通过 npm 安装一个 anywhere 全局服务包， npm install -g anywhere
2-3, 进入 dist 目录执行 anywhere -p 8888 即可

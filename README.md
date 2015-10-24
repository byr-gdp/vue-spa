# vue-spa

## 简介

基于vue的单页面应用（SPA）脚手架，是对近期学习如何用vue构建大型应用的总结，希望能帮助更多像我一样的初学者。

## 特点

* 基于webpack模块依赖管理
* 基于director.js路由管理
* 基于Grunt自动化构建工具

目录结构如下：

	.
	├── Gruntfile.js
	├── README.md
	├── node_modules/
	├── build
	│   └── build.js
	├── index.html
	├── package.json
	├── public
	├── src
	│   ├── main.js
	│   └── views
	│       ├── app.vue
	│       ├── home.vue
	│       ├── login.vue
	│       ├── setting.vue
	│       └── signup.vue
	└── webpack.config.js

## 用法

`npm install`安装依赖

`npm run dev`使用webpack构建

`python -m SimpleHTTPServer`(默认8000端口) 或者通过`webpack-dev-server`（默认8080端口）开启静态服务器

visit <http://127.0.0.1:8000>或者<http://127.0.0.1:8080>

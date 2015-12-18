# vue-spa

当前使用的 vue 版本为0.12，自1.0发布以后 API 有较大改动，你可以参考 [vue-starter](https://github.com/byr-gdp/vue-starter)。

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
	│   └── bundle.js
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
	
1. `Gruntfile.js`配置了`grunt-contrib-watch`插件，实现监听文件变化并自动刷新重载。
2. `webpack.config.js`入口文件为`./src/main.js`，输出文件为`./build/bundle.js`

## 用法

1. `npm install`安装依赖

2. `npm run dev`使用webpack构建

3. `python -m SimpleHTTPServer`(需要python，默认8000端口) 或者通过`webpack-dev-server`（需要安装`webpack-dev-server`，默认8080端口）开启静态服务器，或者nginx

4. `grunt`，当前`Gruntfile.js`只配置了`grunt-contrib-watch`，实现监听文件变化并自动刷新

5. `webpack --watch`，监视文件变化，并重新生成`bundle.js`

6. 访问 <http://127.0.0.1:8000>或者<http://127.0.0.1:8080>或者nginx配置的其他端口

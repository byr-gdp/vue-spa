// vue、director 相关初始化
var Vue = require('vue');
var Router = require('director').Router;
var router = new Router();
var default_route = 'home';

var app = new Vue(require('./views/app.vue'));

// 路由相关
function toRoute(route) {
    window.location.hash = route;
    app.view.current_route = route;
}
function toDefaultRoute() {
    toRoute(default_route);
}

app.routes.forEach(function (route) {
    router.on(route, function () {
       toRoute(route);
    });
});


router.configure({
    notfound: toDefaultRoute
});

router.init();
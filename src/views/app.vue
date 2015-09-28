<style>
li { list-style: none; float: left; margin-right: 2em;}
</style>
<template>
	<div class="container">
		<ul>
			<li v-repeat="routes" v-on="click: goTo($value)">{{$value}}</li>
		</ul>
		<div v-component="{{view.current_route}}"></div>
	</div>
</template>

<script>
module.exports = {
	el: '#app',
	data: {
		view: {
			current_route:  'home',
		},
		routes: ['home', 'login', 'signup', 'setting'],
	},
	components: {
		home:    require('./home.vue'),
		login:   require('./login.vue'),
		signup:  require('./signup.vue'),
		setting: require('./setting.vue')		
	},
	methods: {
		goTo: function(page) {
			this.view.current_route = page;
			window.location.hash = page;
		}
	}
}
</script>
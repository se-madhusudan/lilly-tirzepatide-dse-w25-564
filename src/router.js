import Vue from 'vue';
import Router from 'vue-router';
import Home from './Views/Home.vue';

Vue.use(Router);

export default new Router({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
			meta: {
				id: 0
			}
		},
	],
	scrollBehavior(to, from, savedPosition) {
		return { x: 0, y: 0 };
	  },
});


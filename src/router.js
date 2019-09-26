import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About.vue'
import Home from '@/components/Home.vue'
import Dynamic from '@/components/Dynamic.vue'
import Message from '@/components/Message.vue'
Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [{
			path: '/',
			redirect: '/home'
		},
		{
			path: '/home',
			component: Home
		},
		{
			path: '/dynamic',
			component: Dynamic
		},
		{
			path: '/about',
			component: About
		},
		{
			path: '/message',
			component: Message
		}
	],
	linkActiveClass:'active'
})

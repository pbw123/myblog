import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About.vue'
import Home from '@/components/Home.vue'
import Dynamic from '@/components/Dynamic.vue'
import Message from '@/components/Message.vue'
import Detail from '@/components/Detail.vue'
import Register from '@/components/Register.vue'
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
			name:'/Home',
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
		},
		{
			path: '/detail',
			name:'/Detail',
			component: Detail
		},
		{
			path: '/register',
			name:'/Register',
			component: Register
		}
		
		
	],
	linkActiveClass:'active',
	scrollBehavior (to, from, savedPosition) {
	  return { x: 0, y: 0 }
	}
})

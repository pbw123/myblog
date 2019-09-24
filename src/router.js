import Vue from 'vue'
import Router from 'vue-router'
import Nav from '@/components/Nav.vue'
import About from '@/components/children/About.vue'
import Home from '@/components/children/Home.vue'
import Dynamic from '@/components/children/Dynamic.vue'
import Message from '@/components/children/Message.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'nav',
      component: Nav,
	  children:[
		  {
			path:'',redirect:'home'  
		  },
		  {
		    path: 'home',component:Home
		  },
		  {
			path:'dynamic',component:Dynamic  
		  },
		  {
			path:'about',component:About
		  },
		  {
			  path:'message',component:Message
		  }
	  ]
    }
  ]
})

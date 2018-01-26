import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue'
import VueRouter from 'vue-router';
import './style/main.css'
//import './touch.min.js'
import axios from 'axios';
import $ from 'n-zepto';
import vueTap from 'v-tap';


Vue.use(VueRouter)
Vue.use(MintUI)
Vue.use(vueTap);

import main from './components/main.vue'

import home from './components/home.vue'
import about from './components/about.vue'
import other from './components/other.vue'
import login from './components/login.vue'
import cute from './components/cute.vue'
import rege from './components/rege.vue'
var routes=[
	{path:'/',component:main,
		'children':[
			{path:'/home',component:home},
			{path:'/about',component:about},
			{path:'/other',component:other},
			{path:'/',redirect:'/home'},
		]
	
},
	{path:'/login',component:login},
	{path:'/rege',component:rege},
	{path:'/cute',component:cute}

	
]

var router=new VueRouter({
	routes:routes
	
})


new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})

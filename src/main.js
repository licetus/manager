import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import ElementUI from 'element-ui'
import '../theme/index.css'
// import store from './vuex/store'
import App from './App.vue'

import Login from './components/login.vue'
import NavMenu from './components/nav-menu.vue'
import Dashboard from './components/dashboard.vue'
import Setting from './components/setting.vue'
import Page1 from './components/nav-menu-1/component-1-1.vue'
import Page2 from './components/nav-menu-1/component-1-2.vue'
import Page3 from './components/nav-menu-1/component-1-3.vue'
import Page4 from './components/nav-menu-2/component-2-1.vue'
import Page5 from './components/nav-menu-2/component-2-2.vue'
import Page6 from './components/nav-menu-2/component-2-3.vue'
import Page7 from './components/nav-menu-3/component-3-1.vue'
import Page8 from './components/nav-menu-3/component-3-2.vue'
import Page9 from './components/nav-menu-3/component-3-3.vue'

Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(VueRouter)

const routes = [
	{
		path: '/login',
		component: Login,
		hidden: true,
	},
	{
		path: '/',
		component: NavMenu,
		name: 'Dashboard',
		children: [
			{ path: '/dashboard', component: Dashboard, name: 'dashboard' },
		],
	},
	{
		path: '/',
		component: NavMenu,
		name: '导航一',
		children: [
			{ path: '/page1', component: Page1, name: 'component-1-1' },
			{ path: '/page2', component: Page2, name: 'component-1-2' },
			{ path: '/page3', component: Page3, name: 'component-1-3' },
		],
	},
	{
		path: '/',
		component: NavMenu,
		name: '导航二',
		children: [
			{ path: '/page4', component: Page4, name: 'component-2-1' },
			{ path: '/page5', component: Page5, name: 'component-2-2' },
			{ path: '/page6', component: Page6, name: 'component-2-3' },
		],
	},
	{
		path: '/',
		component: NavMenu,
		name: '导航三',
		children: [
			{ path: '/page7', component: Page7, name: 'component-3-1' },
			{ path: '/page8', component: Page8, name: 'component-3-2' },
			{ path: '/page9', component: Page9, name: 'component-3-3' },
		],
	},
	{
		path: '/',
		component: NavMenu,
		name: 'Setting',
		children: [
			{ path: '/setting', component: Setting, name: 'setting' },
		],
	},
]

const router = new VueRouter({
	routes,
})

router.beforeEach((to, from, next) => {
	NProgress.start()
	next()
})
router.afterEach(transition => {
	NProgress.done()
})

new Vue({
	el: '#app',
	template: '<App/>',
	router,
	// store,
	components: { App },
	// render: h => h(App),
}).$mount('#app')

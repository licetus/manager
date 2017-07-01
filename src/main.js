import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import ElementUI from 'element-ui'
import '../theme/index.css'
import '../theme/icomoon-font.css'
// import store from './vuex/store'
import App from './App.vue'

import Login from './components/login.vue'
import NavMenu from './components/nav-menu.vue'
import Dashboard from './components/dashboard.vue'
import Setting from './components/setting.vue'
import CustomerInfo from './components/customer/customer-info.vue'
import ProductInfo from './components/product/product-info.vue'
import Notification from './components/notification/notification.vue'
import Bonus from './components/notification/bonus.vue'
import Carousel from './components/notification/carousel.vue'
import Comment from './components/notification/comment.vue'
import Approval from './components/loan/approval.vue'
import Pay from './components/loan/pay.vue'
import Repay from './components/loan/repay.vue'
import Overview from './components/data/overview.vue'
import Transaction from './components/data/transaction.vue'
import CustomerData from './components/data/customer_data.vue'
import ProductData from './components/data/product.vue'

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
		name: '',
		leaf: true,
		iconCls: 'm-icon-dashboard',
		children: [
			{ path: '/dashboard', component: Dashboard, name: 'Dashboard' },
		],
	},
	{
		path: '/',
		component: NavMenu,
		name: '客户管理',
		iconCls: 'm-icon-assistant',
		children: [
			{ path: '/customer-info', component: CustomerInfo, name: '客户信息', iconCls: 'm-icon-redeem' },
		],
	},
	{
		path: '/',
		component: NavMenu,
		name: '产品管理',
		iconCls: 'm-icon-blur_on',
		children: [
			{ path: '/product-info', component: ProductInfo, name: '产品信息', iconCls: 'm-icon-graphic_eq' },
		],
	},
	{
		path: '/',
		component: NavMenu,
		name: '信息管理',
		iconCls: 'm-icon-chat_bubble',
		children: [
			{ path: '/notification', component: Notification, name: '公告信息', iconCls: 'm-icon-assignment_ind' },
			{ path: '/bonus', component: Bonus, name: '活动信息', iconCls: 'm-icon-assignment_turned_in' },
			{ path: '/carousel', component: Carousel, name: '轮播图', iconCls: 'm-icon-fingerprint' },
			{ path: '/comment', component: Comment, name: '用户评论', iconCls: 'm-icon-fingerprint' },
		],
	},
	{
		path: '/',
		component: NavMenu,
		name: '数据统计',
		iconCls: 'm-icon-chat_bubble',
		children: [
			{ path: '/overview', component: Overview, name: '总览', iconCls: 'm-icon-assignment_ind' },
			{ path: '/transaction', component: Transaction, name: '流水', iconCls: 'm-icon-assignment_turned_in' },
			{ path: '/customer-data', component: CustomerData, name: '客户', iconCls: 'm-icon-fingerprint' },
			{ path: '/product-data', component: ProductData, name: '产品', iconCls: 'm-icon-fingerprint' },
		],
	},
	{
		path: '/',
		component: NavMenu,
		name: '',
		leaf: true,
		iconCls: 'm-icon-settings',
		children: [
			{ path: '/setting', component: Setting, name: 'Setting' },
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

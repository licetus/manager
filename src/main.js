import Vue from 'vue'
import ElementUI from 'element-ui'
import '../theme/index.css'
import App from './App.vue'

Vue.use(ElementUI)

new Vue({
	el: '#app',
	render: h => h(App)
})

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let defaultRouters = [{
	path: '/',
	component: require('../pages/Toast.vue')
}];

let routes = Array.prototype.concat.call(defaultRouters);


export default new Router({
  routes
})

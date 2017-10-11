require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

let Navbar = require('./components/Navbar.vue');
let Home = require('./components/Home.vue');
let Profile = require('./components/Profile.vue');
let Contact = require('./components/Contact.vue');

const routes = [
	{ path: '/', component: Home },
	{ path: '/profile', component: Profile },
	{ path: '/contact', component: Contact }
]

const router = new VueRouter({
	routes,
	mode: 'history'
})

const app = new Vue({
    el: '#app',
    components:{
    	Navbar
    },
    router
});

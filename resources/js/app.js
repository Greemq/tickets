/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('home-component', require('./components/App').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


import axios from 'axios';
import './assets/css/style.min.css';

Vue.use(axios, axios);
import router from './router/index';

import store from './store/index';
import dayjs from "dayjs";

Vue.use(dayjs);
router.beforeEach((to, from, next) => {

    if (to.name == 'tickets' && store.state.auth.authorized == false) {
        next({name: 'login'});
    }
    if (to.name == 'login' && store.state.auth.authorized == true) {
        next({name: 'tickets'});
    } else
        next();
});
const app = new Vue({
    router,
    store,
    el: '#app',
});

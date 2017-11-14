require('./vendor');

import Vue from 'vue';
import Moment from 'moment';
import VueRouter from 'vue-router';
import router from './routes';

window.moment = Moment;

window.Vue = Vue;
Vue.use(VueRouter);

require('./views/layouts');

/*
require('./views/layout');
require('./filters/bootstrap');
require('./directives/bootstrap');
require('./components/bootstrap');
require('./vue/bootstrap');
*/

window.EventBus = window.Bus = new Vue();

window.App = new Vue({
    el: '#app',

    router : router,

    data() {
        return {

            user: false,

        }
    },

    created() {
        console.log("App Created");

    },

    methods: {

    }
});

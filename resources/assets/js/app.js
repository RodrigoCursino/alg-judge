import User from "./Model/User";

require('./vendor');

import Vue from 'vue';
import Moment from 'moment';
import VueRouter from 'vue-router';
import router from './routes';

window.moment = Moment;

window.Vue = Vue;
Vue.use(VueRouter)


require('./views/layouts');
require('./vue/bootstrap');
require('./Model/bootstrap');
require('./views/components/bootstrap');

/*
require('./views/layout');
require('./filters/bootstrap');
require('./directives/bootstrap');
*/

window.EventBus = window.Bus = new Vue();

window.App = new Vue({
    el: '#app',

    router : router,

    data() {
        return {

            user: false,
            userModel: new User('Rodrigo', 'rodrigo@cursino.com'),

        }
    },

    created() {
        console.log("App Created");

    },

    methods: {

    }
});

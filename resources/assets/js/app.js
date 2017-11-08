
require('./vendor');

window.Vue = require('vue');

Vue.component('example', require('./vue/components/Example.vue'));

const app = new Vue({
    el: '#app',

    data:{
        message: 'alg-judge',
    }
});

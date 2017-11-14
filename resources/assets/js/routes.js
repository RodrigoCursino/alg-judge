import VueRouter from 'vue-router';


let routes = [

    {

       path:'/',
       component: require('./views/layout/body/Home'),

    },

    {

        path:'/problema',
        component: require('./views/layout/body/Problema'),

    }

];


export default new VueRouter({

    routes,

    linkActiveClass: 'is-active',

});
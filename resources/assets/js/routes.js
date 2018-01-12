import VueRouter from 'vue-router';


let routes = [

    {

        path:'/',
        component: require('./views/layout/body/Home'),

    },

    {

        path:'/problema',
        component: require('./views/layout/body/professor/problema/Problema'),

    },

    {

        path:'/problema/caso-de-teste/:pid',
        component: require('./views/layout/body/professor/problema/caso-de-teste/CasoDeTeste'),
        props: true

    },

];


export default new VueRouter({

    routes,
    //mode: 'history',
    linkActiveClass: 'is-active',

});

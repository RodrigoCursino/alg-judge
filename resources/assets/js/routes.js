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
        component: require('./views/layout/body/professor/problema/caso-de-teste/Caso'),
        props: true

    },

];


export default new VueRouter({

    routes,
    linkActiveClass: 'is-active',

});

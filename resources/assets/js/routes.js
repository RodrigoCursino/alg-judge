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

        path:'/alunos',
        component: require('./views/layout/body/professor/alunos/Alunos'),

    }

];


export default new VueRouter({

    routes,

    linkActiveClass: 'is-active',

});
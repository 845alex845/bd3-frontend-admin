import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/login',
        name: 'login',
        alias: '/',
        component: () =>
            import ( /* webpackChunkName: "LoginPage" */ '../pages/LoginPage.vue')
    },
    {
        path: '/home',
        name: 'home',
        component: () =>
            import ( /* webpackChunkName: "HomePage" */ '../pages/HomePage.vue')
    },
    {
        path: '/request',
        name: 'request',
        component: () =>
            import ( /* webpackChunkName: "RequestPage" */ '../pages/RequestPage.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
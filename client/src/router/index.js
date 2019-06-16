/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-undef */
/* eslint-disable indent */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
    routes: [{
                path: '/',
                name: 'HelloWorld',
                component: HelloWorld
            },
            {
                path: '/register',
                name: 'register',
                component: Register
            }
        ]
        // eslint-disable-next-line eol-last
})
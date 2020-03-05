import Vue from 'vue'
import Router from 'vue-router'
import About from './view/About.vue'

Vue.use(Router)

export default new Router ({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'About',
            components: About
        }
    ]
})
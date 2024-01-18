import { createRouter, createWebHashHistory } from 'vue-router';

import * as pages from '../pages';
import LoginForm from '../components/auth/LoginForm.vue';
import RegisterForm from '../components/auth/RegisterForm.vue';


/**
 * Routes to navigate throught the app
 */
const routes = [
    {
        path: '/',
        component: pages.Home,
    },
    {
        path: '/auth',
        component: pages.Auth,
        children: [
            {
                path: '',
                redirect: '/auth/login',
            },
            {
                name: 'login',
                path: 'login',
                component: LoginForm
            },
            {
                name: 'register',
                path: 'register',
                component: RegisterForm,
            }
        ],
    },
];


export default createRouter({
    history: createWebHashHistory(),
    routes,
});

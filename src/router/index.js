import { createRouter, createWebHashHistory } from 'vue-router';

import * as pages from '../pages';


/**
 * Routes to navigate throught the app
 */
const routes = [
    {
        path: '/',
        component: pages.Home,
    },
    {
        path: '/login',
        component: pages.Auth,
    },
];


export default createRouter({
    history: createWebHashHistory(),
    routes,
});

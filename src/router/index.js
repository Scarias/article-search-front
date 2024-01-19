import { createRouter, createWebHashHistory } from 'vue-router';
import { useCookies } from '@vueuse/integrations/useCookies';

import * as pages from '../pages';
import LoginForm from '../components/auth/LoginForm.vue';
import RegisterForm from '../components/auth/RegisterForm.vue';


/**
 * Routes to navigate throught the app
 */
const routes = [
    {
        path: '/',
        redirect: '/dashboard',
        beforeEnter: (to, _) => {
            const cookies = useCookies([ 'user' ], { autoUpdateDependencies: true });
            const user = cookies.get('user');
            if (!user && to.name !== 'login' ) {
                return { name: 'login' };
            }
        },
        children: [
            {
                path: 'dashboard',
                component: pages.Home,
            },
            {
                path: 'articles',
                component: pages.Articles,
            },
            {
                path: 'articles/new',
                component: pages.CreateArticle,
            }
        ],
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

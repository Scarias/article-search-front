import { defineStore } from 'pinia';
import { useCookies } from '@vueuse/integrations/useCookies';

import { instance } from '../api/instance';

export const useUserStore = defineStore('user', () => {
    const cookies = useCookies([ 'user' ], { autoUpdateDependencies: true });
    const user = cookies.get('user');

    async function login(email, password) {
        if (user !== null && user !== undefined) return;

        try {
            const result = await instance.post('/auth/login', { email, password });
            cookies.set('user', {...result.data.data, token: result.data.token});
            return { state: result.data.status ? 'ok' : 'error', message: result.data.message };
        } catch (e) {
            if (e.code === 'ERR_BAD_REQUEST') {
                return { state: 'error', message: e.response.data.message };
            }
            return { state: 'error', message: 'Ha ocurrido un error inesperado.' };
        }
    }
    async function register(name, email, password) {
        try {
            const result = await instance.post('/auth/register', { name, email, password });
            cookies.set('user', {...result.data.data, token: result.data.token});
            return { state: result.data.status ? 'ok' : 'error', message: result.data.message };
        }
        catch (e) {
            if (e.code === 'ERR_BAD_REQUEST') {
                return { state: 'error', message: e.response.data.message };
            }
            return { state: 'error', message: 'Ha ocurrido un error inesperado.' };
        }
    }

    return { user, login, register };
});

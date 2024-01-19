import axios from 'axios';

export const instance = axios.create({
    baseURL: 'http://127.0.0.1/api',
    timeout: 3000,
    headers: {
        Accept: 'application/json',
    }
});

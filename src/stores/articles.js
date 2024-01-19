import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

import { useUserStore } from './user';
import { instance } from '../api/instance';

export const useArticleStore = defineStore('articles', () => {
    const articles = ref([]);
    const metadata = ref(null);

    async function queryArticles(params = {}, page = 1) {
        const userStore = useUserStore();

        try {
            const result = await instance.get('/v1/articles', {
                headers: { Authorization: `Bearer ${userStore.user.token}` },
                params,
            });
            articles.value = result.data.data;
            metadata.value = result.data.meta;
            return result.data.message;
        } catch(e) {
            return 'Ha ocurrido un error inesperado.';
        }
    }
    async function searchArticles(searchText, page = 1) {
        const normalizedText = searchText
            ? searchText.replaceAll(/[áéíóúÁÉÍÓÚàèìùÀÈÌÒÙäëïöüÄËÏÖÜ]+/g, '_')
            : undefined;

        const userStore = useUserStore();
        
        try {
            const result = await instance.get('/v1/articles', {
                headers: { Authorization: `Bearer ${userStore.user.token}` },
                params: normalizedText
                    ? {
                        'title[like]': `%${normalizedText}%`,
                        'content[like]': `%${normalizedText}%`,
                        mode: 'or', 
                        page,
                    }
                    : { page },
            });
            articles.value = result.data.data;
            metadata.value = result.data.meta;
            return result.data.message;
        }
        catch (e) {
            return 'Ha ocurrido un error inesperado.';
        }
    }

    return { articles, metadata, queryArticles, searchArticles };
});

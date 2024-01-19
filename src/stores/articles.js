import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

import { useUserStore } from './user';
import { instance } from '../api/instance';

export const useArticleStore = defineStore('articles', () => {
    const articles = ref([]);
    const metadata = ref(null);

    const userArticles = computed(() => {
        const userStore = useUserStore();
        return articles.value.filter(article => article.createdBy === userStore.user.id);
    });

    async function searchArticles(searchText) {
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
                    }
                    : undefined,
            });
            if (result.status === 200) {
                articles.value = result.data.data;
                metadata.value = result.data.meta;
            }
            return result.data.message;
        }
        catch (e) {
            return 'Ha ocurrido un error inesperado.';
        }
    }

    return { articles, userArticles, searchArticles };
});

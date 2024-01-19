<script setup>
import { onMounted } from 'vue';
import { useRoute, onBeforeRouteUpdate } from 'vue-router';

import { useArticleStore } from '../stores/articles';
import NavBar from '../components/home/NavBar.vue';
import PageFooter from '../components/home/PageFooter.vue';
import ArticleElement from '../components/home/ArticleElement.vue';

const route = useRoute();
const articleStore = useArticleStore();

onMounted(async () => {
    await articleStore.searchArticles(undefined, route.query.page ?? 1);
})
onBeforeRouteUpdate(async (to, _) => {
    await articleStore.searchArticles(undefined, to.query.page ?? 1);
})
</script>

<template>
    <section class="grid grid-rows-12 grid-cols-1 h-screen">
        <nav-bar title="Artículos" />
        <div v-if="articleStore.articles.length <= 0" class="flex flex-col row-span-10 justify-center items-center py-20 px-4 gap-4">
            <span class="material-symbols-outlined text-primary text-6xl">
                stack
            </span>
            <p class="text-dark text-center">Aún no hay artículos... ¡Sé el primero!</p>
        </div>
        <div v-else class="grid grid-cols-1 row-span-10 overflow-y-scroll justify-items-center p-4 gap-4 md:gap-8 md:p-8">
            <article-element
                v-for="article in articleStore.articles"
                :key="`article-${article.id}`"
                :title="article.title"
                :content="article.content"
                :image="article.image ?? '/src/assets/covers/article_cover.svg'" />
        </div>
        <page-footer />
    </section>
</template>

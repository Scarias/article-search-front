<script setup>
import { useRouter } from 'vue-router';

import { useUserStore } from '../stores/user';
import { useArticleStore } from '../stores/articles';
import NavBar from '../components/home/NavBar.vue';

const router = useRouter();
const userStore = useUserStore();
const articleStore = useArticleStore();

articleStore.queryArticles({
    'createdBy': userStore.user.id,
});
</script>

<template>
    <section class="flex flex-col items-center h-screen">
        <nav-bar title="Neering" />
        <div class="flex flex-col max-w-4xl w-full gap-6 mt-navbar sm:gap-12 p-6 sm:p-12 justify-self-center row-span-11">
            <h1 class="text-dark text-2xl sm:text-4xl font-semibold">Bienvenido/a, {{ userStore.user.name }}</h1>
            <div class="flex justify-center items-center gap-4">
                <button
                    class="text-lg px-4 py-2 rounded bg-secondary text-white active:bg-secondary/75"
                    type="button" @click="() => router.push('/articles')">
                    Ver todos los artículos
                </button>
                <button class="fixed"></button>
            </div>
            <div class="flex flex-col p-6 gap-4 shadow rounded bg-background">
                <h2 class="text-dark text-xl sm:text-3xl">Tus últimos artículos</h2>
                <div
                    v-for="article in articleStore.articles.slice(0,4)"
                    class="p-4 rounded border-2 border-dark/10"
                    :key="`user-article-${article.id}`">
                    <h1 class="text-dark text-lg font-bold">{{ article.title }}</h1>
                    <p class="line-clamp-1">{{ article.content }}</p>
                </div>
            </div>
        </div>
    </section>
    <button
        class="flex justify-center items-center fixed rounded-full shadow-md bg-secondary size-20 bottom-5 right-5 active:bg-secondary/75"
        type="button"
        @click="() => router.push('/articles/new')">
        <span class="material-symbols-outlined text-white text-4xl text-center">add</span>
    </button>
</template>

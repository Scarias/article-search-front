<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import NavBar from '../components/home/NavBar.vue';
import AuthLoading from '../components/auth/AuthLoading.vue';
import { useArticleStore } from '../stores/articles';
import { useModal } from '../composables/modal';

const router = useRouter();

const articles = useArticleStore();
const { message, state, hidden, handleForm, handleClose } = useModal(
    'Registrando...',
    async () => await articles.createArticle(title.value, content.value),
    () => {
        setTimeout(() => router.go(-1), 3000)
    },
);

const title = ref('');
const content = ref('');
</script>

<template>
    <section class="flex flex-col items-center h-screen">
        <nav-bar title="Nuevo artículo" />

        <!-- Create article's form -->
        <form
            class="flex flex-col row-span-11 w-full max-w-4xl gap-1 p-4 mt-navbar"
            action="/api/v1/articles"
            method="post"
            autocomplete="on"
            @submit.prevent="handleForm">
            <!-- Title field -->
            <label for="article-title">Título del artículo</label>
            <input
                class="rounded-md py-1 px-2 mb-2 w-full shadow-inner focus:outline-secondary"
                id="article-title"
                name="article-title"
                type="text"
                placeholder="¿Qué piensas hoy?..."
                v-model="title">
            <!-- Content field -->
            <label for="article-content">Contenido</label>
            <textarea
                class="resize-none rounded-md py-1 px-2 mb-2 w-full shadow-inner focus:outline-secondary"
                rows="15"
                id="article-content"
                name="article-content"
                placeholder="Cuentanos más..."
                v-model="content" />
            <!-- Create user button submit -->
            <button
                class="rounded bg-primary text-white w-fit self-center shadow-sm py-1 px-2 active:brightness-75"
                type="submit">
                Crear artículo
            </button>
        </form>
    </section>

    <auth-loading :hide="hidden" :close="handleClose">
        <div class="flex flex-col justify-center items-center">
            <span v-if="state === 'ok'" class="material-symbols-outlined text-4xl text-green-500 m-5">done</span>
            <span v-else-if="state === 'error'" class="material-symbols-outlined text-4xl text-red-400 m-5">error</span>
            <img v-else class="mx-5 my-7" src="../assets/loading.svg" alt="Loading dots">
            <p>{{ message }}</p>
        </div>
    </auth-loading>
</template>
<script setup>
import { ref } from 'vue';

import NavBar from '../components/home/NavBar.vue';

function handleForm(_) {}

const title = ref('');
const content = ref('');
</script>

<template>
    <section class="flex flex-col items-center h-screen">
        <nav-bar title="Nuevo artículo" />
        <form
            class="flex flex-col row-span-11 w-full max-w-4xl gap-1 p-4 mt-navbar"
            action="/api/v1/articles"
            method="post"
            autocomplete="on"
            @submit.prevent="handleForm">
            <label for="article-title">Título del artículo</label>
            <input
                class="rounded-md py-1 px-2 mb-2 w-full shadow-inner focus:outline-secondary"
                id="article-title"
                name="article-title"
                type="text"
                placeholder="¿Qué piensas hoy?..."
                v-model="title">
            <label for="article-content">Contenido</label>
            <textarea
                class="resize-none rounded-md py-1 px-2 mb-2 w-full shadow-inner focus:outline-secondary"
                rows="15"
                id="article-content"
                name="article-content"
                placeholder="Cuentanos más..."
                v-model="content" />
            <button
                class="rounded bg-primary text-white w-fit self-center shadow-sm py-1 px-2 active:brightness-75"
                type="submit">
                Crear artículo
            </button>
        </form>
    </section>
</template>
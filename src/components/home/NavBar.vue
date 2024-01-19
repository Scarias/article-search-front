<script setup>
import { RouterLink } from 'vue-router';

defineProps({
    title: String,
});
</script>

<template>
    <header class="flex items-center shadow-md bg-background">
        <router-link class="m-3" to="/dashboard">
            <img src="/logo.svg" alt="Neering Logo">
        </router-link>
        <h1 class="text-xl text-dark font-bold mx-2">{{ (title ?? 'neering').toUpperCase() }}</h1>
    </header>
</template>

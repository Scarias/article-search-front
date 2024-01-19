<script setup>
import { RouterLink } from 'vue-router';
import { useArticleStore } from '../../stores/articles';

const articleStore = useArticleStore();
</script>

<template>
    <footer v-if="articleStore.metadata" class="flex flex-wrap justify-center items-center p-2 gap-3 bg-background">
        <router-link
            v-for="(link, i) in articleStore.metadata.links.slice(1,-1)"
            :to="`/articles?page=${i+1}`"
            :class="[link.active ? 'border-dark text-dark' : 'border-primary text-primary font-semibold', 'px-2 py-1 border-2 rounded']">
            {{ link.label }}
        </router-link>
    </footer>
</template>

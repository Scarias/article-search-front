<script setup>
const props = defineProps({
    title: String,
    content: String,
    image: String,
});

const imageSrc = `url(${props.image})`;
</script>

<template>
    <div class="rounded shadow max-w-4xl w-full">
        <div class="flex items-end rounded-t bg-cover bg-center bg-origin-border h-40 lg:h-60" :style="{ backgroundImage: imageSrc }">
            <h2 class="text-lg m-3 p-2 rounded bg-black/70 text-white font-semibold">{{ title ?? 'Título' }}</h2>
        </div>
        <p class="line-clamp-3 m-3 text-dark sm:line-clamp-5">{{ content ?? 'Contenido' }}</p>
    </div>
</template>

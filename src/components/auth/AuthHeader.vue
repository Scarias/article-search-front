<script setup>
const props = defineProps({
    color: String,
    title: String,
    subtitle: String,
});
</script>

<template>
    <div class="flex flex-col justify-center items-center">
        <div v-if="color === 'full'" class="flex flex-col justify-center items-start gap-1">
            <div class="flex items-center gap-2 py-2">
                <img src="/logo.svg" alt="Colorfull Neering Logo">
                <p class="text-5xl text-primary">+</p>
                <span class="material-symbols-outlined text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">forum</span>
            </div>
            <p class="text-dark text-xl font-semibold">{{ props.title ?? 'Bienvenido a Neering' }}</p>
            <p class="text-dark text-lg">{{ props.subtitle ?? 'Ofrecemos servicios de alta gama' }}</p>
        </div>
        <div v-else class="flex flex-col justify-center items-center gap-1">
            <div class="flex justify-center items-center gap-2 p-2">
                <img src="/logo-light.svg" alt="White Neering Logo">
                <p class="text-5xl text-white">+</p>
                <span class="material-symbols-outlined text-5xl text-white">forum</span>
            </div>
            <p class="text-white text-xl font-semibold">{{ props.title ?? 'Bienvenido a Neering' }}</p>
            <p class="text-white text-lg">{{ props.subtitle ?? 'Ofrecemos servicios de alta gama' }}</p>
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: String,
    hide: Boolean,
    close: Function,
});
</script>

<template>
    <div
        :class="[hide ? 'hidden' : 'flex' , 'justify-center items-center fixed inset-0 overflow-auto bg-black/50']"
        @click="close">
        <div class="flex flex-col justify-center w-10/12 bg-white rounded p-3 sm:w-3/5 sm:max-w-lg">
            <h1 v-if="title" class="text-xl">{{ title }}</h1>
            <slot></slot>
            <div class="flex justify-end gap-3">
                <slot name="buttons"></slot>
            </div>
        </div>
    </div>
</template>

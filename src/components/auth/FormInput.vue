<script setup>
defineProps({
    title: String,
    content: String,
    callback: Function,
    name: String,
    type: String,
    placeholder: String,
});
</script>

<template>
    <label :for="name">{{ title }}</label>
    <input
        class="rounded-md py-1 px-2 mb-2 shadow-inner focus:outline-secondary"
        :name="name"
        :type="type"
        :placeholder="placeholder"
        :value="content"
        @input="event => callback(event)">
</template>

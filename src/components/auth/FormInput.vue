<script setup>
defineProps({
    title: String,
    content: String,
    callback: Function,
    name: String,
    type: String,
    placeholder: String,
    autocomplete: String,
});
</script>

<template>
    <label :for="name">{{ title }}</label>
    <input
        class="rounded-md py-1 px-2 mb-2 max-w-full shadow-inner focus:outline-secondary"
        :id="name"
        :name="name"
        :type="type"
        :placeholder="placeholder"
        :value="content"
        :autocomplete="autocomplete"
        @input="event => callback(event)">
</template>

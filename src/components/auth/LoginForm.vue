<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');
</script>

<template>
    <div class="flex flex-col w-80 gap-1 p-2">
        <label for="email-login">Correo electrónico</label>
        <input
            class="rounded-md focus:outline-secondary p-1 mb-2"
            name="email-login"
            type="email"
            placeholder="Tu dirección de correo"
            v-model="email">
        <label for="password-login">Contraseña</label>
        <input
            class="rounded-md focus:outline-secondary p-1"
            name="password-login"
            type="password"
            placeholder="Contraseña de 8 dígitos"
            v-model="password">
    </div>
</template>

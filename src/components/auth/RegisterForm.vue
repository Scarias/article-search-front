<script setup>
import { ref } from 'vue';

import FormInput from './FormInput.vue';
import FormButton from './FormButton.vue';

const name = ref('');
const email = ref('');
const password = ref('');
</script>

<template>
    <div class="flex flex-col w-80 gap-1">
        <form-input
            title="Nombre"
            :content="name"
            :callback="event => name = event.target.value"
            name="name-register"
            type="text" />
        <form-input
            title="Correo electrónico"
            :content="email"
            :callback="event => email = event.target.value"
            name="email-register"
            type="email"
            placeholder="Ej: maximiliano@dominio.cl..." />
        <form-input
            title="Contraseña"
            :content="password"
            :callback="event => password = event.target.value"
            name="email-register"
            type="password"
            placeholder="Contraseña de mínimo 8 carácteres..." />
        <form-button>
            Registrarse
        </form-button>
    </div>
</template>

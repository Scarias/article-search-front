<script setup>
import { ref } from 'vue';

import FormInput from './FormInput.vue';
import FormButton from './FormButton.vue';

const email = ref('');
const password = ref('');
</script>

<template>
    <div class="flex flex-col w-80 gap-1">
        <form-input
            title="Correo electrónico"
            :content="email"
            :callback="event => email = event.target.value"
            name="email-login"
            type="email"
            placeholder="Su correo electrónico..." />
        <form-input
            title="Contraseña"
            :content="password"
            :callback="event => password = event.target.value"
            name="password-login"
            type="password"
            placeholder="Contraseña de ingreso..." />
        <form-button>
            Ingresar
        </form-button>
    </div>
</template>

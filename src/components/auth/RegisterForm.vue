<script setup>
import { ref } from 'vue';
import router from '../../router';

import FormInput from './FormInput.vue';
import FormButton from './FormButton.vue';
import AuthLoading from './AuthLoading.vue';
import { useUserStore } from '../../stores/user';

const userStore = useUserStore();

function handleRegister(_) {
    isRegister.value = true;
    userStore.register(name.value, email.value, password.value)
        .then(result => {
            registerState.value = result.state;
            registerMessage.value = result.message;
            if (result.state === 'ok') {
                router.push('/');
            }
        });
}
function handleClose() {
    if (registerState.value !== 'error') return;
    registerState.value = 'loading';
    registerMessage.value = 'Registrando...';
    isRegister.value = false;
}

const registerMessage = ref('Registrando...');
const registerState = ref('loading');
const isRegister = ref(false);

const name = ref('');
const email = ref('');
const password = ref('');
</script>

<template>
    <auth-loading :hide="!isRegister" :close="handleClose">
        <div class="flex flex-col justify-center items-center">
            <span v-if="registerState === 'ok'" class="material-symbols-outlined text-4xl text-green-500 m-5">done</span>
            <span v-else-if="registerState === 'error'" class="material-symbols-outlined text-4xl text-red-400 m-5">error</span>
            <img v-else class="mx-5 my-7" src="../../assets/loading.svg" alt="Loading dots">
            <p>{{ registerMessage }}</p>
        </div>
    </auth-loading>
    <form class="flex flex-col w-80 gap-1"
        action="/api/auth/register"
        method="post"
        autocomplete="on"
        @submit.prevent="handleRegister">
        <form-input
            title="Nombre"
            :content="name"
            :callback="event => name = event.target.value"
            name="name-register"
            type="text"
            autocomplete="name" />
        <form-input
            title="Correo electrónico"
            :content="email"
            :callback="event => email = event.target.value"
            name="email-register"
            type="email"
            placeholder="Ej: maximiliano@dominio.cl..."
            autocomplete="email" />
        <form-input
            title="Contraseña"
            :content="password"
            :callback="event => password = event.target.value"
            name="password-register"
            type="password"
            placeholder="Contraseña de mínimo 8 carácteres..."
            autocomplete="new-password" />
        <form-button>
            Registrarse
        </form-button>
    </form>
</template>

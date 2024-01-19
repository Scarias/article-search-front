<script setup>
import { ref } from 'vue';
import router from '../../router';

import { useUserStore } from '../../stores/user';
import AuthLoading from './AuthLoading.vue';
import FormInput from './FormInput.vue';
import FormButton from './FormButton.vue';

const userStore = useUserStore();

function handleLogin(_) {
    isLogin.value = true;
    userStore.login(email.value, password.value)
        .then(result => {
            loginState.value = result.state;
            loginMessage.value = result.message;
            if (result.state === 'ok') {
                router.push('/');
            }
        });
}
function handleClose() {
    if (loginState.value !== 'error') return;
    loginState.value = 'loading';
    loginMessage.value = 'Ingresando...';
    isLogin.value = false;
}

const loginMessage = ref('Ingresando...');
const loginState = ref('loading');
const isLogin = ref(false);

const email = ref('');
const password = ref('');
</script>

<template>
    <!-- Login modal: show state of the login and other errors -->
    <!-- close is a callback for changing variable, and, in consecuence, close the modal -->
    <auth-loading :hide="!isLogin" :close="handleClose">
        <div class="flex flex-col justify-center items-center">
            <span v-if="loginState === 'ok'" class="material-symbols-outlined text-4xl text-green-500 m-5">done</span>
            <span v-else-if="loginState === 'error'" class="material-symbols-outlined text-4xl text-red-400 m-5">error</span>
            <img v-else class="mx-5 my-7" src="../../assets/loading.svg" alt="Loading dots">
            <p>{{ loginMessage }}</p>
        </div>
    </auth-loading>

    <!-- Login form, using form-input component for  -->
    <form class="flex flex-col w-full gap-1"
        action="/api/auth/login"
        method="post"
        autocomplete="on"
        @submit.prevent="handleLogin">
        <form-input
            title="Correo electrónico"
            :content="email"
            :callback="event => email = event.target.value"
            name="email-login"
            type="email"
            placeholder="Su correo electrónico..."
            autocomplete="email" />
        <form-input
            title="Contraseña"
            :content="password"
            :callback="event => password = event.target.value"
            name="password-login"
            type="password"
            placeholder="Contraseña de ingreso..."
            autocomplete="current-password" />
        <form-button>
            Ingresar
        </form-button>
    </form>
</template>

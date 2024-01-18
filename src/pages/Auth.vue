<script setup>
import AuthHeader from '../components/auth/AuthHeader.vue';
import LoginForm from '../components/auth/LoginForm.vue';
</script>

<template>
    <div class="flex flex-column h-screen w-full sm:flex-row">
        <div class="login-cover flex justify-center items-center h-2/5 w-full bg-left bg-cover bg-no-repeat sm:h-full sm:w-1/3">
            <auth-header class="sm:hidden" />
        </div>
        <div class="flex flex-col justify-center items-center grow h-full">
            <div class="flex flex-col justify-center items-start gap-5">
                <auth-header class="hidden sm:flex" color="full" />
                <login-form />
            </div>
        </div>
    </div>
</template>

<style scoped>
.login-cover {
    background-image: url("../assets/covers/login.png");
}
</style>

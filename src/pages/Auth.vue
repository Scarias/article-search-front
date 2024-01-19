<script setup>
import AuthHeader from '../components/auth/AuthHeader.vue';
import AuthContent from '../components/auth/AuthContent.vue';
</script>

<template>
    <div class="flex flex-col items-center h-screen w-full sm:flex-row">
        <div class="login-cover flex justify-center items-center h-2/5 w-full bg-left bg-cover bg-no-repeat sm:h-full sm:w-1/3">
            <auth-header class="sm:hidden" />
        </div>
        <div class="flex flex-col justify-center items-center grow h-full w-11/12">
            <div class="flex flex-col justify-center items-start gap-5 w-11/12 sm:w-auto">
                <auth-header class="hidden sm:flex" color="full" />
                <auth-content />
            </div>
        </div>
    </div>
</template>

<style scoped>
.login-cover {
    background-image: url("../assets/covers/login.png");
}
</style>

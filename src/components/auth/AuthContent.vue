<script setup>
import { RouterView, RouterLink, useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
    <div class="flex items-center gap-3 p-1">
        <router-link
            :class="['font-semibold border-b-2 border-transparent p-1', route.name !== 'login' ? 'opacity-65' : 'border-b-primary']"
            to="/auth/login">
            Ingreso
        </router-link>
        <router-link
            :class="['font-semibold border-b-2 border-transparent p-1', route.name !== 'register' ? 'opacity-65' : 'border-b-primary']"
            to="/auth/register">
            Registro
        </router-link>
    </div>
    <router-view></router-view>
</template>

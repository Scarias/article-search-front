import { ref, onMounted, onUnmounted } from 'vue';

export function useLocalStorage(key) {
    const user = ref(null);

    onMounted(() => user.value = window.localStorage.getItem(key) ? JSON.parse(window.localStorage.getItem(key)) : null);
    onUnmounted(() => { if (user.value) window.localStorage.setItem(key, JSON.stringify(user.value)) } );

    return user;
}

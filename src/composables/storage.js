import { ref, onMounted, onUnmounted } from 'vue';

export function useLocalStorage(key) {
    const user = ref(null);

    onMounted(() => user.value = localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : null);
    onUnmounted(() => { if (user.value) localStorage.setItem(key, JSON.stringify(user.value)) } );

    return user;
}

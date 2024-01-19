import { ref } from 'vue';

export function useModal(
    initialMessage = '',
    dbcallback = async () => ({ state: '', message: '' }),
    endcallback = () => {},
) {

    const message = ref(initialMessage);
    const state = ref('loading');
    const hidden = ref(true);

    async function handleForm(_) {
        hidden.value = false;
        const result = await dbcallback();
        state.value = result.state;
        message.value = result.message;

        if (result.state === 'ok') endcallback();
    }
    function handleClose() {
        if (state.value !== 'error') return;
        state.value = 'loading';
        hidden.value = true;
    }

    return { message, state, hidden, handleForm, handleClose };

}
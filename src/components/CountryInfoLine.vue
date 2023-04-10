<script setup>
    import { computed } from '@vue/reactivity';
    import { useStore } from 'vuex';

    defineProps({
        keyTitle: String, 
        value: String | Number
    })

    const store = useStore();
    const isThemeDark = computed(() => store.state.isThemeDark)
</script>

<template>
    <span
        class="d-block text-subtitle-1" 
        :class="{'text-grey-lighten-2': isThemeDark, '': !isThemeDark}"  
    >
        <span 
            class="font-weight-bold"
            :class="{'text-white': isThemeDark, 'text-black': !isThemeDark}"
        >
            {{ keyTitle }}: 
        </span>
    {{ value }}
</span>
</template>
<script setup>
import Nav from './components/Nav.vue';
import { useStore } from 'vuex';
import { computed } from '@vue/reactivity';
const store = useStore();
const isThemeDark =  computed(() => store.state.isThemeDark)
</script>

<template>
  <v-app :class="{'bg-blue-grey-darken-4': isThemeDark, 'bg-grey-lighten-5': !isThemeDark}">
    <Nav />
    <router-view :key="$route.fullPath"/>
  </v-app>
</template>

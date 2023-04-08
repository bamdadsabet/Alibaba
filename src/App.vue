<script setup>
import HelloWorld from './components/HomePage.vue'
import DetailPage from './components/DetailPage.vue';
import Nav from './components/Nav.vue';
</script>

<template>
  <v-app class="bg-grey-lighten-5 pt-12 mt-12">
    <Nav />
    <HelloWorld />
    <!-- <DetailPage /> -->
  </v-app>
</template>

<style scoped>
</style>

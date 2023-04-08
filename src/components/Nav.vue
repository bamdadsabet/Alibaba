<script setup>
</script>

<template>
    <v-app-bar elevation="1" class="px-8">
        <v-app-bar-title>
           <h3>Where in the world?</h3>
        </v-app-bar-title>
        <template v-slot:append>
            <v-btn>
                <v-icon
                 size="large"
                 color="green-darken-2"
                 icon="mdi-domain"
                />
                Dark Mode
            </v-btn>
        </template>
    </v-app-bar>
</template>

<style scoped>
</style>

<script setup>
    import { computed } from 'vue';
    import { useStore } from 'vuex'
    const store = useStore();
    const isThemeDark = computed(() => store.state.isThemeDark);
    const toggleTheme = () => {
        store.dispatch('toggleTheme')
    }
</script>

<template>
    <!-- <v-app-bar elevation="1" class="px-8"> -->
    <v-app-bar elevation="1" class="px-lg-8 px-md-4 px-0" :class="{'bg-blue-grey-darken-3': isThemeDark}">
        <v-app-bar-title>
           <h5 class="">Where in the world?</h5>
        </v-app-bar-title>
        <template v-slot:append>
            <v-btn @click="toggleTheme()">
                <v-icon
                @click="toggleTheme"
                 size="25"
                 class="pr-5"
                 :icon="isThemeDark ? 'mdi-white-balance-sunny' : 'mdi-weather-night'"
                />
                Dark Mode
            </v-btn>
        </template>
    </v-app-bar>
</template>

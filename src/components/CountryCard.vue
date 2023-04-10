<script setup>
  import { computed } from '@vue/reactivity';
  import { useStore } from 'vuex';
  import CountryInfoLine from './CountryInfoLine.vue';
  
  import { useRouter } from 'vue-router';

    const router = useRouter()

  defineProps({
    name: String,
    flag: String,
    imgAlt: String,
    detail: Object,
  });

  const store = useStore();
  const isThemeDark = computed(() => store.state.isThemeDark)
  
</script>

<template>
    <v-card
      class="mx-auto my-12 rounded-lg"
      :class="{'bg-blue-grey-darken-3': isThemeDark}"
      width="335"
      @click="()=>{router.push(`/country/${name}`)}"

    >
      <v-img
        cover
        height="200"
        aspect-ratio="4/3"
        :src="flag"
        :lazy-src="flag"
      />
      <v-card-item class="pt-3 pl-6 pb-8">

        <!-- name -->
        <v-card-title class="mb-2">
            <h4>{{ name }}</h4>
        </v-card-title>

        <!-- details -->
        <section>
          <CountryInfoLine
            v-for="(value, key, index) in detail"
            :key="index" 
            :keyTitle="key"
            :value="value"
          />
        </section>
      </v-card-item>
    </v-card>
  </template>
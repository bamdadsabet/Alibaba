<script setup>
</script>

<template>
    <v-card
      :loading="loading"
      class="mx-auto my-12 rounded-lg curser-poine"
      width="335"
    >
      <template v-slot:loader="{ isActive }">
        <v-progress-linear
          :active="isActive"
          color="deep-purple"
          height="4"
          indeterminate
        ></v-progress-linear>
      </template>
      <v-img
        cover
        height="190"
        aspect-ratio="4/3"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
      />
      <v-card-item class="pt-3 pl-6 pb-8">
        <v-card-title class="mb-2">
            <h3>Germany</h3>
        </v-card-title>
            <span></span>
        <section>
            <span class="d-block text-subtitle-1 text-grey-darken-2">
                <span class="font-weight-bold text-black">Population: </span>81,770,900
            </span>
            <span class="d-block text-subtitle-1 text-grey-darken-2">
                <span class="font-weight-bold text-black">Region: </span>Europe
            </span>
            <span class="d-block text-subtitle-1 text-grey-darken-2">
                <span class="font-weight-bold text-black">Capital: </span>Berlin
            </span>
        </section>
      </v-card-item>
    </v-card>
  </template>

<style>
</style>
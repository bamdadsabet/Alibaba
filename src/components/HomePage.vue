<script setup>
  import CountryCard from './CountryCard.vue'
</script>

<template>
  <v-container>
    <v-row class="d-flex justify-space-between px-md-12 px-0">
      <v-col lg="5" md="7" cols="12">
        <v-text-field 
          label="Search for a country..." 
          variant="solo" 
        />
      </v-col>
      <v-col lg="2" md="4" cols="5">
        <v-combobox
          label="Filter by Region"
          :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
          variant="solo"
        />
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center my-0">
      <v-col v-for="i in (0, 8)" :key="i" class="py-0">
        <CountryCard />
      </v-col>
    </v-row>
  </v-container>
</template>


<style scoped>
</style>

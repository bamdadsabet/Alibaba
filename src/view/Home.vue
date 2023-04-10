<script setup>
    import { onBeforeMount, ref, computed } from 'vue';
    import CountryCard from '../components/CountryCard.vue';
    import { useStore } from 'vuex';
    import { sortCards, filterByRegion, searchByName } from '../utils';
    import {getAllCountries} from '../services'

    const store = useStore();
    const isThemeDark = computed(() => store.state.isThemeDark)

    const countries = ref([]);
    const sortValue = ref(null)
    const regionFilter = ref(null);
    const search = ref(null);
    const isLoading = ref(true);
    const shownCountries = computed(() => {
        let values = [...countries.value] 
        values = searchByName(search.value, values)
        values = sortCards(sortValue.value ,values)
        values = filterByRegion(regionFilter.value, values);
        return values;
    });
  onBeforeMount(() => {
    getAllCountries().then(res => {
        isLoading.value = false;
        countries.value = res;
    });
  })
</script>

<template>

  <v-container >
    <div class="d-flex justify-center align-center mt-16 pt-16" v-if="isLoading">
    <v-progress-circular
      indeterminate
      color="blue-grey-darken-1"
      size="150"
    />
    </div>
    <template v-else>
        <!-- search and filter inputs -->
        <v-row class="d-flex justify-start px-md-12 px-0 mt-16 pt-6">
        <v-col lg="5" md="7" cols="12">
            <v-text-field 
            label="Search for a country..." 
            variant="solo"
            v-model="search"  
            :bg-color="isThemeDark ? '#37474F' : ''"
            :color="isThemeDark ? 'white' : ''"
            :theme="isThemeDark ? 'dark' : 'light'"
            clearable
            prepend-inner-icon="mdi-magnify"
            hide-details
            />
        </v-col>
        <v-col lg="2" offset-lg="3" md="5" offset-md="0" cols="8" offset="0">
            <v-select
            label="Sort By"
            :items="['Population-ASC', 'Population-DES', 'Name-ASC', 'Name-DES']"
            variant="solo"
            v-model="sortValue"
            :bg-color="isThemeDark ? '#37474F' : ''"
            :color="isThemeDark ? 'white' : ''"
            :theme="isThemeDark ? 'dark' : 'light'"
            clearable
            hide-details
            >
            </v-select>
        </v-col>
        <v-col lg="2" md="12" cols="8" class="d-flex justify-center">
            <v-select
            label="Filter by Region"
            :items="['Africa', 'America', 'Asia', 'Europe', 'Oceania']"
            variant="solo"
            v-model="regionFilter"
            :bg-color="isThemeDark ? '#37474F' : ''"
            :color="isThemeDark ? 'white' : ''"
            :theme="isThemeDark ? 'dark' : 'light'"
            clearable
            hide-details
            >
            </v-select>
        </v-col>
        </v-row>

        <!-- countries -->
        <v-row class="my-0">
        <v-col v-for="(country, index) in shownCountries" :key="index" class="py-0">
            <v-lazy
            :min-height="200"
            :options="{'threshold': 0.5}"
            transition="fade-transition"
            >
            <CountryCard 
                :name="country.name.common" 
                :flag="country.flags.png"
                :imgAlt="country.flags.alt" 
                :detail="{
                population:country.population.toLocaleString().replaceAll(',', ', '),
                region:country.region, 
                capital:country.capital[0]
                }"
                :isThemeDark="true"
            />
            </v-lazy>
            
        </v-col>
        </v-row>
    </template>
  </v-container>
</template>
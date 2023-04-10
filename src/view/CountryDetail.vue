<script setup>
    import CountryInfoLine from '../components/CountryInfoLine.vue';
    import { onBeforeMount, ref } from 'vue';
    import { getCountryData } from '../services'
    import { computed } from 'vue';
    import { useStore } from 'vuex';
    import { useRoute } from 'vue-router';

    const router = useRoute()

    const countryData = ref([]);
    const isLoading = ref(true)

    const store = useStore();
    const isThemeDark = computed(() => store.state.isThemeDark)

    const countryName = router.params.name;

    onBeforeMount(() => {
        getCountryData(countryName).then(res => {
            countryData.value = res;
            isLoading.value = false;
        });
    });
</script>

<template>
    <div>     
        <div class="d-flex justify-center align-center mt-16 pt-16" v-if="isLoading">
        <v-progress-circular
        indeterminate
        color="blue-grey-darken-1"
        size="150"
        />
        </div>
        <v-container v-else>

            <!-- back btn -->
            <v-row class="mt-16 pt-16 mb-8 pl-3">
                <v-btn 
                    width="150px" 
                    height="45px" 
                    class="px-8 font-weight-bold"
                    :class="{'bg-blue-grey-darken-3': isThemeDark}"
                    @click="()=>{let self = this; self.$router.push('/') }"
                >
                    <v-icon
                        size="large"
                        class="pr-4"
                        icon="mdi-keyboard-backspace"
                    />
                    Back
                </v-btn>
            </v-row>

            <!-- details -->
            <v-row class="pt-10">

                <!-- flag img -->
                <v-col class="d-lg-block d-flex justify-center" lg="6" cols="12"> 
                    <v-img
                        max-width="750px"
                        min-width="300px"
                        aspect-ratio="4/3"
                        :src="countryData.flag.svg"
                        :alt="countryData.flag.alt"
                        :lazy-src="countryData.flag.png"
                    />
                </v-col>
                <v-col class="ma-sm-auto" lg="6" md="10" sm="11" cols="12" offset-lg="0" offset-md="1" offset="0">

                    <!-- title -->
                    <h1 class="mb-10">{{ countryName }}</h1>

                    <!-- info -->
                    <v-row>
                        <v-col v-for="(details, index) in countryData.detail" sm="6" cols="12" :key="index">
                            <CountryInfoLine
                                v-for="(detail , indx) in details" 
                                :key="indx"
                                :keyTitle="detail[0]"
                                :value="detail[1]"

                                />
                        </v-col>
                    </v-row>
                    
                    <!-- border countries -->
                    <section class="mt-12 d-flex flex-wrap" v-if="countryData.borders.length > 0">
                        <span class="pt-4 pr-4 font-weight-black">Border Countries: </span>
                        <div class="mt-md-0 mt-4">
                            <v-btn 
                                v-for="(country, index) in countryData.borders"
                                :key="index"
                                min-width="120" 
                                class="mr-2 my-2"
                                :class="{'bg-blue-grey-darken-3': isThemeDark}" 
                                @click="()=>{let self = this; self.$router.push(`/country/${country}`)}"
                            >

                                {{ country }}
                            </v-btn>
                        </div>
                    </section>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
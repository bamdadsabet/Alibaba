<script setup>
</script>

<template>
    <v-container>

        <!-- back btn -->
        <v-row class="mt-10 mb-8 pl-3">
            <v-btn 
                width="150px" 
                height="45px" 
                class="px-8 font-weight-bold"
            >
                Back
            </v-btn>
        </v-row>
        <v-row class="pt-10">

            <!-- flag img -->
            <v-col class="d-lg-block d-flex justify-center" lg="6" cols="12"> 
                <v-img
                    cover
                    max-width="750px"
                    min-width="300px"
                    aspect-ratio="4/3"
                    src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                />
            </v-col>
            <v-col class="ma-sm-auto" lg="6" md="10" sm="11" cols="12" offset-lg="0" offset-md="1" offset="0">

                <!-- title -->
                <h1 class="mb-10">Belguim</h1>

                <!-- info -->
                <v-row>
                    <v-col sm="6" cols="12">
                        <span class="d-block text-subtitle-1 mb-1 text-grey-darken-2">
                            <span class="font-weight-bold text-black">Native Name: </span>Berlin
                        </span>
                        <span class="d-block text-subtitle-1 mb-1 text-grey-darken-2">
                            <span class="font-weight-bold text-black">Population: </span>11,319,511
                        </span>
                        <span class="d-block text-subtitle-1 mb-1 text-grey-darken-2">
                            <span class="font-weight-bold text-black">Region: </span>Europe
                        </span>
                        <span class="d-block text-subtitle-1 mb-1 text-grey-darken-2">
                            <span class="font-weight-bold text-black">Sub Region: </span>Western Europe
                        </span>
                        <span class="d-block text-subtitle-1 mb-1 text-grey-darken-2">
                            <span class="font-weight-bold text-black">Capital: </span>Berlin
                        </span>
                    </v-col>
                    <v-col sm="6" cols="12"> 
                        <span class="d-block text-subtitle-1 mb-1 text-grey-darken-2">
                            <span class="font-weight-bold text-black">Top Level Domain: </span>.be
                        </span>
                        <span class="d-block text-subtitle-1 mb-1 text-grey-darken-2">
                            <span class="font-weight-bold text-black">Currencies: </span>Euro
                        </span>
                        <span class="d-block text-subtitle-1 mb-1 text-grey-darken-2">
                            <span class="font-weight-bold text-black">Languages: </span>Dutch, French, German
                        </span>
                    </v-col>
                </v-row>
                
                <!-- border countries -->
                <section class="mt-12 d-flex flex-wrap">
                    <span class="pt-2 pr-4 font-weight-black">Border Countries: </span>
                    <div class="mt-md-0 mt-4">
                        <v-btn min-width="120" class="mr-2">France</v-btn>
                        <v-btn min-width="120" class="mr-2">Germany</v-btn>
                        <v-btn min-width="120" >Netherlands</v-btn>
                    </div>
                </section>
            </v-col>
        </v-row>
    </v-container>
</template>

<style>

</style>
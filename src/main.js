import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';


import { fa } from "vuetify/iconsets/fa";
import { aliases, mdi } from "vuetify/lib/iconsets/mdi";
import "@mdi/font/css/materialdesignicons.css";
import "@fortawesome/fontawesome-free/css/all.css";


import router from './router';

import VueAxios from 'vue-axios';
import axios from 'axios';

import store from './store';

store.dispatch('initStore');

const vuetify = createVuetify({
    icons: {
        defaultSet: "mdi",
        aliases,
        sets: {
          mdi,
          fa,
        },
    },
    components,
    directives,
})

createApp(App)
.use(store)
.use(router)
.use(vuetify)
.use(VueAxios, axios)
.mount('#app')

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import VueAxios from 'vue-axios'

const vuetify = createVuetify({
    components,
    directives,
})

createApp(App).use(vuetify).use(VueAxios, axios).mount('#app')

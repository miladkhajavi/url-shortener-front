import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import store from "./store"
import './assets/main.css'
import './assets/css/cards/style.css'
import './assets/css/style.css'

import PrimeVue from 'primevue/config';
import Card from 'primevue/card';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import ToastService from 'primevue/toastservice';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import { store } from './store'


const app = createApp(App)

app.use(PrimeVue);
app.use(ToastService);
app.use(router)
app.use(store)

app.component("V-Card",Card)
app.component("V-Button",Button)
app.component("V-Input-Text",InputText)

app.mount('#app')

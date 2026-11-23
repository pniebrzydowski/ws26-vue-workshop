import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { router } from './routing/router.ts';
import { pinia } from './state/pinia.ts';

const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount('#app')

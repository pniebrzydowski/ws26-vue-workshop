import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { router } from './routing/router.ts';
import { pinia } from './state/pinia.ts';
import { VueQueryPlugin } from '@tanstack/vue-query';

const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(VueQueryPlugin);
app.mount('#app')

import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'

// importo il vue-router
import { router } from './router';

// createApp(App).mount('#app');

createApp(App).use(router).mount('#app');


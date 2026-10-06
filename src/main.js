import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import { initMetaPixel } from './utils/metaPixel';

// Píxel de Meta: solo carga si existe VITE_META_PIXEL_ID (ver src/utils/metaPixel.js)
initMetaPixel();

const app = createApp(App);
app.use(router);
app.mount('#app');

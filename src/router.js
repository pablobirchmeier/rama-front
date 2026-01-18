import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './components/Home.vue';
import Planes from './components/Planes.vue';
import Horarios from './components/Horarios.vue';

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/planes', name: 'planes', component: Planes },
    { path: '/horarios', name: 'horarios', component: Horarios },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;

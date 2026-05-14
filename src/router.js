import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './components/Home.vue';
import Planes from './components/Planes.vue';
import Horarios from './components/Horarios.vue';
import ClaseEnDesarrollo from './components/ClaseEnDesarrollo.vue';

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/planes', name: 'planes', component: Planes },
    { path: '/horarios', name: 'horarios', component: Horarios },
    { path: '/clases/muay-thai-formativo', name: 'muay-thai-formativo', component: ClaseEnDesarrollo, meta: { nombre: 'Muay Thai Formativo' } },
    { path: '/clases/muay-thai-combat', name: 'muay-thai-combat', component: ClaseEnDesarrollo, meta: { nombre: 'Muay Thai Combat' } },
    { path: '/clases/brazilian-jiujitsu', name: 'brazilian-jiujitsu', component: ClaseEnDesarrollo, meta: { nombre: 'Brazilian JiuJitsu' } },
    { path: '/clases/cross-training', name: 'cross-training', component: ClaseEnDesarrollo, meta: { nombre: 'Cross Training' } },
    { path: '/clases/pad-holder', name: 'pad-holder', component: ClaseEnDesarrollo, meta: { nombre: 'Pad Holder' } },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;

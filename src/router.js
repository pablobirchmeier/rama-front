import { createRouter, createWebHashHistory } from 'vue-router';

// Code splitting: cada ruta se descarga en un chunk separado bajo demanda,
// así el bundle inicial es mucho más liviano (solo Home se carga al entrar).
const Home = () => import('./views/Home.vue');
const Planes = () => import('./views/Planes.vue');
const Horarios = () => import('./views/Horarios.vue');
const MuayThaiFormativo = () => import('./views/MuayThaiFormativo.vue');
const MuayThaiAmateur = () => import('./views/MuayThaiAmateur.vue');
const MuayThaiCombat = () => import('./views/MuayThaiCombat.vue');
const MuayThaiWomen = () => import('./views/MuayThaiWomen.vue');
const BrazilianJiuJitsu = () => import('./views/BrazilianJiuJitsu.vue');
const CrossTraining = () => import('./views/CrossTraining.vue');
const PadHolder = () => import('./views/PadHolder.vue');

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/planes', name: 'planes', component: Planes },
    { path: '/horarios', name: 'horarios', component: Horarios },
    { path: '/clases/muay-thai-formativo', name: 'muay-thai-formativo', component: MuayThaiFormativo },
    { path: '/clases/muay-thai-amateur', name: 'muay-thai-amateur', component: MuayThaiAmateur },
    { path: '/clases/muay-thai-combat', name: 'muay-thai-combat', component: MuayThaiCombat },
    { path: '/clases/muay-thai-women', name: 'muay-thai-women', component: MuayThaiWomen },
    { path: '/clases/brazilian-jiujitsu', name: 'brazilian-jiujitsu', component: BrazilianJiuJitsu },
    { path: '/clases/cross-training', name: 'cross-training', component: CrossTraining },
    { path: '/clases/pad-holder', name: 'pad-holder', component: PadHolder },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 };
    },
});

export default router;

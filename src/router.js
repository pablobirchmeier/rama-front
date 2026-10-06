import { createRouter, createWebHistory, START_LOCATION } from 'vue-router';
import { paginas } from './data/seo';
import { trackMeta } from './utils/metaPixel';

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
    { path: '/clases/pad-holder', name: 'pad-holder', component: PadHolder, meta: { noindex: true } },
    // Ruta inexistente → Inicio
    { path: '/:pathMatch(.*)*', redirect: '/' },
];

// Links viejos con hash (ej. sitio.cl/#/horarios, compartidos antes del cambio a rutas normales)
// → se convierten a la ruta normal (sitio.cl/horarios) antes de que arranque el router.
if (window.location.hash.startsWith('#/')) {
    window.history.replaceState(null, '', window.location.hash.slice(1));
}

// Cómo se cargó la página: 'reload' (recargar), 'navigate' (link/URL nueva) o 'back_forward' (atrás/adelante).
// Solo con atrás/adelante se restaura la posición y el estado guardado (ej. día elegido en el horario);
// al recargar o entrar de nuevo, la página parte desde arriba y en su estado inicial.
const tipoCarga = performance.getEntriesByType?.('navigation')[0]?.type;
const vieneDeAtras = tipoCarga === 'back_forward';
if (!vieneDeAtras && window.history.state) {
    const { horarioDia, horariosSemana, ...resto } = window.history.state;
    window.history.replaceState(resto, '');
}

// Rutas normales (sin "#") para que Google indexe cada página por separado.
// Requiere que el hosting mande toda ruta a index.html: ver vercel.json.
const router = createRouter({
    history: createWebHistory(),
    routes,
    // Atrás/adelante del navegador: vuelve a la misma posición donde estaba el usuario.
    // Navegación nueva o recarga: arriba de todo. El pequeño delay deja que la vista (chunk lazy)
    // termine de pintarse antes de restaurar, para que la altura de la página ya exista.
    scrollBehavior(to, from, savedPosition) {
        const esPrimeraCarga = from === START_LOCATION;
        if (savedPosition && (!esPrimeraCarga || vieneDeAtras)) {
            return new Promise((resolve) => {
                setTimeout(() => resolve({ ...savedPosition, behavior: 'instant' }), 50);
            });
        }
        return { top: 0 };
    },
});

// SEO: título, descripción, canonical y vista previa (Open Graph) de cada página (src/data/seo.js)
function setMeta(selector, attr, valor) {
    const el = document.head.querySelector(selector);
    if (el) el.setAttribute(attr, valor);
}

router.afterEach((to) => {
    const pagina = paginas.find((p) => p.path === to.path) || paginas[0];
    const url = window.location.origin + to.path;

    document.title = pagina.title;
    setMeta('meta[name="description"]', 'content', pagina.description);
    setMeta('meta[property="og:title"]', 'content', pagina.title);
    setMeta('meta[property="og:description"]', 'content', pagina.description);
    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('meta[name="robots"]', 'content', to.meta.noindex ? 'noindex, follow' : 'index, follow');
    setMeta('link[rel="canonical"]', 'href', url);

    // Píxel de Meta (no hace nada si no hay ID configurado)
    trackMeta('PageView');
    if (to.path.startsWith('/clases/') || to.path === '/planes') {
        trackMeta('ViewContent', { content_name: pagina.title, content_category: to.path === '/planes' ? 'Planes' : 'Clase' });
    }
});

export default router;

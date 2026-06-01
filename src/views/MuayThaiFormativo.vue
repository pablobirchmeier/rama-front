<template>
  <div class="bg-background-dark text-white min-h-screen flex flex-col font-display">
    <Navbar />

    <main class="relative flex-1 flex flex-col overflow-hidden bg-background-dark">
      <!-- Hero: video "bajado" (banda oscura arriba); las letras se montan solo sobre la parte superior del video -->
      <div class="relative w-full overflow-hidden aspect-[3/2] min-h-[38rem]">
        <!-- Video anclado abajo: ocupa la parte baja del hero y deja aire oscuro arriba.
             El área del video queda ~2/1 → muestra ~90% central (igual encuadre que antes). -->
        <div class="absolute inset-x-0 bottom-0 h-[74%] overflow-hidden">
          <video
            class="w-full h-full object-cover block"
            src="/formativo/formativo1.mp4"
            autoplay
            muted
            loop
            playsinline
            preload="auto"
          ></video>
          <!-- Gradientes para legibilidad del título -->
          <div class="absolute inset-0 bg-gradient-to-r from-background-dark/85 via-background-dark/20 to-transparent"></div>
          <div class="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-transparent to-transparent"></div>
          <!-- Fundido superior: funde el borde de arriba del video con la banda oscura -->
          <div class="absolute inset-0 bg-[linear-gradient(to_bottom,#000_0%,transparent_20%)]"></div>
        </div>

        <!-- Etiqueta vertical lateral -->
        <div class="hidden lg:flex absolute left-0 top-0 bottom-0 z-20 items-center pointer-events-none">
          <span class="font-mono text-[11px] tracking-[0.45em] uppercase text-white/35 [writing-mode:vertical-rl] rotate-180 pl-3">
            Clase 01 &mdash; Disciplina Fundamental
          </span>
        </div>

        <!-- Título + subtítulo: arriba (con aire desde la navbar), montados sobre la parte alta del video -->
        <div class="absolute inset-0 z-10 flex items-start pt-8 sm:pt-10 lg:pt-14">
          <div class="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-24">
            <!-- Tag -->
            <div class="flex items-center gap-3 w-fit border border-accent/40 rounded-md px-5 py-3 mb-6 lg:mb-10 bg-black/40 backdrop-blur-sm">
              <span class="size-2 rounded-full bg-accent animate-pulse"></span>
              <span class="font-mono text-[11px] sm:text-xs tracking-[0.35em] uppercase text-accent">
                Muay Thai &middot; Nivel Inicial
              </span>
            </div>

            <!-- Titular -->
            <h1 class="font-black uppercase leading-[0.85] tracking-tight text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] drop-shadow-2xl">
              <span class="block text-white">Muay Thai</span>
              <span class="block text-primary">Formativo.</span>
            </h1>

            <!-- Subtítulo -->
            <p class="mt-5 lg:mt-10 max-w-xl text-slate-200 text-sm sm:text-lg font-light leading-relaxed drop-shadow-lg">
              El camino del guerrero empieza con la guardia. Aprenderás los ocho
              golpes sagrados &mdash; puños, codos, rodillas y patadas. Sin atajos, sin ego.
            </p>
          </div>
        </div>
      </div>

      <!-- Botones (debajo del video) -->
      <div class="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-24 py-12">
        <div class="flex flex-col sm:flex-row gap-4">
          <button
            @click="openBoxMagic"
            class="h-14 px-8 bg-primary text-black font-bold uppercase tracking-widest text-sm rounded-md hover:brightness-110 transition-all flex items-center justify-center"
          >
            Reservar Prueba Gratis
          </button>
          <router-link
            to="/horarios"
            class="h-14 px-8 border border-white/30 text-white font-bold uppercase tracking-widest text-sm rounded-md hover:border-primary hover:text-primary transition-all flex items-center justify-center text-center leading-tight"
          >
            Ver<br class="sm:hidden" /> Horarios
          </router-link>
        </div>
      </div>

      <!-- Secciones imagen + texto con reveal al scroll (alterna lados) -->
      <div class="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-24 py-12 lg:py-20 flex flex-col gap-20 lg:gap-28">
        <div
          v-for="(seccion, i) in secciones"
          :key="i"
          :ref="(el) => setSeccionRef(el, i)"
          class="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center transition-all duration-[1400ms] ease-out"
          :class="seccion.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'"
        >
          <!-- IMAGEN -->
          <div
            class="relative w-full overflow-hidden h-64 sm:h-80 lg:h-[26rem] rounded-sm transition-transform duration-[1400ms] ease-out"
            :class="[
              seccion.visible ? 'scale-100' : 'scale-95',
              seccion.imagenIzquierda ? 'lg:order-1' : 'lg:order-2',
            ]"
          >
            <img
              src="/foto_ejemplo.JPG"
              :alt="seccion.titulo"
              class="w-full h-full object-cover block"
            />
            <!-- Fundido en los bordes (patrón del sitio) -->
            <div class="absolute inset-0 bg-[linear-gradient(to_bottom,#000_0%,transparent_12%,transparent_88%,#000_100%)]"></div>
            <div class="absolute inset-0 bg-[linear-gradient(to_right,#000_0%,transparent_10%,transparent_90%,#000_100%)]"></div>
          </div>

          <!-- TEXTO al lado -->
          <div
            class="flex flex-col gap-5 transition-all duration-[1400ms] ease-out delay-200"
            :class="[
              seccion.visible
                ? 'opacity-100 translate-x-0'
                : seccion.imagenIzquierda
                  ? 'opacity-0 lg:translate-x-12'
                  : 'opacity-0 lg:-translate-x-12',
              seccion.imagenIzquierda ? 'lg:order-2' : 'lg:order-1',
            ]"
          >
            <span class="font-mono text-[10px] tracking-[0.4em] uppercase text-accent">{{ seccion.label }}</span>
            <h3 class="font-black uppercase tracking-tight text-primary text-3xl lg:text-5xl leading-none">{{ seccion.titulo }}</h3>
            <p class="text-white/75 text-base lg:text-lg leading-relaxed">{{ seccion.texto }}</p>
          </div>
        </div>
      </div>

      <!-- Barra de datos -->
      <div class="relative z-10 border-t border-white/10 bg-black/50 backdrop-blur-sm">
        <div class="max-w-[1400px] mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-x divide-white/10">
          <div
            v-for="(item, i) in datos"
            :key="item.label"
            class="px-6 lg:px-8 py-6 flex flex-col gap-1"
            :class="{ 'border-t border-white/10 sm:border-t-0': i >= 2 }"
          >
            <span class="font-mono text-[10px] tracking-[0.3em] uppercase text-accent">{{ item.label }}</span>
            <span class="font-bold text-base lg:text-lg uppercase tracking-tight text-white">{{ item.valor }}</span>
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue';
import Navbar from '../layouts/Navbar.vue';
import Footer from '../layouts/Footer.vue';
import { openBoxMagic } from '../utils/deepLinking';

const datos = [
  { label: 'Mañanas · Lun a Vie', valor: '07:00' },
  { label: 'Tardes · Lun·Mié·Vie', valor: '17:30 / 19:30' },
  { label: 'Tardes · Mar·Jue', valor: '18:30' },
  { label: 'Sábado', valor: '10:00' },
  { label: 'Duración', valor: '60 min' },
];

// Secciones imagen + texto (alterna lados) con reveal al scroll
const secciones = reactive([
  {
    label: '01 / El arte de las 8 extremidades',
    titulo: 'Las Ocho Armas',
    texto: 'El Muay Thai se llama el arte de las ocho extremidades por una razón. Puños, codos, rodillas y patadas — cada parte del cuerpo es un arma, y cada una se aprende sola antes de combinarse. Acá empezás por el principio: cómo plantar los pies, cómo levantar la guardia, cómo soltar el primer recto sin perder el equilibrio.',
    imagenIzquierda: true,
    visible: false,
  },
  {
    label: '02 / Disciplina diaria',
    titulo: 'Constancia, no Fuerza',
    texto: 'Nadie llega rápido. Y nadie llega solo a fuerza. El Formativo se construye con repetición — los mismos golpes, las mismas correcciones, hasta que tu cuerpo deja de pensar y empieza a responder. Acá no entrenamos para verse — entrenamos para que el día que el cuerpo tenga que reaccionar, sepa.',
    imagenIzquierda: false,
    visible: false,
  },
  {
    label: '03 / Linaje y respeto',
    titulo: 'Tradición Boran',
    texto: 'Antes de ser deporte, el Muay Thai fue arte de guerra. Cada técnica, cada ritual, cada respeto al maestro viene de una línea de siglos. En Rama honramos esa raíz: el Wai Khru, el orden del salón, el saludo al kru. Acá no aprendés solo a pelear — entrás a una tradición que se respeta dentro y fuera del ring.',
    imagenIzquierda: true,
    visible: false,
  },
]);

const seccionRefs = ref([]);
let observer = null;

function setSeccionRef(el, i) {
  if (el) seccionRefs.value[i] = el;
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const i = seccionRefs.value.indexOf(entry.target);
        if (entry.isIntersecting && i !== -1) {
          secciones[i].visible = true;
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  seccionRefs.value.forEach((el) => el && observer.observe(el));
});

onBeforeUnmount(() => {
  observer?.disconnect();
});
</script>

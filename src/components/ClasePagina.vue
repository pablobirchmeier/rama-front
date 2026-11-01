<template>
  <!-- Plantilla única de página de clase (diseño base: Formativo). El contenido viene de src/data/clases.js -->
  <div class="bg-background-dark text-white min-h-screen flex flex-col font-display">
    <Navbar />

    <main class="relative flex-1 flex flex-col overflow-hidden bg-background-dark">
      <!-- Encabezado: video "bajado" (banda oscura arriba); el texto se monta sobre la parte alta del video -->
      <div class="relative w-full overflow-hidden aspect-[3/2] min-h-[40rem]">
        <div class="absolute inset-x-0 bottom-0 h-[74%] overflow-hidden">
          <video
            :key="videoActual"
            :src="datos.videos[videoActual]"
            class="w-full h-full object-cover block"
            autoplay
            muted
            :loop="datos.videos.length === 1"
            playsinline
            preload="auto"
            @ended="siguienteVideo"
          ></video>
          <!-- Gradientes para legibilidad del título -->
          <div class="absolute inset-0 bg-gradient-to-r from-background-dark/85 via-background-dark/20 to-transparent"></div>
          <div class="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-transparent to-transparent"></div>
          <!-- Fundido superior: funde el borde de arriba del video con la banda oscura -->
          <div class="absolute inset-0 bg-[linear-gradient(to_bottom,#000_0%,transparent_20%)]"></div>
        </div>

        <div class="absolute inset-0 z-10 flex items-start pt-8 sm:pt-10 lg:pt-14">
          <div class="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-24">
            <div class="flex items-center gap-3 w-fit border border-accent/40 rounded-md px-5 py-3 mb-6 lg:mb-10 bg-black/40 backdrop-blur-sm">
              <span class="size-2 rounded-full bg-accent animate-pulse"></span>
              <span class="font-mono text-[11px] sm:text-xs tracking-[0.35em] uppercase text-accent">{{ datos.etiqueta }}</span>
            </div>

            <h1 class="font-black uppercase leading-[0.85] tracking-tight text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] drop-shadow-2xl">
              <span class="block text-white">{{ datos.titulo[0] }}</span>
              <span class="block text-primary">{{ datos.titulo[1] }}</span>
            </h1>

            <div class="mt-5 lg:mt-10 max-w-xl flex flex-col gap-2 drop-shadow-lg">
              <p class="text-primary font-bold text-sm sm:text-base uppercase tracking-wider">{{ datos.lema }}</p>
              <p class="text-slate-200 text-sm sm:text-lg font-light leading-relaxed">{{ datos.texto }}</p>
              <p v-if="datos.nota" class="text-white/60 text-xs sm:text-sm leading-relaxed">{{ datos.nota }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Botones -->
      <div class="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-24 py-12">
        <div class="flex flex-col sm:flex-row gap-4">
          <button
            @click="openBoxMagic"
            class="h-14 px-8 bg-primary text-black font-bold uppercase tracking-widest text-sm rounded-md hover:brightness-110 transition-all flex items-center justify-center"
          >
            Agenda tu clase de prueba
          </button>
          <router-link
            to="/horarios"
            class="h-14 px-8 border border-white/30 text-white font-bold uppercase tracking-widest text-sm rounded-md hover:border-primary hover:text-primary transition-all flex items-center justify-center"
          >
            Ver horarios
          </router-link>
        </div>
      </div>

      <!-- Horarios de esta clase (del horario oficial, src/data/horarios.js) -->
      <div class="relative z-10 bg-primary text-black">
        <div class="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-stretch">
          <div class="px-6 sm:px-10 lg:px-12 py-5 lg:py-6 flex items-center gap-3 lg:border-r border-black/20">
            <span class="material-symbols-outlined">calendar_month</span>
            <span class="font-black uppercase tracking-[0.2em] text-sm">Horarios</span>
          </div>
          <div class="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row">
            <div
              v-for="grupo in horarios"
              :key="grupo.dias"
              class="flex-1 px-6 sm:px-10 lg:px-8 py-4 lg:py-6 flex flex-col gap-1 border-t lg:border-t-0 lg:border-r border-black/20"
            >
              <span class="font-mono text-[10px] tracking-[0.3em] uppercase text-black/70">{{ grupo.dias }}</span>
              <span class="font-bold text-base lg:text-lg uppercase tracking-tight">{{ grupo.horas }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Lista propia de la clase (Qué dominarás / Metodología / …) -->
      <div v-if="datos.lista" class="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-24 pt-16 lg:pt-24">
        <span class="font-mono text-[11px] tracking-[0.35em] uppercase text-accent">{{ datos.lista.titulo }}</span>
        <ul class="mt-6 grid sm:grid-cols-2 gap-x-12 border-t border-white/10">
          <li
            v-for="(item, i) in datos.lista.items"
            :key="item.titulo"
            class="flex gap-5 py-5 border-b border-white/10"
          >
            <span class="font-mono text-[11px] tracking-[0.2em] text-accent shrink-0 pt-1">{{ String(i + 1).padStart(2, '0') }}</span>
            <div class="flex flex-col gap-1">
              <h3 class="font-bold uppercase tracking-tight text-white text-base lg:text-lg">{{ item.titulo }}</h3>
              <p v-if="item.desc" class="text-white/60 text-sm leading-snug">{{ item.desc }}</p>
            </div>
          </li>
        </ul>
      </div>

      <!-- Frase propia de la clase -->
      <div v-if="datos.frase" class="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-24 pt-16 lg:pt-24">
        <div class="max-w-2xl border-l-2 border-primary pl-5">
          <p class="text-white/90 text-xl lg:text-3xl font-light italic leading-relaxed">"{{ datos.frase }}"</p>
        </div>
      </div>

      <!-- Secciones foto + texto -->
      <div class="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-24 py-16 lg:py-24">
        <SeccionesReveal :secciones="datos.secciones" />
      </div>

      <!-- Reserva -->
      <div class="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-24 pb-20 lg:pb-28 flex justify-center">
        <button
          @click="openBoxMagic"
          class="w-full sm:w-auto min-w-[300px] h-16 px-8 bg-primary hover:brightness-110 text-black rounded-lg font-black text-lg shadow-2xl shadow-primary/30 transition-all flex items-center justify-center gap-3 uppercase tracking-widest border-b-4 border-black/20"
        >
          Agenda tu clase de prueba
          <span class="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import Navbar from '../layouts/Navbar.vue';
import Footer from '../layouts/Footer.vue';
import SeccionesReveal from './SeccionesReveal.vue';
import { openBoxMagic } from '../utils/deepLinking';
import { clases } from '../data/clases';
import { resumenHorariosClase } from '../data/horarios';

const props = defineProps({
  // clave en src/data/clases.js: formativo | amateur | combat | women | cross
  clase: { type: String, required: true },
});

const datos = computed(() => clases[props.clase]);
const horarios = computed(() => resumenHorariosClase(datos.value.claseHorario));

// Si la clase tiene más de un video, se alternan
const videoActual = ref(0);
function siguienteVideo() {
  videoActual.value = (videoActual.value + 1) % datos.value.videos.length;
}
</script>

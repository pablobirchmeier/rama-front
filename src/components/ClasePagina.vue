<template>
  <!-- Plantilla única de página de clase (diseño base: Formativo). El contenido viene de src/data/clases.js -->
  <div class="bg-background-dark text-white min-h-screen flex flex-col font-display">
    <Navbar />

    <main class="relative flex-1 flex flex-col overflow-x-clip bg-background-dark">
      <!-- Encabezado: texto a la izquierda, video(s) verticales completos a la derecha y los botones
           ABAJO de los videos. Videos 9:16 enteros, brillo 70%, sin degradados.
           `videosJuntos` (Combat): los videos van uno debajo del otro (se ve uno, bajas y aparece el otro)
           y el texto queda fijo a la izquierda mientras se baja; si no, se alternan en un recuadro. -->
      <div class="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-24 pt-8 sm:pt-10 lg:pt-14 pb-16 lg:pb-20">
        <div class="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16" :class="datos.videosJuntos ? 'items-start' : 'items-center'">
          <div class="flex flex-col" :class="{ 'lg:sticky lg:top-28': datos.videosJuntos }">
            <div class="flex items-center gap-3 w-fit border border-accent/40 rounded-md px-5 py-3 mb-6 lg:mb-10 bg-black/40">
              <span class="size-2 rounded-full bg-accent animate-pulse"></span>
              <span class="font-mono text-[11px] sm:text-xs tracking-[0.35em] uppercase text-accent">{{ datos.etiqueta }}</span>
            </div>

            <h1 class="font-black uppercase leading-[0.85] tracking-tight text-5xl sm:text-7xl md:text-8xl xl:text-9xl">
              <span class="block text-white">{{ datos.titulo[0] }}</span>
              <span class="block text-primary">{{ datos.titulo[1] }}</span>
            </h1>

            <div class="mt-6 lg:mt-10 max-w-xl flex flex-col gap-2">
              <p class="text-primary font-bold text-sm sm:text-base uppercase tracking-wider">{{ datos.lema }}</p>
              <p class="text-slate-200 text-base sm:text-lg font-light leading-relaxed">{{ datos.texto }}</p>
              <p v-if="datos.nota" class="text-white/60 text-xs sm:text-sm leading-relaxed">{{ datos.nota }}</p>
            </div>
          </div>

          <div class="flex flex-col items-center gap-8">
            <!-- Varios videos, uno debajo del otro -->
            <div v-if="datos.videosJuntos" class="flex flex-col gap-8 w-full max-w-[320px] sm:max-w-[360px] lg:w-[360px] xl:w-[400px] lg:max-w-none">
              <div v-for="video in datos.videos" :key="video" class="relative aspect-[9/16] overflow-hidden rounded-sm">
                <video
                  :src="video"
                  class="video-clase w-full h-full object-cover"
                  autoplay
                  muted
                  loop
                  playsinline
                  preload="metadata"
                ></video>
              </div>
            </div>

            <!-- Un recuadro (si hay más de un video, se alternan) -->
            <div v-else class="relative w-full max-w-[320px] sm:max-w-[360px] lg:w-[360px] xl:w-[400px] lg:max-w-none aspect-[9/16] overflow-hidden rounded-sm">
              <video
                :key="videoActual"
                :src="datos.videos[videoActual]"
                class="video-clase w-full h-full object-cover"
                autoplay
                muted
                :loop="datos.videos.length === 1"
                playsinline
                preload="metadata"
                @ended="siguienteVideo"
              ></video>
            </div>

            <!-- Botones, abajo de los videos -->
            <div class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
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

<style scoped>
/* Video de la clase: un poco más oscuro, bordes sin fundido (igual que el que tenía Team Rama) */
.video-clase {
  filter: brightness(0.7);
}
</style>

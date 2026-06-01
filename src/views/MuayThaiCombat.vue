<template>
  <div class="bg-background-dark text-white min-h-screen flex flex-col font-display">
    <Navbar />

    <main class="relative flex-1 flex flex-col">
      <!-- Split principal (hero a pantalla completa) -->
      <div class="relative grid lg:grid-cols-2 overflow-hidden min-h-[calc(100vh-4.5rem)]">
        <!-- PANEL IZQUIERDO: contenido -->
      <div class="relative z-10 flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-16 lg:border-r border-white/10">
        <!-- Titular -->
        <h1 class="font-black uppercase leading-[0.85] tracking-tight text-6xl sm:text-7xl lg:text-8xl">
          <span class="block text-white">Muay</span>
          <span class="block text-white">Thai</span>
          <span class="block text-transparent [-webkit-text-stroke:2px_#FFD700]">Combat.</span>
        </h1>

        <!-- Descripción -->
        <p class="mt-8 max-w-md text-slate-300 text-base lg:text-lg font-light leading-relaxed">
          Solo para quienes ya tienen guardia. Entramos al ring.
          Sparring controlado, lectura del rival, gestión del miedo.
          Aquí no se entrena para verse &mdash; se entrena para resistir.
        </p>

        <!-- Datos -->
        <div class="mt-10 grid grid-cols-2 max-w-md border-y border-white/15">
          <div class="py-5 pr-6 border-r border-white/15">
            <span class="font-mono text-[10px] tracking-[0.3em] uppercase text-accent">Requiere</span>
            <p class="mt-1 font-bold text-lg uppercase tracking-tight text-white">6 - 12 meses base</p>
          </div>
          <div class="py-5 pl-6">
            <span class="font-mono text-[10px] tracking-[0.3em] uppercase text-accent">Intensidad</span>
            <p class="mt-1 font-bold text-lg uppercase tracking-tight text-white">Alta</p>
          </div>
        </div>
      </div>

      <!-- PANEL DERECHO: video de fondo + marca de agua + frase -->
      <div class="relative overflow-hidden min-h-[60vh] lg:min-h-0">
        <!-- Loop de sparring (alterna los dos videos) -->
        <video
          :key="videoActual"
          :src="sparringVideos[videoActual]"
          class="absolute inset-0 w-full h-full object-contain scale-125"
          autoplay
          muted
          playsinline
          @ended="siguienteVideo"
        ></video>
        <!-- Tinte general muy sutil -->
        <div class="absolute inset-0 bg-background-dark/10"></div>
        <!-- Fundido inferior mínimo (para legibilidad de la frase) -->
        <div class="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent"></div>
        <!-- Fundido lateral mínimo: solo un hilo en cada borde -->
        <div class="absolute inset-0 bg-[linear-gradient(to_right,#000_0%,transparent_8%,transparent_92%,#000_100%)]"></div>
        <!-- Fundido superior mínimo -->
        <div class="absolute inset-0 bg-[linear-gradient(to_bottom,#000_0%,transparent_8%)]"></div>
        <!-- Resplandor superior sutil -->
        <div class="absolute -top-1/4 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-primary/5 blur-[120px] pointer-events-none"></div>

        <!-- Frase -->
        <div class="absolute bottom-8 left-8 lg:left-12 right-8 max-w-md border-l-2 border-primary pl-5 z-10">
          <p class="text-white/90 text-lg lg:text-2xl font-light italic leading-relaxed">
            "El miedo no se vence afuera del ring. Se vence dentro."
          </p>
        </div>
        </div>
      </div>

      <!-- Secciones imagen + texto con reveal al scroll -->
      <div class="relative w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-16 lg:py-24">
        <SeccionesReveal :secciones="secciones" />
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Navbar from '../layouts/Navbar.vue';
import Footer from '../layouts/Footer.vue';
import SeccionesReveal from '../components/SeccionesReveal.vue';

const secciones = [
  {
    label: '01 / El Ring',
    titulo: 'Entrar al Cuadrado',
    texto: 'El ring no perdona. No hay esquinas para esconderse, no hay tiempo para pensar dos veces. Aquí no se entrena para verse — se entrena para resistir. Cada round es una pregunta directa: ¿qué tan parado puedes quedarte cuando el otro también vino a quedarse parado?',
    imagenIzquierda: true,
  },
  {
    label: '02 / Lectura',
    titulo: 'Ver Antes de Pegar',
    texto: 'Ningún golpe llega por casualidad. Hay una respiración antes, un peso que se carga, un hombro que avisa. Aquí entrenas a leer eso — fintas, ritmos, telegrafías. La diferencia entre comer la patada y verla venir está en milésimas de segundo, y se entrena.',
    imagenIzquierda: false,
  },
  {
    label: '03 / Mental',
    titulo: 'Gestión del Miedo',
    texto: 'El miedo no se vence afuera, se vence dentro. Aquí no negamos que da nervios — lo usamos. Aprendes a respirar cuando el corazón se acelera, a soltar cuando el cuerpo se tranca, a volver al plan cuando todo se sale del libreto. Eso es Combat: cabeza fría, cuerpo despierto.',
    imagenIzquierda: true,
  },
];

const sparringVideos = [
  '/sparring/Sparring%20Profe%20Ramiro%20vs%20Omar.mp4',
  '/sparring/sparring2.mp4',
];
const videoActual = ref(0);

function siguienteVideo() {
  videoActual.value = (videoActual.value + 1) % sparringVideos.length;
}
</script>

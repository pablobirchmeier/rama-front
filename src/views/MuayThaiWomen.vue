<template>
  <div class="bg-background-dark text-white min-h-screen flex flex-col font-display">
    <Navbar />

    <main class="relative flex-1 flex flex-col overflow-hidden bg-background-dark">
      <!-- Hero con video de fondo (mismo formato que Formativo / Amateur / Cross) -->
      <div class="relative w-full overflow-hidden aspect-[3/2] min-h-[44rem]">
        <!-- Video anclado abajo -->
        <div class="absolute inset-x-0 bottom-0 h-[74%] overflow-hidden">
          <video
            class="w-full h-full object-cover block"
            src="/women/muay%20women1.mp4"
            autoplay
            muted
            loop
            playsinline
            preload="auto"
          ></video>
          <!-- Gradientes (mismo patrón) -->
          <div class="absolute inset-0 bg-gradient-to-r from-background-dark/85 via-background-dark/20 to-transparent"></div>
          <div class="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-transparent to-transparent"></div>
          <div class="absolute inset-0 bg-[linear-gradient(to_bottom,#000_0%,transparent_20%)]"></div>
        </div>

        <!-- Contenido encima del video -->
        <div class="absolute inset-0 z-10 grid lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px] gap-10 lg:gap-16 max-w-[1500px] w-full mx-auto px-6 sm:px-10 lg:px-16 pt-10 sm:pt-12 lg:pt-16 pb-10">
          <!-- IZQUIERDA -->
          <div class="flex flex-col gap-8 lg:gap-10">
            <!-- Label "08 / SOLO PARA MUJERES" -->
            <div class="flex items-center gap-4">
              <div class="h-px w-10 bg-accent"></div>
              <span class="font-mono text-[11px] tracking-[0.4em] uppercase text-accent">08 / Solo para Mujeres</span>
            </div>

            <!-- Titular -->
            <h1 class="font-black uppercase leading-[0.85] tracking-tight text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] xl:text-[10rem] drop-shadow-2xl">
              <span class="block text-white">Muay Thai</span>
              <span class="block text-primary">Women.</span>
            </h1>

            <!-- Descripción -->
            <p class="max-w-xl text-slate-200 text-base lg:text-lg font-light leading-relaxed drop-shadow-lg">
              Un día a la semana, el tatami es tuyo. Una clase pensada para
              mujeres que quieren empezar en un espacio seguro &mdash; o entrenar
              fuerte rodeadas de las suyas. Misma técnica, mismo respeto, tu
              propio ritmo.
            </p>
          </div>

          <!-- DERECHA: Tarjeta SÁBADO -->
          <div class="flex items-start lg:items-center">
            <div class="w-full border-2 border-primary bg-black/65 backdrop-blur-md">
              <!-- Header amarillo -->
              <div class="flex items-center justify-between bg-primary text-black px-5 py-3">
                <span class="font-mono text-[11px] tracking-[0.3em] uppercase font-bold">Una vez por semana</span>
                <span class="font-mono text-[11px] tracking-[0.3em] font-bold">3</span>
              </div>
              <!-- Cuerpo -->
              <div class="px-5 lg:px-7 py-7 flex flex-col gap-6">
                <div class="flex flex-col items-center gap-1 text-center">
                  <span class="font-mono text-[10px] tracking-[0.4em] uppercase text-white/55">Cada</span>
                  <h2 class="font-black uppercase text-primary text-6xl lg:text-7xl tracking-tight leading-none">Sábado</h2>
                  <span class="font-bold text-white text-2xl lg:text-3xl tracking-tight mt-3">11:00 &mdash; 12:30</span>
                </div>
                <div class="border-t border-white/15"></div>
                <div class="grid grid-cols-3 text-center">
                  <div class="flex flex-col gap-1">
                    <span class="font-black text-white text-base lg:text-lg uppercase tracking-tight">Todos</span>
                    <span class="font-mono text-[10px] tracking-[0.3em] uppercase text-accent">Niveles</span>
                  </div>
                  <div class="flex flex-col gap-1">
                    <span class="font-black text-white text-base lg:text-lg uppercase tracking-tight">12</span>
                    <span class="font-mono text-[10px] tracking-[0.3em] uppercase text-accent">Cupos</span>
                  </div>
                  <div class="flex flex-col gap-1">
                    <span class="font-black text-white text-base lg:text-lg uppercase tracking-tight">Kru</span>
                    <span class="font-mono text-[10px] tracking-[0.3em] uppercase text-accent">Femenina</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Foto + texto "Tu Espacio" lado a lado, con reveal al scroll -->
      <div
        ref="fotoRef"
        class="max-w-6xl mx-auto w-full px-6 sm:px-10 lg:px-16 py-12 lg:py-20 transition-all duration-[1400ms] ease-out"
        :class="fotoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'"
      >
        <div class="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <!-- IMAGEN -->
          <div
            class="relative w-full overflow-hidden h-64 sm:h-80 lg:h-[26rem] rounded-sm transition-transform duration-[1400ms] ease-out"
            :class="fotoVisible ? 'scale-100' : 'scale-95'"
          >
            <img
              src="/women/womenmt.jpeg"
              alt="Muay Thai Women — Rama"
              class="w-full h-full object-cover block"
              loading="lazy"
              decoding="async"
            />
            <!-- Fundido en los bordes (mismo patrón que los videos) -->
            <div class="absolute inset-0 bg-[linear-gradient(to_bottom,#000_0%,transparent_12%,transparent_88%,#000_100%)]"></div>
            <div class="absolute inset-0 bg-[linear-gradient(to_right,#000_0%,transparent_10%,transparent_90%,#000_100%)]"></div>
          </div>

          <!-- TEXTO al lado -->
          <div
            class="flex flex-col gap-5 transition-all duration-[1400ms] ease-out delay-200"
            :class="fotoVisible ? 'opacity-100 translate-x-0' : 'opacity-0 lg:translate-x-12'"
          >
            <span class="font-mono text-[10px] tracking-[0.4em] uppercase text-accent"></span>
            <h3 class="font-black uppercase tracking-tight text-primary text-3xl lg:text-5xl leading-none">
              Tu Espacio
            </h3>
            <p class="text-white/75 text-base lg:text-lg leading-relaxed">
Una clase exclusiva para mujeres que combina técnica, acondicionamiento físico y confianza. Un espacio seguro pensado para que puedas enfocarte en tu progreso, desafiarte en cada entrenamiento y disfrutar del Muay Thai junto a otras mujeres que buscan crecer, aprender y superarse día a día.
            </p>
          </div>
        </div>
      </div>

      <!-- Comunidad / Técnica Real (las otras 2) -->
      <div class="relative max-w-[1500px] w-full mx-auto px-6 sm:px-10 lg:px-16 pb-12 lg:pb-16">
        <div class="grid sm:grid-cols-2 gap-8 lg:gap-12">
          <div
            v-for="item in featuresAbajo"
            :key="item.titulo"
            class="flex flex-col gap-4 pl-5 border-l border-primary/40"
          >
            <h3 class="font-black uppercase tracking-tight text-primary text-xl lg:text-2xl">{{ item.titulo }}</h3>
            <p class="text-white/70 text-sm lg:text-base leading-relaxed">{{ item.desc }}</p>
          </div>
        </div>
      </div>

      <!-- Barra inferior amarilla -->
      <div class="relative bg-primary text-black">
        <div class="max-w-[1500px] mx-auto flex flex-col sm:flex-row items-stretch">
          <div class="flex-1 px-6 sm:px-10 lg:px-16 py-5 lg:py-6 flex items-center">
            <p class="font-bold text-base lg:text-lg uppercase tracking-tight">
              Tu primera clase es gratis &middot; Trae a una amiga
            </p>
          </div>
          <button
            @click="openBoxMagic"
            class="bg-black text-white font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 px-8 lg:px-12 py-6 hover:bg-black/80 transition-colors"
          >
            Reservar mi Lugar
            <span class="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Navbar from '../layouts/Navbar.vue';
import Footer from '../layouts/Footer.vue';
import { openBoxMagic } from '../utils/deepLinking';

// Reveal de la foto al hacer scroll (fade-in + slide-up)
const fotoRef = ref(null);
const fotoVisible = ref(false);
let observer = null;

onMounted(() => {
  if (!fotoRef.value) return;
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          fotoVisible.value = true;
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  observer.observe(fotoRef.value);
});

onBeforeUnmount(() => {
  observer?.disconnect();
});

const featuresAbajo = [
  {
    titulo: 'Comunidad',
    desc: 'Entrenas en grupo, avanzas en grupo. Aquí nadie empieza sola.',
  },
  {
    titulo: 'Técnica Real',
    desc: 'Mismo Muay Thai, misma exigencia. Defensa personal que de verdad funciona.',
  },
];
</script>

<template>
  <div class="bg-background-dark font-display text-white min-h-screen flex flex-col overflow-x-hidden">
    <Navbar />

    <main class="relative flex-1 flex flex-col">
      <!-- Vertical side label -->
      <span
        class="hidden lg:block pointer-events-none select-none absolute left-2 top-1/2 -translate-y-1/2 -rotate-90 origin-center text-white/5 font-black uppercase italic tracking-tighter text-[6rem] leading-none whitespace-nowrap"
      >
        Arte Suave
      </span>

      <!-- HERO -->
      <section class="relative flex-1 flex flex-col items-center justify-center text-center px-6 py-20 md:py-28 max-w-[1100px] mx-auto w-full">
        <!-- Eyebrow -->
        <div class="flex items-center gap-4 mb-8">
          <span class="h-px w-12 bg-primary"></span>
          <span class="text-primary text-xs font-bold uppercase tracking-[0.4em]">07 / Control del Suelo</span>
          <span class="h-px w-12 bg-primary"></span>
        </div>

        <!-- Title -->
        <h1 class="text-6xl md:text-8xl lg:text-9xl font-black uppercase italic leading-[0.85] tracking-tighter">
          Brazilian <span class="text-primary">JiuJitsu</span>
        </h1>

        <!-- Copy -->
        <p class="text-white/60 text-base md:text-xl leading-relaxed max-w-2xl mt-8">
          Cuando el combate llega al suelo, el técnico vence al fuerte. No se trata de pegar
          más duro — se trata de leer, controlar y esperar el momento. El ajedrez humano.
        </p>

        <!-- GI / NO-GI -->
        <div class="grid grid-cols-1 sm:grid-cols-2 w-full max-w-3xl mt-16 border border-primary/40">
          <div class="flex flex-col gap-3 p-8 text-left sm:border-r border-primary/40 border-b sm:border-b-0">
            <h2 class="text-primary text-3xl font-black uppercase italic tracking-tight">Gi</h2>
            <p class="text-white/50 text-sm leading-relaxed">
              Kimono. Agarres, estrangulaciones con solapa, juego técnico y paciente.
            </p>
          </div>
          <div class="flex flex-col gap-3 p-8 text-left">
            <h2 class="text-primary text-3xl font-black uppercase italic tracking-tight">No-Gi</h2>
            <p class="text-white/50 text-sm leading-relaxed">
              Sin kimono. Ritmo, control de muñecas y transiciones explosivas.
            </p>
          </div>
        </div>
      </section>

      <!-- Secciones imagen + texto con reveal al scroll -->
      <section class="relative w-full max-w-[1400px] mx-auto px-6 md:px-10 py-16 lg:py-24">
        <SeccionesReveal :secciones="secciones" />
      </section>

      <!-- BOTTOM BAR -->
      <section class="border-t border-primary/30">
        <div class="max-w-[1400px] mx-auto px-4 md:px-10 py-6 flex flex-col lg:flex-row items-center justify-between gap-8">
          <!-- Graduación / cinturones -->
          <div class="flex items-center gap-4">
            <span class="hidden md:block text-white/30 text-[10px] font-bold uppercase tracking-[0.3em] [writing-mode:vertical-rl] rotate-180">Graduación</span>
            <div class="flex items-end gap-5">
              <div v-for="belt in cinturones" :key="belt.label" class="flex flex-col items-center gap-2">
                <div class="h-3.5 w-16 rounded-sm relative overflow-hidden" :class="belt.bg">
                  <span class="absolute right-2 top-0 bottom-0 w-1.5 bg-black/70"></span>
                </div>
                <span class="text-white/40 text-[10px] font-bold uppercase tracking-widest">{{ belt.label }}</span>
              </div>
            </div>
          </div>

          <!-- Horario + CTA -->
          <div class="flex items-center gap-6">
            <div class="text-right">
              <p class="text-primary text-[10px] font-bold uppercase tracking-[0.3em]">Horarios</p>
              <p class="text-white text-lg md:text-xl font-black uppercase tracking-tight">Lun · Mié · Vie · 20:00</p>
            </div>
            <button
              @click="openBoxMagic"
              class="group flex items-center gap-3 bg-primary text-black px-6 md:px-8 py-4 rounded-md font-black uppercase tracking-wider text-sm hover:brightness-110 transition-all"
            >
              Primer Roll Gratis
              <span class="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Navbar from '../layouts/Navbar.vue';
import Footer from '../layouts/Footer.vue';
import { openBoxMagic } from '../utils/deepLinking';
import SeccionesReveal from '../components/SeccionesReveal.vue';

const secciones = [
  {
    label: '01 / El Suelo',
    titulo: 'Cuando el Combate Baja',
    texto: 'En el piso, el más fuerte no siempre gana. Gana el que controla la posición. Aquí aprendes guardia, montada, lateral, espalda — las casas desde donde se trabaja. Antes de aprender a someter, hay que aprender a no quedarse abajo.',
    imagenIzquierda: true,
  },
  {
    label: '02 / Palanca',
    titulo: 'Técnica Sobre Fuerza',
    texto: 'El jiu jitsu se inventó para que el chico le ganara al grandote. La palanca, el ángulo correcto, el peso bien apoyado — eso vence a la fuerza bruta. Aquí no necesitas ser el más fuerte, necesitas ser el más preciso. El cuerpo se reeduca para usar mecánica, no músculo.',
    imagenIzquierda: false,
  },
  {
    label: '03 / Ajedrez humano',
    titulo: 'Paciencia y Lectura',
    texto: 'El jiu jitsu es un ajedrez con cuerpos. Cada movimiento abre y cierra puertas, cada agarre obliga al otro a responder. Aquí aprendes a esperar — la prisa pierde. Vas leyendo, sintiendo, ajustando. Cuando llega la sumisión, ya estaba decidida tres movimientos antes.',
    imagenIzquierda: true,
  },
];

const cinturones = [
  { label: 'Blanca', bg: 'bg-white' },
  { label: 'Azul', bg: 'bg-blue-600' },
  { label: 'Marrón', bg: 'bg-[#7a4a1e]' },
  { label: 'Negra', bg: 'bg-neutral-800 border border-white/20' },
];
</script>

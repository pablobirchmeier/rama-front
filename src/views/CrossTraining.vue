<template>
  <div class="bg-background-dark text-white min-h-screen flex flex-col font-display">
    <Navbar />

    <main class="relative flex-1 flex flex-col overflow-hidden bg-background-dark">
      <!-- Hero con video de fondo (mismo formato que Formativo / Amateur) -->
      <div class="relative w-full overflow-hidden aspect-[3/2] min-h-[40rem]">
        <!-- Video completo (object-contain), un poco más chico, con viñeteado leve en los bordes -->
        <div class="absolute inset-x-0 bottom-0 h-[68%] overflow-hidden">
          <video
            class="w-full h-full object-contain block"
            src="/cross/cross2.mp4"
            autoplay
            muted
            loop
            playsinline
            preload="auto"
          ></video>
          <!-- Viñeteado radial: leve sombreado mínimo en los bordes -->
          <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.55)_100%)] pointer-events-none"></div>
          <!-- Fundido superior mínimo: integra con la banda oscura -->
          <div class="absolute inset-0 bg-[linear-gradient(to_bottom,#000_0%,transparent_12%)]"></div>
        </div>

        <!-- Contenido del hero: label + título + descripción -->
        <div class="absolute inset-0 z-10 flex flex-col max-w-[1500px] w-full mx-auto px-6 sm:px-10 lg:px-16 pt-8 sm:pt-10 lg:pt-14 pb-8">
          <!-- Label superior -->
          <div class="flex items-center gap-4 mb-8 lg:mb-12">
            <div class="h-px w-10 bg-accent"></div>
            <span class="font-mono text-[11px] tracking-[0.4em] uppercase text-accent">04 / Condicionamiento de Guerrero</span>
          </div>

          <!-- Título + descripción -->
          <div class="grid lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px] gap-10 lg:gap-16 flex-1">
            <h1 class="font-black uppercase leading-[0.85] tracking-tight text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] xl:text-[10rem] drop-shadow-2xl">
              <span class="block text-white">Cross</span>
              <span class="block text-primary">Training.</span>
            </h1>
            <div class="flex items-end">
              <p class="text-slate-200 text-base lg:text-lg font-light leading-relaxed drop-shadow-lg">
                HIIT marcial. Fuerza explosiva, capacidad cardiovascular y movilidad
                funcional diseñadas para soportar 5 rounds de pie &mdash; o el día
                más largo de tu semana.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Contenido inferior: metodología + stats + divider + pie -->
      <div class="relative flex flex-col max-w-[1500px] w-full mx-auto px-6 sm:px-10 lg:px-16 py-12 lg:py-16">
        <!-- Metodología + Stats -->
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-10 lg:mb-14">
          <!-- Metodología -->
          <div class="flex flex-col gap-6">
            <span class="font-mono text-[11px] tracking-[0.35em] uppercase text-accent">Metodología / 4 Bloques</span>
            <ul class="flex flex-col gap-3">
              <li
                v-for="(item, i) in metodologia"
                :key="item"
                class="flex gap-6 items-baseline"
              >
                <span class="font-mono text-[11px] tracking-[0.2em] text-accent shrink-0">{{ String(i + 1).padStart(2, '0') }}</span>
                <span class="text-white/85 text-base lg:text-lg">{{ item }}</span>
              </li>
            </ul>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <div
              v-for="stat in estadisticas"
              :key="stat.label"
              class="bg-black/40 border border-white/10 p-5 lg:p-6 flex flex-col gap-4"
            >
              <span
                class="text-5xl lg:text-6xl font-black leading-none"
                :class="stat.highlight ? 'text-primary' : 'text-white'"
              >{{ stat.valor }}</span>
              <span class="font-mono text-[10px] tracking-[0.3em] uppercase text-white/50">{{ stat.label }}</span>
            </div>
          </div>
        </div>

        <!-- Secciones imagen + texto con reveal al scroll -->
        <div class="py-12 lg:py-20">
          <SeccionesReveal :secciones="secciones" />
        </div>

        <!-- Divider -->
        <div class="border-t border-white/15"></div>

        <!-- Pie: info + CTA -->
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-8 lg:mt-10">
          <p class="text-white/55 text-sm lg:text-base">
            Apto sin experiencia previa &middot; Mixto con alumnos de Muay Thai
          </p>
          <button
            @click="openBoxMagic"
            class="px-8 py-4 border border-primary text-primary font-bold uppercase tracking-widest text-sm flex items-center gap-3 hover:bg-primary hover:text-black transition-colors"
          >
            Empezar Esta Semana
            <span class="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
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
    label: '01 / Activación',
    titulo: 'Despertar el Cuerpo',
    texto: 'No se entra frío. Movilidad articular, activación de core y cadera, patrones básicos a velocidad controlada. Cinco a diez minutos donde el cuerpo deja la silla atrás y se prepara para responder. Sin este paso, todo lo que viene después pega doble.',
    imagenIzquierda: true,
  },
  {
    label: '02 / Fuerza explosiva',
    titulo: 'Kettlebell y Peso Corporal',
    texto: 'Empujones, tirones, sentadillas, swings. Movimientos compuestos que reclutan todo el cuerpo a la vez — porque ningún golpe nace solo del brazo. Acá construís la fuerza que sostiene la técnica: piernas para cargar peso, core para transmitirlo, hombros para soltarlo.',
    imagenIzquierda: false,
  },
  {
    label: '03 / Capacidad metabólica',
    titulo: 'El Motor del Round',
    texto: 'Saco, cuerda, intervalos cortos al máximo. Acá entrenás la capacidad de seguir trabajando cuando los pulmones piden parar. Un round son tres minutos eternos — y este bloque te enseña a que el minuto tres se sienta igual de fuerte que el primero.',
    imagenIzquierda: true,
  },
];

const metodologia = [
  'Activación dinámica',
  'Fuerza compleja (kettlebell + peso corporal)',
  'Capacidad metabólica (saco + cuerda)',
  'Recovery + movilidad',
];

const estadisticas = [
  { valor: '60', label: 'Min/Sesión' },
  { valor: '450', label: 'Kcal Prom.' },
  { valor: '3×', label: 'Por Semana' },
  { valor: '0', label: 'Excusas', highlight: true },
];
</script>

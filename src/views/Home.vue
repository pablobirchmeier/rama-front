<template>
  <div class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white transition-colors duration-300">
    <Navbar />
    <main class="flex flex-col">
      <section class="relative min-h-[95vh] flex flex-col items-center justify-center overflow-hidden">
        <div class="absolute inset-0 z-0">
          <div class="absolute inset-0 hero-overlay z-10"></div>
          <video
            class="w-full h-full object-cover"
            poster="/inicio.jpg"
            src="/sparring/Sparring%20Profe%20Ramiro%20vs%20Omar.mp4"
            autoplay
            muted
            loop
            playsinline
            preload="auto"
          ></video>
        </div>
        <div class="relative z-20 max-w-[1000px] w-full px-6 text-center">
          <div class="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full border border-accent/50 bg-black/40 text-accent backdrop-blur-sm">
            <span class="material-symbols-outlined text-sm">workspace_premium</span>
            <span class="text-xs font-bold uppercase tracking-[0.25em]">Tradición • Respeto • Poder</span>
          </div>
          <img
            src="/logo_letra_negra.png"
            alt="Rama Muay Thai"
            class="mx-auto mb-8 w-full max-w-md md:max-w-2xl h-auto drop-shadow-2xl"
          />
          <p class="text-slate-200 text-lg md:text-2xl font-light max-w-2xl mx-auto mb-12 leading-relaxed">
            Domina el arte de las ocho extremidades en el corazón de la tradición. 
            Entrena con el espíritu de un guerrero Rama.
          </p>
          <div class="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <button class="w-full sm:w-auto min-w-[280px] h-16 bg-primary hover:brightness-110 text-black rounded-lg font-black text-xl shadow-2xl shadow-primary/30 transition-all flex items-center justify-center gap-3 uppercase tracking-widest border-b-4 border-black/20">
              Prueba Gratis
              <span class="material-symbols-outlined">shield</span>
            </button>
            <router-link to="/planes" class="w-full sm:w-auto min-w-[200px] h-16 border-2 border-primary/50 hover:bg-primary/10 text-primary rounded-lg font-bold text-lg backdrop-blur-sm transition-all uppercase tracking-widest flex items-center justify-center">
              Ver Planes
            </router-link>
          </div>
        </div>
        <div class="relative z-20 w-full max-w-[1100px] mx-auto mt-20 px-4">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="flex flex-col items-center justify-center gap-2 rounded-xl p-10 bg-black/60 backdrop-blur-xl border-t border-accent/30 shadow-2xl">
              <p class="text-gold-gradient text-4xl font-black">100+</p>
              <div class="h-px w-8 bg-primary mb-1"></div>
              <p class="text-slate-400 text-xs font-bold uppercase tracking-[0.3em]">Estudiantes</p>
            </div>
            <div class="flex flex-col items-center justify-center gap-2 rounded-xl p-10 bg-black/60 backdrop-blur-xl border-t border-accent/30 shadow-2xl">
              <p class="text-gold-gradient text-4xl font-black">Rama</p>
              <div class="h-px w-8 bg-primary mb-1"></div>
              <p class="text-slate-400 text-xs font-bold uppercase tracking-[0.3em]">Legado Tailandés</p>
            </div>
            <div class="flex flex-col items-center justify-center gap-2 rounded-xl p-10 bg-black/60 backdrop-blur-xl border-t border-accent/30 shadow-2xl">
              <p class="text-gold-gradient text-4xl font-black">40+</p>
              <div class="h-px w-8 bg-primary mb-1"></div>
              <p class="text-slate-400 text-xs font-bold uppercase tracking-[0.3em]">Clases Semanales</p>
            </div>
          </div>
        </div>
      </section>
      <section class="py-32 px-6 max-w-[1200px] mx-auto w-full">
        <div class="grid md:grid-cols-12 gap-16 items-center">
          <div class="md:col-span-5 flex flex-col gap-8">
            <div class="flex flex-col gap-2">
              <h2 class="text-accent text-sm font-black uppercase tracking-[0.5em]">Rama Muay Thai</h2>
              <div class="w-16 h-1 bg-primary"></div>
            </div>
            <h1 class="text-slate-900 dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-tight uppercase">
              HONOR, RESPETO Y<br/><span class="text-primary">DISCIPLINA</span>.
            </h1>
            <p class="text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-light">
              Nuestra escuela honra el linaje Rama. No solo formamos luchadores, sino personas con integridad y una técnica superior bajo la tradición tailandesa.
            </p>
            <div class="flex flex-col gap-8 mt-4">
              <div class="flex gap-5 items-start">
                <div class="p-4 bg-primary/10 rounded-xl text-accent border border-accent/20">
                  <span class="material-symbols-outlined text-2xl">verified_user</span>
                </div>
                <div>
                  <h3 class="text-slate-900 dark:text-accent font-bold text-xl mb-1 uppercase tracking-tight">Cultura Rama</h3>
                  <p class="text-slate-500 dark:text-slate-400 leading-snug">Preservamos la esencia del Muay Thai Boran y el respeto al maestro.</p>
                </div>
              </div>
              <div class="flex gap-5 items-start">
                <div class="p-4 bg-primary/10 rounded-xl text-accent border border-accent/20">
                  <span class="material-symbols-outlined text-2xl">electric_bolt</span>
                </div>
                <div>
                  <h3 class="text-slate-900 dark:text-accent font-bold text-xl mb-1 uppercase tracking-tight">Formación Integral</h3>
                  <p class="text-slate-500 dark:text-slate-400 leading-snug">Acondicionamiento físico extremo y técnica de alta competición.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="md:col-span-7 relative">
            <div class="flex flex-col gap-6">
              <div class="relative group">
                <div class="absolute -inset-1 bg-gradient-to-r from-accent to-primary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <img class="relative rounded-2xl shadow-2xl border-2 border-accent/20 object-cover w-full aspect-3/2" src="/1home.JPG" alt="Training at Rama Muay Thai" loading="lazy" decoding="async"/>
              </div>
              <div class="relative group">
                <div class="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <img class="relative rounded-2xl shadow-2xl border-2 border-accent/20 object-cover w-full aspect-3/2" src="/2home.JPG" alt="Rama Muay Thai Gear" loading="lazy" decoding="async"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SECCIÓN: TU CAMINO (progresión Formativo -> Amateur -> Combat) -->
      <section class="py-24 lg:py-32 px-6 max-w-[1400px] mx-auto w-full">
        <div class="flex flex-col items-center text-center gap-4 mb-14 lg:mb-20">
          <span class="text-primary font-bold tracking-[0.4em] uppercase text-xs">Tu Camino</span>
          <h2 class="text-4xl md:text-6xl font-black uppercase tracking-tight leading-[0.95]">
            De principiante a <span class="text-primary">guerrero</span>.
          </h2>
          <p class="max-w-2xl text-white/60 text-base md:text-lg font-light leading-relaxed">
            Cada alumno tiene un camino. El nuestro es claro: empiezas por la base, te ganas la confianza, y entras al ring cuando estés listo.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7">
          <router-link
            v-for="(nivel, i) in camino"
            :key="nivel.nombre"
            :to="nivel.to"
            class="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-primary/60 transition-all"
          >
            <div class="aspect-[3/4] relative">
              <img
                :src="nivel.imagen"
                :alt="nivel.nombre"
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10"></div>
              <div class="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                <span class="font-mono text-[10px] tracking-[0.4em] uppercase text-accent mb-3">0{{ i + 1 }} / {{ nivel.label }}</span>
                <h3 class="text-2xl md:text-3xl font-black uppercase tracking-tight mb-3">{{ nivel.nombre }}</h3>
                <p class="text-white/70 text-sm leading-relaxed mb-5">{{ nivel.texto }}</p>
                <span class="text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                  Ver clase <span class="material-symbols-outlined text-base">arrow_forward</span>
                </span>
              </div>
            </div>
          </router-link>
        </div>
      </section>

      <!-- SECCIÓN: NUESTRAS CLASES (grid de disciplinas) -->
      <section class="py-24 lg:py-32 bg-white/[0.015] border-y border-white/5">
        <div class="max-w-[1400px] mx-auto px-6">
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
            <div>
              <span class="text-primary font-bold tracking-[0.4em] uppercase text-xs">Disciplinas</span>
              <h2 class="text-4xl md:text-5xl font-black uppercase tracking-tight mt-3">Nuestras Clases</h2>
            </div>
            <p class="max-w-md text-white/55 text-base font-light leading-relaxed">
              Seis disciplinas, un mismo respeto al arte. Elige tu camino o pruébalas todas con el plan ilimitado.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            <router-link
              v-for="clase in clases"
              :key="clase.nombre"
              :to="clase.to"
              class="group relative rounded-xl overflow-hidden border border-white/10 hover:border-primary/60 transition-all"
            >
              <div class="aspect-[4/3] relative">
                <img
                  :src="clase.imagen"
                  :alt="clase.nombre"
                  class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>
                <div class="absolute inset-0 flex flex-col justify-end p-5 lg:p-6">
                  <h3 class="text-xl lg:text-2xl font-black uppercase tracking-tight mb-1">{{ clase.nombre }}</h3>
                  <p class="text-white/65 text-sm">{{ clase.tagline }}</p>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </section>

      <!-- SECCIÓN: TESTIMONIOS -->
      <section class="py-24 lg:py-32 px-6 max-w-[1400px] mx-auto w-full">
        <div class="flex flex-col items-center text-center gap-4 mb-14">
          <span class="text-primary font-bold tracking-[0.4em] uppercase text-xs">Lo que dicen</span>
          <h2 class="text-4xl md:text-5xl font-black uppercase tracking-tight">Voces de la Tribu</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="(t, i) in testimonios"
            :key="i"
            class="flex flex-col gap-5 p-7 lg:p-8 rounded-2xl border border-white/10 bg-white/[0.02]"
          >
            <span class="material-symbols-outlined text-primary text-3xl">format_quote</span>
            <p class="text-white/80 text-base lg:text-lg italic leading-relaxed flex-1">"{{ t.texto }}"</p>
            <div class="flex items-center gap-3 pt-4 border-t border-white/10">
              <div class="size-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-black">{{ t.inicial }}</div>
              <div>
                <p class="text-white font-bold text-sm">{{ t.nombre }}</p>
                <p class="text-white/50 text-[10px] uppercase tracking-widest">{{ t.tag }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SECCIÓN: CTA FINAL — "No importa por dónde empieces" -->
      <section class="relative py-28 lg:py-36 overflow-hidden border-t border-white/5">
        <div class="absolute inset-0 z-0">
          <img src="/inicio.jpg" alt="" class="w-full h-full object-cover opacity-15" loading="lazy" decoding="async"/>
          <div class="absolute inset-0 bg-gradient-to-b from-background-dark via-background-dark/85 to-background-dark"></div>
        </div>
        <div class="relative z-10 max-w-3xl mx-auto px-6 text-center flex flex-col items-center gap-7">
          <span class="font-mono text-xs tracking-[0.4em] uppercase text-accent">¿Nuevo en Muay Thai?</span>
          <h2 class="text-4xl md:text-6xl font-black uppercase leading-[0.95] tracking-tight">
            No importa por dónde<br /><span class="text-primary">empieces</span>.
          </h2>
          <p class="text-white/65 text-base md:text-lg font-light leading-relaxed max-w-2xl">
            Hayas tirado un golpe antes o no, hayas entrenado o no — el primer paso es el mismo. Una clase de prueba gratis, sin compromiso. Ven a ver de qué se trata.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 mt-4">
            <button
              @click="openBoxMagic"
              class="h-14 px-10 bg-primary text-black font-black uppercase tracking-widest text-sm rounded-lg hover:brightness-110 transition-all flex items-center justify-center gap-3"
            >
              Reservar Prueba Gratis
              <span class="material-symbols-outlined">shield</span>
            </button>
            <router-link
              to="/planes"
              class="h-14 px-10 border border-white/30 text-white font-bold uppercase tracking-widest text-sm rounded-lg hover:border-primary hover:text-primary transition-all flex items-center justify-center"
            >
              Ver Planes
            </router-link>
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

// Progresión Formativo -> Amateur -> Combat
const camino = [
  {
    label: 'Inicial',
    nombre: 'Formativo',
    texto: 'Sin experiencia previa. Aquí aprendes la guardia, los ocho golpes sagrados y la disciplina del salón. El primer paso para todos.',
    imagen: '/foto_ejemplo.JPG',
    to: '/clases/muay-thai-formativo',
  },
  {
    label: 'Intermedio',
    nombre: 'Amateur',
    texto: 'Ya tienes base. Aquí encadenas combinaciones, trabajas clinch y das tu primer paso al sparring controlado.',
    imagen: '/foto1.JPG',
    to: '/clases/muay-thai-amateur',
  },
  {
    label: 'Avanzado',
    nombre: 'Combat',
    texto: 'Entras al ring. Sparring real, lectura del rival, gestión del miedo. El nivel donde se entrena para competir.',
    imagen: '/2home.JPG',
    to: '/clases/muay-thai-combat',
  },
];

// Grid de disciplinas
const clases = [
  { nombre: 'Muay Thai Formativo', tagline: 'Fundamento y base técnica', imagen: '/foto_ejemplo.JPG', to: '/clases/muay-thai-formativo' },
  { nombre: 'Muay Thai Amateur', tagline: 'Combinaciones y clinch', imagen: '/foto1.JPG', to: '/clases/muay-thai-amateur' },
  { nombre: 'Muay Thai Combat', tagline: 'Equipo avanzado, ring real', imagen: '/2home.JPG', to: '/clases/muay-thai-combat' },
  { nombre: 'Muay Thai Women', tagline: 'Espacio exclusivo para mujeres', imagen: '/women/womenmt.jpeg', to: '/clases/muay-thai-women' },
  { nombre: 'Cross Training', tagline: 'Acondicionamiento marcial', imagen: '/1home.JPG', to: '/clases/cross-training' },
  { nombre: 'Brazilian JiuJitsu', tagline: 'Ajedrez de suelo', imagen: '/inicio.jpg', to: '/clases/brazilian-jiujitsu' },
];

// Testimonios (placeholders — reemplazar con nombres/textos reales)
const testimonios = [
  {
    texto: 'Entré sin saber tirar un jab. Hoy llevo 8 meses y me siento parte de algo más grande que solo un gimnasio.',
    nombre: 'Camilo R.',
    inicial: 'C',
    tag: 'Alumno · 8 meses',
  },
  {
    texto: 'Lo que más me sorprendió no fue la técnica, fue el respeto. Aquí te enseñan que el Muay Thai empieza en cómo entras al salón.',
    nombre: 'Macarena L.',
    inicial: 'M',
    tag: 'Alumna · 1 año',
  },
  {
    texto: 'Probé varios gimnasios. Rama es distinto: hay tradición, hay nivel, y nadie te trata como un número.',
    nombre: 'Diego F.',
    inicial: 'D',
    tag: 'Amateur · 2 años',
  },
];
</script>

<style scoped>
.hero-overlay {
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.95));
}
.text-gold-gradient {
  background: linear-gradient(to bottom right, #FFD700, #FBBF24, #DAA520);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>

<template>
  <div class="bg-background-dark text-white">
    <Navbar />
    <!-- Textos: "HOME — RAMA MUAY THAI, versión actualizada octubre 2026" (enviado por el dueño) -->
    <main class="flex flex-col">
      <!-- 01. INICIO -->
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
        <div class="revelar relative z-20 max-w-[1000px] w-full px-6 py-24 text-center flex flex-col items-center">
          <h1 class="text-4xl md:text-7xl font-black uppercase leading-[0.95] tracking-tight mb-8">
            Entrena Muay Thai.<br /><span class="text-primary">Sé parte de Rama.</span>
          </h1>
          <p class="text-slate-200 text-lg md:text-2xl font-light max-w-2xl mx-auto mb-6 leading-relaxed">
            Aprende, entrena y supérate en una escuela que combina tradición marcial, formación deportiva y comunidad.
          </p>
          <p class="text-primary font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-4">
            Desde 2015 formando alumnos de todos los niveles.
          </p>
          <p class="text-white font-bold text-base md:text-lg mb-12">
            No necesitas experiencia previa. Solo las ganas de comenzar.
          </p>
          <button
            @click="openBoxMagic"
            class="w-full sm:w-auto min-w-[300px] h-16 px-8 bg-primary hover:brightness-110 text-black rounded-lg font-black text-lg shadow-2xl shadow-primary/30 transition-all flex items-center justify-center gap-3 uppercase tracking-widest border-b-4 border-black/20"
          >
            Agenda tu clase de prueba
            <span class="material-symbols-outlined">arrow_forward</span>
          </button>
          <button
            @click="scrollTo('esencia')"
            class="mt-4 w-full sm:w-auto min-w-[300px] h-14 px-8 border-2 border-primary/50 hover:bg-primary/10 text-primary rounded-lg font-bold text-sm uppercase tracking-widest backdrop-blur-sm transition-all flex items-center justify-center gap-3"
          >
            Conoce Rama
            <span class="material-symbols-outlined">arrow_downward</span>
          </button>
        </div>
      </section>

      <!-- 02. NUESTRA ESENCIA -->
      <section id="esencia" class="scroll-mt-20 py-24 lg:py-32 px-6 max-w-[1200px] mx-auto w-full">
        <div class="grid md:grid-cols-12 gap-16 items-center">
          <div class="md:col-span-5 flex flex-col gap-8">
            <div class="flex flex-col gap-2">
              <span class="text-accent text-xs font-black uppercase tracking-[0.4em]">Nuestra esencia</span>
              <div class="w-16 h-1 bg-primary"></div>
            </div>
            <h2 class="text-4xl md:text-5xl font-black leading-tight tracking-tight uppercase">
              Mucho más que <span class="text-primary">entrenar</span>
            </h2>
            <p class="text-white/70 text-lg leading-relaxed font-light">
              En Rama entendemos las artes marciales como un camino de aprendizaje, disciplina y superación.
            </p>
            <p class="text-white/70 text-lg leading-relaxed font-light">
              Ya sea que busques mejorar tu condición física, aprender Muay Thai o prepararte para competir, aquí encontrarás un espacio para progresar a tu ritmo.
            </p>
            <p class="text-primary font-black uppercase tracking-[0.15em] text-sm md:text-base">
              Respeto. Disciplina. Compañerismo. Superación.
            </p>
          </div>
          <div class="md:col-span-7 flex flex-col gap-6">
            <div class="relative group">
              <div class="absolute -inset-1 bg-gradient-to-r from-accent to-primary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <img class="relative rounded-2xl shadow-2xl border-2 border-accent/20 object-cover w-full aspect-3/2" src="/1home.JPG" alt="Entrenamiento en Rama Muay Thai" loading="lazy" decoding="async"/>
            </div>
            <div class="relative group">
              <div class="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <img class="relative rounded-2xl shadow-2xl border-2 border-accent/20 object-cover w-full aspect-3/2" src="/2home.JPG" alt="Comunidad Rama Muay Thai" loading="lazy" decoding="async"/>
            </div>
          </div>
        </div>
      </section>

      <!-- 03. PROGRAMAS DE MUAY THAI -->
      <section class="py-24 lg:py-32 px-6 max-w-[1400px] mx-auto w-full">
        <div class="flex flex-col items-center text-center gap-4 mb-14 lg:mb-20">
          <span class="text-primary font-bold tracking-[0.4em] uppercase text-xs">Programas de Muay Thai</span>
          <h2 class="text-4xl md:text-6xl font-black uppercase tracking-tight leading-[0.95]">
            Un camino para <span class="text-primary">cada nivel</span>
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7">
          <router-link
            v-for="(nivel, i) in niveles"
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
              <div class="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/10"></div>
              <div class="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                <span class="font-mono text-[10px] tracking-[0.4em] uppercase text-accent mb-3">0{{ i + 1 }} / Muay Thai</span>
                <h3 class="text-2xl md:text-3xl font-black uppercase tracking-tight mb-1">{{ nivel.nombre }}</h3>
                <p class="text-primary font-bold text-sm uppercase tracking-wider mb-3">{{ nivel.lema }}</p>
                <p class="text-white/75 text-sm leading-relaxed mb-5">{{ nivel.texto }}</p>
                <span class="text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                  Ver clase <span class="material-symbols-outlined text-base">arrow_forward</span>
                </span>
              </div>
            </div>
          </router-link>
        </div>

        <div class="flex justify-center mt-12">
          <router-link
            to="/clases/muay-thai-formativo"
            class="h-14 px-10 border-2 border-primary/50 hover:bg-primary/10 text-primary rounded-lg font-bold text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-3"
          >
            Conoce nuestros programas
            <span class="material-symbols-outlined">arrow_forward</span>
          </router-link>
        </div>
      </section>

      <!-- 04. ENTRENAMIENTOS COMPLEMENTARIOS -->
      <section class="py-24 lg:py-32 bg-white/[0.015] border-y border-white/5">
        <div class="max-w-[1100px] mx-auto px-6">
          <div class="flex flex-col items-center text-center gap-4 mb-12 lg:mb-16">
            <span class="text-primary font-bold tracking-[0.4em] uppercase text-xs">Entrenamientos complementarios</span>
            <h2 class="text-4xl md:text-5xl font-black uppercase tracking-tight">Potencia tu <span class="text-primary">entrenamiento</span></h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            <router-link
              v-for="item in complementarios"
              :key="item.nombre"
              :to="item.to"
              class="group flex flex-col rounded-xl overflow-hidden border border-white/10 hover:border-primary/60 bg-black transition-all"
            >
              <div class="aspect-[16/9] relative overflow-hidden">
                <img
                  :src="item.imagen"
                  :alt="item.nombre"
                  class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              </div>
              <div class="flex flex-col gap-3 p-6 lg:p-7 flex-1">
                <h3 class="text-xl lg:text-2xl font-black uppercase tracking-tight text-primary">{{ item.nombre }}</h3>
                <p class="text-white font-bold text-sm">{{ item.lema }}</p>
                <p class="text-white/70 text-sm leading-relaxed flex-1">{{ item.texto }}</p>
                <span class="text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all mt-2">
                  {{ item.accion }} <span class="material-symbols-outlined text-base">arrow_forward</span>
                </span>
              </div>
            </router-link>
          </div>

          <div class="flex justify-center mt-12">
            <router-link
              to="/clases/cross-training"
              class="h-14 px-10 border-2 border-primary/50 hover:bg-primary/10 text-primary rounded-lg font-bold text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-3"
            >
              Explora nuestros entrenamientos
              <span class="material-symbols-outlined">arrow_forward</span>
            </router-link>
          </div>
        </div>
      </section>

      <!-- 05. TEAM RAMA -->
      <section class="py-24 lg:py-32 px-6 max-w-3xl mx-auto w-full">
        <div class="flex flex-col items-center text-center">
          <div class="flex flex-col items-center gap-6">
            <span class="text-primary font-bold tracking-[0.4em] uppercase text-xs">Team Rama</span>
            <h2 class="text-4xl md:text-6xl font-black uppercase tracking-tight leading-[0.95]">
              De la escuela<br />al <span class="text-primary">ring</span>
            </h2>
            <p class="text-white/80 text-lg leading-relaxed">
              Nuestra formación también se refleja en el ámbito competitivo.
            </p>
            <p class="text-white/60 text-base leading-relaxed font-light">
              Team Rama reúne a deportistas amateur y profesionales que representan a la escuela en distintas competencias.
            </p>
            <div class="border-y border-primary/40 py-4">
              <p class="text-white text-base leading-relaxed">
                No necesitas competir para pertenecer a Rama.<br />
                <span class="text-primary font-bold">Pero si decides hacerlo, tenemos un camino para ti.</span>
              </p>
            </div>
            <router-link
              to="/clases/muay-thai-combat"
              class="h-14 px-8 border-2 border-primary/50 hover:bg-primary/10 text-primary rounded-lg font-bold text-sm uppercase tracking-widest transition-all flex items-center gap-3"
            >
              Conoce Team Rama
              <span class="material-symbols-outlined">arrow_forward</span>
            </router-link>
          </div>
        </div>
      </section>

      <!-- 06. TU PRIMERA CLASE -->
      <section class="py-24 lg:py-32 bg-white/[0.015] border-y border-white/5">
        <div class="max-w-[1300px] mx-auto px-6">
          <div class="flex flex-col items-center text-center gap-4 mb-14">
            <span class="text-primary font-bold tracking-[0.4em] uppercase text-xs">Tu primera clase</span>
            <h2 class="text-4xl md:text-6xl font-black uppercase tracking-tight leading-[0.95]">
              Todos comenzamos <span class="text-primary">desde cero</span>
            </h2>
            <p class="max-w-2xl text-white/70 text-base md:text-lg font-light leading-relaxed">
              ¿Nunca has entrenado Muay Thai? Estás en el lugar indicado.
            </p>
            <p class="text-white font-bold text-lg">Te enseñaremos paso a paso, sin necesidad de experiencia previa.</p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div
              v-for="(paso, i) in pasos"
              :key="paso.titulo"
              class="relative flex flex-col gap-3 p-7 rounded-2xl border border-white/10 bg-black"
            >
              <span class="text-gold-gradient text-5xl font-black leading-none">{{ i + 1 }}</span>
              <h3 class="text-white font-black uppercase tracking-tight text-lg">{{ paso.titulo }}</h3>
              <p class="text-white/55 text-sm leading-relaxed">{{ paso.texto }}</p>
            </div>
          </div>

          <div class="flex justify-center mt-14">
            <button
              @click="openBoxMagic"
              class="w-full sm:w-auto min-w-[300px] h-16 px-8 bg-primary hover:brightness-110 text-black rounded-lg font-black text-lg shadow-2xl shadow-primary/30 transition-all flex items-center justify-center gap-3 uppercase tracking-widest border-b-4 border-black/20"
            >
              Agenda tu clase de prueba
              <span class="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      <!-- 07. PLANES Y HORARIOS -->
      <section class="py-24 lg:py-28 px-6">
        <div class="max-w-3xl mx-auto flex flex-col items-center text-center gap-6">
          <span class="text-primary font-bold tracking-[0.4em] uppercase text-xs">Planes y horarios</span>
          <h2 class="text-4xl md:text-5xl font-black uppercase tracking-tight leading-[0.95]">
            Entrena a <span class="text-primary">tu ritmo</span>
          </h2>
          <p class="text-white/70 text-base md:text-lg font-light leading-relaxed">
            Contamos con diferentes planes y horarios para que puedas entrenar según tu disponibilidad y objetivos.
          </p>
          <p class="text-white/70 text-base md:text-lg font-light leading-relaxed">
            Clases de Muay Thai y Cross Training durante la mañana, mediodía y tarde, además de entrenamientos personalizados.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
            <router-link
              to="/planes"
              class="h-14 px-10 bg-primary text-black font-black uppercase tracking-widest text-sm rounded-lg hover:brightness-110 transition-all flex items-center justify-center gap-3"
            >
              Ver planes y valores
              <span class="material-symbols-outlined">arrow_forward</span>
            </router-link>
            <router-link
              to="/horarios"
              class="h-14 px-10 border-2 border-primary/50 hover:bg-primary/10 text-primary rounded-lg font-bold text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-3"
            >
              Revisar horarios
              <span class="material-symbols-outlined">calendar_month</span>
            </router-link>
          </div>
        </div>
      </section>

      <!-- 08. EQUIPO Y TRAYECTORIA -->
      <section class="py-24 lg:py-32 bg-white/[0.015] border-y border-white/5 px-6">
        <div class="max-w-3xl mx-auto flex flex-col items-center text-center gap-6">
          <span class="text-primary font-bold tracking-[0.4em] uppercase text-xs">Equipo y trayectoria</span>
          <h2 class="text-4xl md:text-6xl font-black uppercase tracking-tight leading-[0.95]">
            Desde <span class="text-primary">2015</span> formando personas y deportistas
          </h2>
          <p class="text-white/70 text-lg leading-relaxed font-light">
            Rama nació con el propósito de enseñar Muay Thai a través de la disciplina, la técnica y el respeto por sus tradiciones.
          </p>
          <p class="text-white/70 text-lg leading-relaxed font-light">
            Hoy reunimos alumnos recreativos, deportistas y competidores bajo una misma comunidad.
          </p>
          <p class="text-white text-lg font-bold">
            Nuestro equipo de profesores te acompañará en cada etapa de tu aprendizaje.
          </p>
          <router-link
            to="/horarios"
            class="mt-2 h-14 px-10 border-2 border-primary/50 hover:bg-primary/10 text-primary rounded-lg font-bold text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-3"
          >
            Conoce nuestra escuela
            <span class="material-symbols-outlined">arrow_forward</span>
          </router-link>
        </div>
      </section>

      <!-- 09. GALERÍA -->
      <section class="py-24 lg:py-32">
        <div class="max-w-[1400px] mx-auto px-6">
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div class="flex flex-col gap-3">
              <span class="text-primary font-bold tracking-[0.4em] uppercase text-xs">Galería</span>
              <h2 class="text-4xl md:text-5xl font-black uppercase tracking-tight">Así se vive <span class="text-primary">Rama</span></h2>
              <p class="max-w-xl text-white/60 text-base font-light leading-relaxed">
                Entrenamientos, seminarios, competencias y momentos que forman parte de nuestra comunidad.
              </p>
            </div>
            <p class="text-white/80 text-lg md:text-right leading-snug">
              Rama no solamente se explica.<br /><span class="text-primary font-black uppercase">Se vive.</span>
            </p>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[220px] gap-3 md:gap-4">
            <div
              v-for="foto in galeria"
              :key="foto.src"
              class="relative rounded-xl overflow-hidden group"
              :class="foto.clase"
            >
              <img
                :src="foto.src"
                :alt="foto.alt"
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- 10. UBICACIÓN -->
      <section class="py-24 lg:py-32 bg-white/[0.015] border-y border-white/5">
        <div class="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          <div class="lg:col-span-5 flex flex-col justify-center gap-6">
            <span class="text-primary font-bold tracking-[0.4em] uppercase text-xs">Ubicación</span>
            <h2 class="text-4xl md:text-5xl font-black uppercase tracking-tight leading-[0.95]">
              Te esperamos en <span class="text-primary">Barrio Italia</span>
            </h2>
            <div class="flex gap-4 items-center">
              <div class="size-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <span class="material-symbols-outlined text-primary">location_on</span>
              </div>
              <p class="text-white text-lg leading-snug">Tegualda 1895, Ñuñoa, Santiago.</p>
            </div>
            <p class="text-white/60 text-base font-light leading-relaxed">
              Ven a conocer nuestra escuela, nuestro equipo y nuestra comunidad.
            </p>
            <div class="flex flex-col sm:flex-row gap-3">
              <a
                :href="MAPS_URL"
                target="_blank"
                rel="noopener"
                class="h-14 px-7 bg-primary text-black font-black uppercase tracking-widest text-xs rounded-lg hover:brightness-110 transition-all flex items-center justify-center gap-2"
              >
                <span class="material-symbols-outlined text-lg">directions</span>
                Cómo llegar
              </a>
              <button
                @click="openWhatsApp()"
                class="h-14 px-7 bg-[#25D366] text-white font-bold uppercase tracking-widest text-xs rounded-lg hover:brightness-110 transition-all flex items-center justify-center gap-2"
              >
                <IconoWhatsApp class="size-5" />
                Hablar por WhatsApp
              </button>
            </div>
          </div>
          <div class="lg:col-span-7 h-[380px] lg:h-[450px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.9144699268622!2d-70.62505492346145!3d-33.45153479756916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c57d4fc3a813%3A0x6e5c7fe96c3a1c73!2zVGVndWFsZGEgMTg5NSwgw5F1w7FvYSwgUmVnacOzbiBNZXRyb3BvbGl0YW5h!5e0!3m2!1ses!2scl!4v1768700809075!5m2!1ses!2scl"
              width="100%"
              height="100%"
              style="border:0; filter: invert(90%) hue-rotate(180deg) brightness(85%) contrast(100%);"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Ubicación Rama Muay Thai"
            ></iframe>
          </div>
        </div>
      </section>

      <!-- 11. CIERRE -->
      <section class="relative py-28 lg:py-36 overflow-hidden">
        <div class="absolute inset-0 z-0">
          <img src="/inicio.jpg" alt="" class="w-full h-full object-cover opacity-15" loading="lazy" decoding="async"/>
          <div class="absolute inset-0 bg-gradient-to-b from-background-dark via-background-dark/85 to-background-dark"></div>
        </div>
        <div class="relative z-10 max-w-3xl mx-auto px-6 text-center flex flex-col items-center gap-6">
          <h2 class="text-4xl md:text-6xl font-black uppercase leading-[0.95] tracking-tight">
            Tu camino <span class="text-primary">comienza aquí</span>
          </h2>
          <p class="text-white/65 text-base md:text-lg font-light leading-relaxed max-w-2xl">
            No importa tu experiencia ni tu objetivo.
          </p>
          <p class="text-white text-lg md:text-xl font-bold">
            Hay un lugar para ti en Rama.
          </p>
          <button
            @click="openBoxMagic"
            class="mt-4 w-full sm:w-auto min-w-[300px] h-16 px-8 bg-primary hover:brightness-110 text-black rounded-lg font-black text-lg shadow-2xl shadow-primary/30 transition-all flex items-center justify-center gap-3 uppercase tracking-widest border-b-4 border-black/20"
          >
            Agenda tu clase de prueba
            <span class="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '../layouts/Navbar.vue';
import Footer from '../layouts/Footer.vue';
import IconoWhatsApp from '../components/IconoWhatsApp.vue';
import { openBoxMagic, openWhatsApp, MAPS_URL } from '../utils/deepLinking';
import { programas } from '../data/clases';

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

// Programas de Muay Thai (mismo texto que el encabezado de cada página de clase: src/data/clases.js)
const niveles = [
  { ...programas.formativo, nombre: 'Formativo', imagen: '/foto_ejemplo.JPG', to: '/clases/muay-thai-formativo' },
  { ...programas.amateur, nombre: 'Amateur', imagen: '/foto1.JPG', to: '/clases/muay-thai-amateur' },
  { ...programas.combat, nombre: 'Combat', imagen: '/2home.JPG', to: '/clases/muay-thai-combat' },
];

// Entrenamientos complementarios. Personalizado lleva a Planes (ahí están los planes personalizados).
const complementarios = [
  {
    nombre: 'Cross Training',
    lema: 'Más fuerza. Más resistencia. Mejor rendimiento.',
    texto: 'Desarrolla fuerza, resistencia, potencia y movilidad mediante entrenamientos que complementan tu preparación física.',
    imagen: '/1home.JPG',
    to: '/clases/cross-training',
    accion: 'Ver clase',
  },
  {
    nombre: 'Entrenamiento Personalizado',
    lema: 'Un entrenamiento diseñado para ti.',
    texto: 'Sesiones individuales adaptadas a tus objetivos y nivel de experiencia, con atención personalizada para mejorar tu técnica y condición física.',
    imagen: '/foto1.JPG',
    to: '/planes',
    accion: 'Ver planes',
  },
];

// Galería: reemplazar/agregar fotos de seminarios, competencias y eventos cuando lleguen
const galeria = [
  { src: '/1home.JPG', alt: 'Entrenamiento', clase: 'col-span-2 row-span-2' },
  { src: '/foto1.JPG', alt: 'Clase de Muay Thai', clase: '' },
  { src: '/women/womenmt.jpeg', alt: 'Comunidad Rama', clase: 'row-span-2' },
  { src: '/foto_ejemplo.JPG', alt: 'Técnica', clase: '' },
  { src: '/2home.JPG', alt: 'Equipo Rama', clase: 'col-span-2' },
  { src: '/inicio.jpg', alt: 'Escuela Rama', clase: 'col-span-2' },
];

const pasos = [
  { titulo: 'Agenda tu clase.', texto: 'Elige un horario disponible.' },
  { titulo: 'Ven a entrenar.', texto: 'Nuestro equipo te recibirá y orientará.' },
  { titulo: 'Vive la experiencia.', texto: 'Conoce nuestra metodología, profesores y comunidad.' },
  { titulo: 'Continúa tu camino.', texto: 'Te ayudamos a elegir el plan adecuado para ti.' },
];
</script>

<style scoped>
.hero-overlay {
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.95));
}
/* Hero: espera 2.5s (solo video) y luego todo el contenido aparece junto en 2s */
.revelar {
  animation: revelar 2s ease-out 2.5s both;
}
@keyframes revelar {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@media (prefers-reduced-motion: reduce) {
  .revelar {
    animation: none;
  }
}
.text-gold-gradient {
  background: linear-gradient(to bottom right, #FFD700, #FBBF24, #DAA520);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>

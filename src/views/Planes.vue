<template>
  <div class="bg-background-dark font-display text-white min-h-screen">
    <div class="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div class="layout-container flex h-full grow flex-col">
        <Navbar />

        <main class="flex flex-col flex-1 max-w-[1200px] mx-auto w-full px-4 md:px-10">
          <!-- Pricing Section -->
          <section class="py-16" id="pricing">
            <div class="text-center mb-12">
              <span class="text-primary font-bold tracking-[0.2em] uppercase text-xs">Elige tu Camino</span>
              <h2 class="text-white text-4xl md:text-5xl font-black leading-tight tracking-tight mt-2 italic uppercase">PLANES 2026</h2>
            </div>

            <!-- Matrícula (pago único) -->
            <div class="flex flex-col sm:flex-row items-center justify-between gap-5 rounded-2xl border border-primary/30 bg-primary/[0.06] px-6 md:px-8 py-6 mb-16 shadow-[0_0_40px_rgba(255,215,0,0.07)]">
              <div class="flex items-center gap-4 text-center sm:text-left">
                <div class="size-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span class="material-symbols-outlined text-primary text-2xl">badge</span>
                </div>
                <div>
                  <p class="text-white text-lg font-black uppercase italic tracking-tight">{{ matricula.name }}</p>
                  <p class="text-white/50 text-xs uppercase tracking-wide">{{ matricula.description }}</p>
                </div>
              </div>
              <span class="text-primary text-3xl md:text-4xl font-black tracking-tight">{{ matricula.price }}</span>
            </div>

            <!-- Plan categories -->
            <div class="flex flex-col gap-20">
              <div v-for="cat in categorias" :key="cat.id" class="flex flex-col gap-8">
                <div class="flex flex-col gap-1">
                  <span class="text-primary font-bold tracking-[0.2em] uppercase text-xs">{{ cat.eyebrow }}</span>
                  <h3 class="text-white text-3xl font-black tracking-tight italic uppercase">{{ cat.title }}</h3>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6" :class="cat.cols">
                  <div
                    v-for="(plan, i) in cat.planes"
                    :key="i"
                    class="group flex flex-col gap-5 rounded-xl border p-8 transition-all h-full"
                    :class="cat.featured ? 'border-primary/40 bg-primary/[0.04] hover:border-primary' : 'border-white/10 bg-[#331919]/40 hover:border-primary/50'"
                  >
                    <div class="flex items-center justify-between gap-2 min-h-[24px]">
                      <span class="text-primary/80 text-[10px] font-black uppercase tracking-[0.2em]">{{ plan.periodo }}</span>
                      <span v-if="plan.badge" class="rounded-full bg-primary/15 text-primary text-[9px] font-black uppercase tracking-widest px-2.5 py-1 whitespace-nowrap">{{ plan.badge }}</span>
                    </div>

                    <h4 class="text-white text-xl font-black uppercase italic tracking-tight leading-none">{{ plan.name }}</h4>

                    <div class="flex items-baseline gap-1">
                      <span class="text-white text-4xl font-black tracking-tight">{{ plan.price }}</span>
                      <span class="text-white/40 text-sm font-medium">/plan</span>
                    </div>

                    <p class="text-white/50 text-xs leading-relaxed flex-1">{{ plan.description }}</p>

                    <button
                      @click="openBoxMagic"
                      class="w-full flex cursor-pointer items-center justify-center rounded-lg h-12 text-sm font-bold uppercase tracking-widest transition-colors mt-auto"
                      :class="cat.featured ? 'bg-primary text-black hover:brightness-110' : 'bg-white/10 text-white hover:bg-white/20'"
                    >
                      Empezar
                    </button>
                  </div>
                </div>
              </div>

              <!-- Convenios -->
              <div class="flex flex-col gap-8">
                <div class="flex flex-col gap-1">
                  <span class="text-primary font-bold tracking-[0.2em] uppercase text-xs">Bienestar &amp; Recuperación</span>
                  <h3 class="text-white text-3xl font-black tracking-tight italic uppercase">Convenios</h3>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div
                    v-for="(conv, i) in convenios"
                    :key="i"
                    class="group flex flex-col gap-5 rounded-xl border border-white/10 bg-white/[0.03] p-8 hover:border-primary/50 transition-all h-full"
                  >
                    <div class="size-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <span class="material-symbols-outlined text-primary text-2xl">{{ conv.icon }}</span>
                    </div>
                    <h4 class="text-white text-lg font-black uppercase italic tracking-tight leading-tight">{{ conv.name }}</h4>
                    <p class="text-white/50 text-xs leading-relaxed flex-1">{{ conv.description }}</p>
                    <div class="flex items-baseline gap-1 pt-2 border-t border-white/5">
                      <span class="text-white text-3xl font-black tracking-tight">{{ conv.price }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Gallery Section -->
          <section class="py-16" id="gallery">
            <div class="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
              <div>
                <span class="text-primary font-bold tracking-[0.2em] uppercase text-xs">La Arena</span>
                <h2 class="text-white text-4xl font-black tracking-tight mt-2 italic uppercase">DENTRO DEL RING</h2>
              </div>
              <p class="text-white/60 max-w-xs text-sm">Vive la intensidad, la disciplina y la energía de nuestro centro de entrenamiento de alto rendimiento.</p>
            </div>
            <div class="masonry-grid">
              <div class="masonry-item-tall rounded-xl overflow-hidden group relative">
                <img src="/1home.JPG" alt="Trabajo de Pads" class="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p class="text-xs font-bold uppercase tracking-widest">Trabajo de Pads</p>
                </div>
              </div>
              <div class="rounded-xl overflow-hidden group relative">
                <img src="/2home.JPG" alt="Sparring Rama" class="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" />
                <div class="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div class="masonry-item-wide rounded-xl overflow-hidden group relative">
                <img src="/foto1.JPG" alt="Entrenamiento de grupo" class="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" />
                <div class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span class="material-symbols-outlined text-6xl text-primary">play_circle</span>
                </div>
              </div>
              <div class="rounded-xl overflow-hidden group relative">
                <img src="/foto_ejemplo.JPG" alt="Técnica" class="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" />
              </div>
              <div class="masonry-item-tall rounded-xl overflow-hidden group relative">
                <img src="/inicio.jpg" alt="Centro de entrenamiento Rama" class="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" />
              </div>
            </div>
          </section>

          <!-- Location Section -->
          <section class="py-16" id="location">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
              <div class="lg:col-span-5 flex flex-col justify-center">
                <span class="text-primary font-bold tracking-[0.2em] uppercase text-xs">Contacto</span>
                <h2 class="text-white text-4xl font-black tracking-tight mt-2 italic mb-6">ENCUÉNTRANOS</h2>
                <div class="space-y-6">
                  <div class="flex gap-4">
                    <div class="size-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                      <span class="material-symbols-outlined text-primary">location_on</span>
                    </div>
                    <div>
                      <p class="text-sm font-bold uppercase text-white/40 mb-1">Nuestro Dojo</p>
                      <p class="text-white text-lg">Tegualda 1895, 7770355 Ñuñoa<br/>Región Metropolitana, Chile</p>
                    </div>
                  </div>
                  <div class="flex gap-4">
                    <div class="size-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                      <span class="material-symbols-outlined text-primary">schedule</span>
                    </div>
                    <div>
                      <p class="text-sm font-bold uppercase text-white/40 mb-1">Horarios de Entrenamiento</p>
                      <p class="text-white">Lun - Sáb: 07:00 AM - 09:00 PM</p>
                      <p class="text-white/60 text-sm italic">Cerrado Domingos y Feriados</p>
                    </div>
                  </div>
                  <div class="flex gap-4">
                    <div class="size-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                      <span class="material-symbols-outlined text-primary">call</span>
                    </div>
                    <div>
                      <p class="text-sm font-bold uppercase text-white/40 mb-1">Ponte en Contacto</p>
                      <p class="text-white text-lg font-bold">+56 9 1234 5678</p>
                      <p class="text-white/60">ramamuaythaiboxing@gmail.com</p>
                    </div>
                  </div>
                  <!-- Social Media Buttons -->
                  <div class="flex gap-4 mt-4">
                    <button @click="openInstagram" class="size-12 cursor-pointer rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black transition-all group shadow-lg">
                      <svg class="size-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.247 2.242 1.308 3.607.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.247-3.607 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.247-2.242-1.308-3.607-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.247 3.607-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    </button>
                    <button @click="openFacebook" class="size-12 cursor-pointer rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black transition-all group shadow-lg">
                      <svg class="size-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="lg:col-span-7 h-[450px] bg-white/5 rounded-2xl relative overflow-hidden group border border-white/10 shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.9144699268622!2d-70.62505492346145!3d-33.45153479756916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c57d4fc3a813%3A0x6e5c7fe96c3a1c73!2zVGVndWFsZGEgMTg5NSwgw5F1w7FvYSwgUmVnacOzbiBNZXRyb3BvbGl0YW5h!5e0!3m2!1ses!2scl!4v1768700809075!5m2!1ses!2scl"
                  width="100%"
                  height="100%"
                  style="border:0; filter: invert(90%) hue-rotate(180deg) brightness(85%) contrast(100%);"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  class="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from '../layouts/Navbar.vue';
import Footer from '../layouts/Footer.vue';
import { openBoxMagic, openInstagram, openFacebook } from '../utils/deepLinking';

// Matrícula (pago único)
const matricula = {
  name: 'Matrícula',
  price: '$25.000',
  description: 'Inscripción inicial · Pago único',
};

// Planes 2026 agrupados por categoría
const categorias = [
  {
    id: 'basico',
    eyebrow: 'Para empezar',
    title: 'Plan Básico',
    cols: 'lg:grid-cols-3',
    planes: [
      {
        name: 'Plan 8 Clases',
        periodo: '8 clases mensuales',
        price: '$50.000',
        description: 'Acceso solo a clases de Muay Thai y Cross. 8 clases con vigencia de 30 días.',
      },
      {
        name: 'Plan Estudiante',
        periodo: '12 clases mensuales',
        price: '$48.000',
        description: 'Acceso a clases de Muay Thai, Cross y Grappling. Presentar certificado de alumno regular (enseñanza básica, media o universitaria). 12 clases libres con vigencia de 30 días.',
      },
      {
        name: 'Plan Grappling',
        periodo: '12 clases mensuales',
        price: '$50.000',
        description: 'Acceso solo a clases de Grappling / Jiu Jitsu. 12 clases con vigencia de 30 días.',
      },
    ],
  },
  {
    id: 'standard',
    eyebrow: 'El más elegido',
    title: 'Plan Standard',
    cols: 'lg:grid-cols-4',
    planes: [
      {
        name: 'Plan 12 Clases',
        periodo: '12 clases mensuales',
        price: '$55.000',
        description: 'Acceso a clases de Muay Thai y Cross. 12 clases libres con vigencia de 30 días.',
      },
      {
        name: 'Plan 20 Clases',
        periodo: '20 clases mensuales',
        price: '$65.000',
        description: 'Acceso a clases de Muay Thai y Cross. 20 clases libres con vigencia de 30 días.',
      },
      {
        name: 'Plan 20 Clases',
        periodo: '20 clases libres',
        badge: 'Trimestral',
        price: '$180.000',
        description: 'Acceso a clases de Muay Thai y Cross. 20 clases libres con vigencia de 30 días.',
      },
      {
        name: 'Plan 20 Clases',
        periodo: '20 clases libres',
        badge: 'Semestral',
        price: '$351.000',
        description: 'Acceso a clases de Muay Thai y Cross. 20 clases libres con vigencia de 30 días.',
      },
    ],
  },
  {
    id: 'premium',
    eyebrow: 'Acceso total',
    title: 'Planes Premium',
    featured: true,
    cols: 'lg:grid-cols-3',
    planes: [
      {
        name: 'Plan Ilimitado',
        periodo: 'Mensual',
        price: '$75.000',
        description: 'Acceso a clases de Muay Thai, Cross y Grappling / Jiu Jitsu sin límite de reservas, con vigencia de 30 días.',
      },
      {
        name: 'Plan Ilimitado',
        periodo: 'Sin límite de reservas',
        badge: 'Trimestral',
        price: '$210.000',
        description: 'Acceso a clases de Muay Thai, Cross y Grappling / Jiu Jitsu sin límite de reservas, con vigencia de 30 días.',
      },
      {
        name: 'Plan Ilimitado',
        periodo: 'Sin límite de reservas',
        badge: 'Semestral',
        price: '$405.000',
        description: 'Acceso a clases de Muay Thai, Cross y Grappling / Jiu Jitsu sin límite de reservas, con vigencia de 30 días.',
      },
    ],
  },
];

// Convenios (servicios complementarios)
const convenios = [
  {
    name: 'Evaluación Nutricional',
    icon: 'nutrition',
    price: '$20.000',
    description: 'Una evaluación nutricional con el equipo de Nutsport, con vigencia de 30 días. Cupos limitados.',
  },
  {
    name: 'Sesión de Masoterapia',
    icon: 'self_improvement',
    price: '$15.000',
    description: 'Una sesión de masaje descontracturante deportivo en silla, con vigencia de 30 días.',
  },
  {
    name: 'Pack 4 Sesiones Masoterapia',
    icon: 'spa',
    price: '$45.000',
    description: '4 sesiones de masaje descontracturante deportivo en silla, con vigencia de 30 días.',
  },
];
</script>

<style scoped>
.masonry-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-auto-rows: 200px;
  gap: 12px;
}
.masonry-item-tall { grid-row: span 2; }
.masonry-item-wide { grid-column: span 2; }
@media (max-width: 768px) {
  .masonry-item-wide { grid-column: span 1; }
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>

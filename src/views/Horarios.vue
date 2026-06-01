<template>
  <div class="bg-black font-display text-white min-h-screen selection:bg-primary selection:text-black">
    <div class="relative flex min-h-screen flex-col overflow-x-hidden">
      <!-- Textured Background Overlay -->
      <div class="absolute inset-0 z-0 opacity-30 pointer-events-none mix-blend-overlay bg-cover bg-center" style="background-image: url('https://www.transparenttextures.com/patterns/dark-matter.png');"></div>
      
      <Navbar />

      <main class="relative z-10 flex flex-col items-center">
        <!-- Profesores Section -->
        <section class="w-full py-16 px-6 md:px-20 lg:px-40">
          <div class="flex flex-col gap-4 mb-10">
            <div class="flex items-center gap-2 text-primary font-bold tracking-[0.2em] uppercase text-xs">
              <span class="material-symbols-outlined text-sm">sports_martial_arts</span>
              Nuestros Profesores
            </div>
            <h2 class="text-3xl md:text-5xl font-black uppercase italic tracking-tight leading-none">
              HONOR Y <span class="text-primary italic">LIDERAZGO</span>
            </h2>
            <p class="max-w-2xl text-white/40 text-sm md:text-base leading-relaxed uppercase tracking-wider">
              Entrena con nuestro equipo. Profesores que llevarán tu técnica al siguiente nivel con disciplina y respeto.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl">
            <div
              v-for="profe in profesores"
              :key="profe.nombre"
              class="flex flex-col gap-5 group"
            >
              <div
                class="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.03] border-b-4 border-primary"
              >
                <img
                  :src="profe.foto"
                  :alt="profe.nombre"
                  class="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
                <div class="absolute bottom-4 left-4">
                  <span class="bg-primary text-black px-3 py-1 text-[10px] font-black uppercase rounded-sm tracking-widest shadow-lg">{{ profe.disciplina }}</span>
                </div>
              </div>
              <div class="px-1">
                <p class="text-primary text-2xl font-black uppercase italic tracking-tighter">{{ profe.nombre }}</p>
                <div class="flex items-center gap-2 mt-1">
                  <span class="text-primary material-symbols-outlined text-sm">military_tech</span>
                  <p class="text-white/60 text-xs font-bold uppercase tracking-widest leading-none mt-1">Profesor</p>
                </div>
                <p class="text-white/40 text-[10px] mt-2 uppercase font-black tracking-widest">{{ profe.rol }}</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Header for Schedule Section -->
        <div class="flex flex-col items-center gap-4 mt-8 mb-16">
          <div class="flex items-center gap-4">
            <div class="size-12 text-primary">
              <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"></path>
              </svg>
            </div>
            <h1 class="text-white text-3xl md:text-5xl font-black uppercase italic tracking-tighter">
              <span class="text-primary italic">RAMA</span> HORARIOS 2026
            </h1>
          </div>
        </div>

        <div class="w-full max-w-[1100px] flex flex-col gap-24 px-4 md:px-0 mb-32">
          <!-- AM BLOCK -->
          <div class="flex flex-col gap-10">
            <div class="flex">
              <div class="bg-primary text-black px-12 py-3 rounded-full font-black text-3xl italic uppercase tracking-tighter shadow-[0_0_30px_rgba(255,215,0,0.3)]">AM</div>
            </div>

            <div class="overflow-x-auto pb-4 hide-scrollbar">
              <table class="w-full border-separate border-spacing-x-2 border-spacing-y-2">
                <thead>
                  <tr>
                    <th class="w-[140px]"></th>
                    <th v-for="day in diasAM" :key="day" class="text-primary text-[11px] font-black uppercase tracking-[0.2em] py-4 text-center">
                      {{ day }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="fila in horarioAM" :key="fila.hora" class="h-14">
                    <td class="text-[10px] font-black text-white/40 uppercase tracking-widest text-right pr-6 whitespace-nowrap">{{ fila.hora }} HRS.</td>
                    <template v-for="(clase, i) in fila.clases" :key="i">
                      <td v-if="!clase" class="bg-transparent border border-white/5 opacity-10"></td>
                      <td v-else-if="Array.isArray(clase)" class="p-0 align-top">
                        <div class="flex flex-col gap-1">
                          <div v-for="c in clase" :key="c" class="bg-primary text-black px-2 py-2 text-center rounded-sm font-black text-[9px] uppercase italic leading-tight">{{ c }}</div>
                        </div>
                      </td>
                      <td v-else class="bg-primary text-black p-3 text-center rounded-sm font-black text-[10px] uppercase italic leading-tight">{{ clase }}</td>
                    </template>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- PM BLOCK -->
          <div class="flex flex-col gap-10">
            <div class="flex">
              <div class="bg-primary text-black px-12 py-3 rounded-full font-black text-3xl italic uppercase tracking-tighter shadow-[0_0_30px_rgba(255,215,0,0.3)]">PM</div>
            </div>

            <div class="overflow-x-auto pb-4 hide-scrollbar">
              <table class="w-full border-separate border-spacing-x-2 border-spacing-y-2">
                <thead>
                  <tr>
                    <th class="w-[140px]"></th>
                    <th v-for="day in diasPM" :key="day" class="text-primary text-[11px] font-black uppercase tracking-[0.2em] py-4 text-center">
                      {{ day }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="fila in horarioPM" :key="fila.hora" class="h-14">
                    <td class="text-[10px] font-black text-white/40 uppercase tracking-widest text-right pr-6 whitespace-nowrap">{{ fila.hora }} HRS.</td>
                    <template v-for="(clase, i) in fila.clases" :key="i">
                      <td v-if="!clase" class="bg-transparent border border-white/5 opacity-10"></td>
                      <td v-else-if="Array.isArray(clase)" class="p-0 align-top">
                        <div class="flex flex-col gap-1">
                          <div v-for="c in clase" :key="c" class="bg-primary text-black px-2 py-2 text-center rounded-sm font-black text-[9px] uppercase italic leading-tight">{{ c }}</div>
                        </div>
                      </td>
                      <td v-else class="bg-primary text-black p-3 text-center rounded-sm font-black text-[10px] uppercase italic leading-tight">{{ clase }}</td>
                    </template>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- SISTEMA RAMA 2026 -->
          <div class="flex flex-col gap-8">
            <h3 class="text-center text-primary text-sm md:text-base font-black uppercase tracking-[0.3em] italic">Sistema Rama 2026</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div v-for="item in sistema" :key="item.nombre" class="flex flex-col gap-1 border border-white/10 rounded-lg p-5 bg-white/5">
                <span class="text-primary font-black uppercase text-xs tracking-widest italic">{{ item.nombre }}</span>
                <span class="text-white/50 text-[11px] uppercase tracking-wide leading-snug">{{ item.desc }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA Section: Clase Gratis -->
        <div class="mt-20 flex flex-col md:flex-row items-center justify-center gap-8 text-center bg-white/5 p-10 md:p-12 rounded-3xl border border-white/5 backdrop-blur-sm mx-4 md:mx-0 w-full max-w-[1100px]">
          <p class="text-white/60 text-lg md:text-xl font-medium uppercase tracking-wide">
            ¿NUEVO EN EL MUAY THAI? <span class="text-primary font-black italic">COMIENZA TU VIAJE HOY MISMO.</span>
          </p>
          <button 
            @click="openBoxMagic"
            class="group flex h-16 items-center justify-center gap-4 rounded-xl bg-primary px-10 hover:brightness-110 hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,215,0,0.2)]"
          >
            <span class="material-symbols-outlined text-black font-bold text-3xl">confirmation_number</span>
            <span class="text-black text-sm font-black uppercase tracking-[0.2em] italic">Reserva tu Clase Gratis</span>
          </button>
        </div>

        <Footer />
      </main>
    </div>
  </div>
</template>

<script setup>
import Navbar from '../layouts/Navbar.vue';
import Footer from '../layouts/Footer.vue';
import { openBoxMagic } from '../utils/deepLinking';

const profesores = [
  { nombre: 'Ramiro Leal', disciplina: 'Muay Thai', rol: 'Profesor de Muay Thai', foto: '/profesores/Ramiro%20Leal.JPG' },
  { nombre: 'Aníbal González', disciplina: 'Muay Thai', rol: 'Profesor de Muay Thai', foto: '/profesores/Anibal%20Gonzalez%20(2).JPG' },
  { nombre: 'Diego', disciplina: 'Jiu Jitsu', rol: 'Profesor de Jiu Jitsu', foto: '/profesores/Diego%20Jiujitsu%20(2).JPG' },
];

const diasAM = ['LUNES', 'MARTES', 'MIÉRCOLES', 'JUEVES', 'VIERNES', 'SÁBADO'];
const diasPM = ['LUNES', 'MARTES', 'MIÉRCOLES', 'JUEVES', 'VIERNES'];

// Una celda puede ser: null (vacía), string (una clase) o array (dos clases en el mismo bloque)
const horarioAM = [
  { hora: '7:00 - 8:00', clases: ['Muay Thai Formativo', 'Muay Thai Formativo', 'Muay Thai Formativo', 'Muay Thai Formativo', 'Muay Thai Formativo', null] },
  { hora: '8:00 - 9:00', clases: ['Cross Training', 'Cross Training', 'Cross Training', 'Cross Training', 'Cross Training', null] },
  { hora: '10:00 - 11:00', clases: ['Cross Training', 'Cross Training', 'Cross Training', 'Cross Training', 'Cross Training', 'Muay Thai Formativo'] },
  { hora: '11:00 - 12:00', clases: ['Muay Thai Combat', 'Muay Thai Amateur', 'Muay Thai Combat', 'Muay Thai Amateur', 'Muay Thai Combat', ['Woman Muay Thai', 'Cross Training']] },
  { hora: '12:00 - 13:00', clases: ['Muay Thai Combat', 'Muay Thai Amateur', 'Muay Thai Combat', 'Muay Thai Amateur', 'Muay Thai Combat', 'Muay Thai Amateur'] },
];

const horarioPM = [
  { hora: '17:30 - 18:30', clases: ['Muay Thai Formativo', 'Muay Thai Amateur', 'Muay Thai Formativo', 'Muay Thai Amateur', 'Muay Thai Formativo'] },
  { hora: '18:30 - 19:30', clases: [['Muay Thai Amateur', 'Cross Training'], 'Muay Thai Formativo', ['Muay Thai Amateur', 'Cross Training'], 'Muay Thai Formativo', ['Muay Thai Amateur', 'Cross Training']] },
  { hora: '19:30 - 20:30', clases: ['Muay Thai Formativo', ['Muay Thai Amateur', 'Cross Training'], 'Muay Thai Formativo', ['Muay Thai Amateur', 'Cross Training'], 'Muay Thai Combat'] },
  { hora: '20:30 - 22:00', clases: ['Muay Thai Combat', 'Grappling', 'Muay Thai Combat', 'Grappling', 'Grappling'] },
];

const sistema = [
  { nombre: 'Muay Thai Formativo', desc: 'Fundamento y base técnica del Muay Thai' },
  { nombre: 'Muay Thai Amateur', desc: 'Entrenamiento y desarrollo deportivo' },
  { nombre: 'Muay Thai Combat', desc: 'Equipo avanzado, selección por nivel técnico' },
  { nombre: 'Cross Training', desc: 'Preparación física complementaria' },
  { nombre: 'Grappling', desc: 'Clase de lucha con base de Jiu-Jitsu' },
  { nombre: 'Woman Muay Thai', desc: 'Entrenamiento exclusivo para mujeres' },
];
</script>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
<template>
  <div class="bg-black font-display text-white min-h-screen selection:bg-primary selection:text-black">
    <div class="relative flex min-h-screen flex-col overflow-x-hidden">
      <!-- Textured Background Overlay -->
      <div class="absolute inset-0 z-0 opacity-30 pointer-events-none mix-blend-overlay bg-cover bg-center" style="background-image: url('https://www.transparenttextures.com/patterns/dark-matter.png');"></div>
      
      <Navbar />

      <main class="relative z-10 flex flex-col items-center">
        <!-- Header for Schedule Section -->
        <div class="flex flex-col items-center gap-4 mt-16 mb-16">
          <div class="flex items-center gap-4">
            <img src="/logo_letra_negra.png" alt="Rama Muay Thai" class="h-12 md:h-16 w-auto" />
            <h1 class="text-white text-3xl md:text-5xl font-black uppercase italic tracking-tighter">
              <span class="text-primary italic">RAMA</span> HORARIOS 2026
            </h1>
          </div>
        </div>

        <div class="w-full max-w-[1100px] flex flex-col gap-24 px-4 md:px-0 mb-32">
          <!-- HORARIO POR DÍA (interactivo) -->
          <section class="flex flex-col gap-6">
            <!-- Días: franja deslizable (≈3 visibles en mobile, todos en desktop) -->
            <div
              ref="franjaDias"
              class="flex gap-2 overflow-x-auto snap-x snap-mandatory hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0 pt-3 pb-2"
            >
              <button
                v-for="(dia, i) in dias"
                :key="dia.largo"
                :ref="(el) => (botonesDia[i] = el)"
                @click="elegirDia(i)"
                class="relative snap-start shrink-0 w-[calc((100%-1rem)/3)] md:w-auto md:flex-1 h-16 px-2 rounded-full border font-black uppercase tracking-[0.1em] md:tracking-[0.2em] text-[13px] md:text-sm transition-all duration-300"
                :class="[
                  diaActivo === i
                    ? 'bg-primary text-black border-primary shadow-[0_0_30px_rgba(255,215,0,0.35)]'
                    : 'bg-white/[0.03] text-white/70 border-white/15 hover:border-primary/50 hover:text-white',
                  filtro && contarClases(i) === 0 && diaActivo !== i ? 'opacity-35' : '',
                ]"
              >
                {{ dia.largo }}
                <span
                  v-if="i === hoy"
                  class="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full text-[9px] tracking-[0.2em] font-black"
                  :class="diaActivo === i ? 'bg-black text-primary border border-primary' : 'bg-primary text-black'"
                >HOY</span>
              </button>
            </div>

            <!-- Filtro por disciplina (oculto por ahora: activar con MOSTRAR_FILTRO = true) -->
            <div v-if="MOSTRAR_FILTRO" class="flex flex-col gap-3">
              <span class="font-mono text-[10px] tracking-[0.35em] uppercase text-white/40">Filtrar por disciplina</span>
              <div class="flex gap-2 overflow-x-auto hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap">
                <button
                  v-for="d in disciplinas"
                  :key="d.label"
                  @click="filtro = d.clase"
                  class="shrink-0 h-10 px-4 rounded-full border text-xs font-bold uppercase tracking-widest transition-all duration-200"
                  :class="filtro === d.clase
                    ? 'bg-primary/15 border-primary text-primary'
                    : 'border-white/15 text-white/60 hover:border-primary/40 hover:text-white'"
                >{{ d.label }}</button>
              </div>
            </div>

            <!-- Tarjeta del día -->
            <div class="relative rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden">
              <div class="absolute -top-24 left-1/2 -translate-x-1/2 w-2/3 h-40 bg-primary/10 blur-[90px] pointer-events-none"></div>

              <transition :name="direccion" mode="out-in">
                <div :key="`${diaActivo}-${filtro}`" class="relative p-5 sm:p-8 flex flex-col gap-6">
                  <div class="flex items-baseline justify-between gap-4">
                    <h2 class="text-2xl sm:text-3xl font-black uppercase italic tracking-tight">{{ dias[diaActivo].largo }}</h2>
                    <span class="text-white/50 text-sm whitespace-nowrap">
                      {{ contarClases(diaActivo) }} {{ contarClases(diaActivo) === 1 ? 'clase' : 'clases' }}
                    </span>
                  </div>

                  <p v-if="esDomingo && diaActivo === 0" class="-mt-3 text-white/45 text-xs uppercase tracking-widest">
                    Hoy domingo no hay clases &middot; te mostramos el lunes
                  </p>

                  <template v-if="contarClases(diaActivo) > 0">
                    <div v-for="bloque in bloquesDelDia" :key="bloque.nombre" class="flex flex-col gap-2">
                      <div class="flex items-center gap-3 mb-1">
                        <span class="material-symbols-outlined text-primary text-lg">{{ bloque.icono }}</span>
                        <span class="font-mono text-[11px] tracking-[0.35em] uppercase text-primary">{{ bloque.nombre }}</span>
                        <div class="h-px flex-1 bg-white/10"></div>
                      </div>
                      <div
                        v-for="fila in bloque.filas"
                        :key="fila.inicio"
                        class="flex items-center gap-4 sm:gap-6 p-3 sm:p-4 rounded-2xl border border-white/[0.07] bg-black/40"
                      >
                        <div class="w-16 sm:w-20 shrink-0 flex flex-col">
                          <span class="font-black text-lg leading-none">{{ fila.inicio }}</span>
                          <span class="text-white/35 text-[11px] mt-1">a {{ fila.fin }}</span>
                        </div>
                        <div class="flex flex-wrap gap-2">
                          <router-link
                            v-for="c in fila.clases"
                            :key="c"
                            :to="rutaClase(c)"
                            class="px-4 py-2 rounded-full border border-primary/50 bg-primary/[0.06] text-white text-sm font-semibold hover:bg-primary hover:text-black hover:border-primary transition-colors"
                          >{{ c }}</router-link>
                        </div>
                      </div>
                    </div>
                  </template>

                  <div v-else class="py-10 flex flex-col items-center text-center gap-3">
                    <span class="material-symbols-outlined text-primary/60 text-4xl">event_busy</span>
                    <p class="text-white/70">No hay clases de <span class="text-primary font-bold">{{ filtro }}</span> este día.</p>
                    <p v-if="diasConFiltro.length" class="text-white/45 text-sm">
                      Disponible:
                      <button
                        v-for="(d, n) in diasConFiltro"
                        :key="d"
                        @click="elegirDia(d)"
                        class="text-primary font-bold underline underline-offset-4 hover:brightness-125 mx-0.5"
                      >{{ dias[d].largo }}{{ n < diasConFiltro.length - 1 ? ',' : '' }}</button>
                    </p>
                  </div>
                </div>
              </transition>
            </div>

            <p class="text-center text-white/40 text-xs uppercase tracking-widest">
              Las clases se reservan previamente a través de nuestra plataforma
            </p>

            <button
              @click="mostrarSemana = !mostrarSemana"
              class="self-center h-12 px-8 border border-white/20 rounded-full text-white/70 hover:text-primary hover:border-primary/50 text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2"
            >
              <span class="material-symbols-outlined text-lg">calendar_view_week</span>
              {{ mostrarSemana ? 'Ocultar semana completa' : 'Ver semana completa' }}
              <span class="material-symbols-outlined text-lg transition-transform" :class="{ 'rotate-180': mostrarSemana }">expand_more</span>
            </button>
          </section>

          <transition
            enter-active-class="transition duration-500 ease-out"
            enter-from-class="opacity-0 -translate-y-4"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
          <div v-if="mostrarSemana" class="flex flex-col gap-24">
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

          </div>
          </transition>

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
                class="relative w-full aspect-3/4 rounded-xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.03] border-b-4 border-primary"
              >
                <img
                  :src="profe.foto"
                  :alt="profe.nombre"
                  class="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div class="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-80"></div>
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
import { ref, computed, watch, onMounted, nextTick } from 'vue';
import { openBoxMagic } from '../utils/deepLinking';
import { profesores } from '../data/profesores';


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

// ---- Vista por día (derivada de horarioAM / horarioPM: única fuente de verdad) ----
const dias = [
  { largo: 'Lunes' },
  { largo: 'Martes' },
  { largo: 'Miércoles' },
  { largo: 'Jueves' },
  { largo: 'Viernes' },
  { largo: 'Sábado' },
];

const rutas = {
  'Muay Thai Formativo': '/clases/muay-thai-formativo',
  'Muay Thai Amateur': '/clases/muay-thai-amateur',
  'Muay Thai Combat': '/clases/muay-thai-combat',
  'Woman Muay Thai': '/clases/muay-thai-women',
  'Cross Training': '/clases/cross-training',
  'Grappling': '/clases/brazilian-jiujitsu',
};
const rutaClase = (c) => rutas[c] || '/horarios';

const MOSTRAR_FILTRO = false;

const disciplinas = [
  { label: 'Todas', clase: null },
  { label: 'Formativo', clase: 'Muay Thai Formativo' },
  { label: 'Amateur', clase: 'Muay Thai Amateur' },
  { label: 'Combat', clase: 'Muay Thai Combat' },
  { label: 'Cross Training', clase: 'Cross Training' },
  { label: 'Grappling', clase: 'Grappling' },
  { label: 'Woman MT', clase: 'Woman Muay Thai' },
];

// getDay(): 0 = domingo … 6 = sábado → índice 0 = lunes. Domingo (cerrado) muestra el lunes.
const diaSemana = new Date().getDay();
const esDomingo = diaSemana === 0;
const hoy = esDomingo ? -1 : diaSemana - 1;

// Al volver con "atrás" se restaura el día elegido y si la semana completa estaba abierta.
// Se guarda en la entrada del historial (history.state), así una visita nueva parte en "hoy".
function estadoGuardado() {
  try {
    return window.history.state?.horarios || null;
  } catch {
    return null;
  }
}
const guardado = estadoGuardado();

const diaActivo = ref(guardado?.dia ?? (esDomingo ? 0 : hoy));
const filtro = ref(null);
const direccion = ref('slide-izq');
const mostrarSemana = ref(guardado?.semana ?? false);

watch([diaActivo, mostrarSemana], ([dia, semana]) => {
  try {
    window.history.replaceState({ ...window.history.state, horarios: { dia, semana } }, '');
  } catch {
    // sin acceso al historial: solo se pierde la restauración
  }
});
const franjaDias = ref(null);
const botonesDia = [];

function filasDe(tabla, i) {
  return tabla
    .map((fila) => {
      const celda = fila.clases[i];
      const clases = (Array.isArray(celda) ? celda : celda ? [celda] : [])
        .filter((c) => !filtro.value || c === filtro.value);
      const [inicio, fin] = fila.hora.split(' - ');
      return { inicio, fin, clases };
    })
    .filter((f) => f.clases.length);
}

function contarClases(i) {
  return [...filasDe(horarioAM, i), ...filasDe(horarioPM, i)].reduce((n, f) => n + f.clases.length, 0);
}

const bloquesDelDia = computed(() => [
  { nombre: 'Mañana', icono: 'light_mode', filas: filasDe(horarioAM, diaActivo.value) },
  { nombre: 'Tarde', icono: 'dark_mode', filas: filasDe(horarioPM, diaActivo.value) },
].filter((b) => b.filas.length));

const diasConFiltro = computed(() => dias.map((_, i) => i).filter((i) => contarClases(i) > 0));

// Desplaza la franja (solo en horizontal, sin mover la página) para dejar el día elegido a la vista
function centrarDia(i, suave = true) {
  const franja = franjaDias.value;
  const btn = botonesDia[i];
  if (!franja || !btn) return;
  const destino = btn.offsetLeft - franja.offsetLeft - (franja.clientWidth - btn.clientWidth) / 2;
  franja.scrollTo({ left: Math.max(0, destino), behavior: suave ? 'smooth' : 'auto' });
}

function elegirDia(i) {
  if (i === diaActivo.value) return;
  direccion.value = i > diaActivo.value ? 'slide-izq' : 'slide-der';
  diaActivo.value = i;
  centrarDia(i);
}

onMounted(() => nextTick(() => centrarDia(diaActivo.value, false)));

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
/* Cambio de día: el contenido se desliza hacia el lado del día elegido */
.slide-izq-enter-active,
.slide-izq-leave-active,
.slide-der-enter-active,
.slide-der-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.slide-izq-enter-from,
.slide-der-leave-to {
  opacity: 0;
  transform: translateX(24px);
}
.slide-izq-leave-to,
.slide-der-enter-from {
  opacity: 0;
  transform: translateX(-24px);
}
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
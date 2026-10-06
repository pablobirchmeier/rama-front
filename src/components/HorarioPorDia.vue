<template>
  <!-- Horario interactivo por día (se usa en Home y en Horarios: mismo look en ambos) -->
  <div class="flex flex-col gap-6">
    <!-- Días: franja deslizable (≈3 visibles en mobile, todos en desktop) -->
    <div
      ref="franjaDias"
      class="flex gap-2 overflow-x-auto snap-x snap-mandatory hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0 pt-3 pb-2"
    >
      <button
        v-for="(dia, i) in dias"
        :key="dia"
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
        {{ dia }}
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
    <div class="relative rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden text-left">
      <div class="absolute -top-24 left-1/2 -translate-x-1/2 w-2/3 h-40 bg-primary/10 blur-[90px] pointer-events-none"></div>

      <transition :name="direccion" mode="out-in">
        <div :key="`${diaActivo}-${filtro}`" class="relative p-5 sm:p-8 flex flex-col gap-6">
          <div class="flex items-baseline justify-between gap-4">
            <h3 class="text-2xl sm:text-3xl font-black uppercase italic tracking-tight">{{ dias[diaActivo] }}</h3>
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
                    :to="rutasClases[c] || '/horarios'"
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
              >{{ dias[d] }}{{ n < diasConFiltro.length - 1 ? ',' : '' }}</button>
            </p>
          </div>
        </div>
      </transition>
    </div>

    <p class="text-center text-white/40 text-xs uppercase tracking-widest">
      Las clases se reservan previamente a través de nuestra plataforma
    </p>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, nextTick } from 'vue';
import { horarioAM, horarioPM, rutasClases } from '../data/horarios';

const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

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

// Al volver con "atrás" se restaura el día elegido. Se guarda en la entrada del historial
// (history.state, cada página tiene la suya), así una visita nueva parte en "hoy".
function diaGuardado() {
  try {
    return window.history.state?.horarioDia ?? null;
  } catch {
    return null;
  }
}

const diaActivo = ref(diaGuardado() ?? (esDomingo ? 0 : hoy));
const filtro = ref(null);
const direccion = ref('slide-izq');
const franjaDias = ref(null);
const botonesDia = [];

watch(diaActivo, (dia) => {
  try {
    window.history.replaceState({ ...window.history.state, horarioDia: dia }, '');
  } catch {
    // sin acceso al historial: solo se pierde la restauración
  }
});

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

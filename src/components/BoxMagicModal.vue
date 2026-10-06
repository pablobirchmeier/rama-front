<template>
  <Teleport to="body">
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
      @after-enter="botonIr?.focus()"
    >
      <div
        v-if="boxMagicModalAbierto"
        class="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6 bg-black/80 backdrop-blur-sm"
        @click.self="cerrar"
      >
        <transition
          appear
          enter-active-class="transition duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
          enter-from-class="opacity-0 translate-y-10 sm:translate-y-6 sm:scale-95"
          enter-to-class="opacity-100 translate-y-0 sm:scale-100"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="boxmagic-titulo"
            class="relative w-full sm:max-w-lg bg-[#0a0a0a] border border-primary/30 rounded-t-3xl sm:rounded-3xl shadow-2xl shadow-primary/10 overflow-hidden max-h-[92vh] overflow-y-auto"
          >
            <!-- Resplandor dorado superior -->
            <div class="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-48 bg-primary/20 blur-[80px] pointer-events-none"></div>

            <button
              @click="cerrar"
              aria-label="Cerrar"
              class="absolute top-4 right-4 z-10 size-9 rounded-full bg-white/5 text-white/60 hover:text-primary hover:bg-white/10 flex items-center justify-center transition-colors"
            >
              <span class="material-symbols-outlined text-xl">close</span>
            </button>

            <div class="relative px-6 sm:px-9 pt-9 pb-7 sm:pb-9 flex flex-col gap-7">
              <!-- Rama → BoxMagic -->
              <div class="flex items-center justify-center gap-4">
                <div class="h-14 px-4 rounded-2xl bg-black border border-white/10 flex items-center">
                  <img src="/logo_letra_negra.png" alt="Rama Muay Thai" class="h-6 w-auto" />
                </div>
                <div class="flex items-center gap-1 text-primary">
                  <span class="size-1.5 rounded-full bg-primary/40 animate-pulse"></span>
                  <span class="size-1.5 rounded-full bg-primary/70 animate-pulse [animation-delay:150ms]"></span>
                  <span class="material-symbols-outlined text-2xl">arrow_forward</span>
                </div>
                <div class="h-14 px-5 rounded-2xl bg-primary/10 border border-primary/40 flex items-center gap-2">
                  <span class="material-symbols-outlined text-primary text-xl">event_available</span>
                  <span class="font-black uppercase tracking-tight text-white">BoxMagic</span>
                </div>
              </div>

              <div class="flex flex-col gap-3 text-center">
                <h2 id="boxmagic-titulo" class="text-2xl sm:text-3xl font-black uppercase tracking-tight leading-tight">
                  Te llevamos a <span class="text-primary">BoxMagic</span>
                </h2>
                <p class="text-white/70 text-base leading-relaxed">
                  Serás redirigido a BoxMagic para que puedas registrarte ahí. En esa plataforma gestionamos los
                  <span class="text-white font-semibold">pagos</span> y el
                  <span class="text-white font-semibold">agendamiento de clases</span>.
                </p>
              </div>

              <!-- Pasos -->
              <ol class="flex flex-col gap-3">
                <li
                  v-for="(paso, i) in pasos"
                  :key="paso.titulo"
                  class="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/[0.03]"
                >
                  <span class="size-9 shrink-0 rounded-full bg-primary text-black font-black flex items-center justify-center">{{ i + 1 }}</span>
                  <div class="flex flex-col">
                    <span class="text-white font-bold text-sm uppercase tracking-wide">{{ paso.titulo }}</span>
                    <span class="text-white/55 text-sm leading-snug">{{ paso.texto }}</span>
                  </div>
                </li>
              </ol>

              <div class="flex flex-col gap-3">
                <button
                  ref="botonIr"
                  @click="ir"
                  class="group h-14 w-full bg-primary text-black font-black uppercase tracking-widest text-sm rounded-xl hover:brightness-110 transition-all flex items-center justify-center gap-3 shadow-lg shadow-primary/20 border-b-4 border-black/20"
                >
                  Ir a BoxMagic
                  <span class="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                </button>
                <button
                  @click="cerrar"
                  class="h-11 w-full text-white/60 hover:text-white font-bold uppercase tracking-widest text-xs transition-colors"
                >
                  Volver
                </button>
              </div>

              <p class="text-center text-white/45 text-xs">
                ¿Dudas antes de registrarte?
                <button
                  @click="dudas"
                  class="inline-flex items-center gap-1 text-white/70 hover:text-primary underline underline-offset-4 transition-colors"
                >
                  <IconoWhatsApp color class="size-3.5" />
                  Escríbenos por WhatsApp
                </button>
              </p>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </Teleport>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue';
import { boxMagicModalAbierto, irABoxMagic, openWhatsApp } from '../utils/deepLinking';
import IconoWhatsApp from './IconoWhatsApp.vue';

const botonIr = ref(null);

const pasos = [
  { titulo: 'Crea tu cuenta', texto: 'Regístrate o inicia sesión en BoxMagic.' },
  { titulo: 'Elige tu clase', texto: 'Selecciona la clase y el horario que te acomode.' },
  { titulo: 'Ven a entrenar', texto: 'Llega unos minutos antes, nosotros te recibimos.' },
];

function cerrar() {
  boxMagicModalAbierto.value = false;
}

function ir() {
  cerrar();
  irABoxMagic();
}

function dudas() {
  cerrar();
  openWhatsApp('Hola Rama! Tengo dudas antes de registrarme en BoxMagic.');
}

function onKeydown(e) {
  if (e.key === 'Escape' && boxMagicModalAbierto.value) cerrar();
}

// Bloquea el scroll de la página mientras el modal está abierto
watch(boxMagicModalAbierto, (abierto) => {
  document.body.style.overflow = abierto ? 'hidden' : '';
});

onMounted(() => window.addEventListener('keydown', onKeydown));
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown);
  document.body.style.overflow = '';
});
</script>

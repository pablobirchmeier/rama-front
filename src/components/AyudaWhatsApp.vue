<template>
  <transition
    enter-active-class="transition duration-500 ease-out"
    enter-from-class="translate-y-8 opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-active-class="transition duration-300 ease-in"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="translate-y-8 opacity-0"
  >
    <div
      v-if="visible"
      role="dialog"
      aria-label="¿Necesitas ayuda?"
      class="fixed bottom-4 left-4 right-4 sm:right-auto sm:w-[420px] z-[60] rounded-2xl bg-black border border-primary/40 shadow-2xl shadow-primary/10 overflow-hidden"
    >
      <button
        @click="cerrar"
        aria-label="Cerrar"
        class="absolute top-3 right-3 z-10 size-8 rounded-full bg-black/70 text-white/70 hover:text-primary flex items-center justify-center transition-colors"
      >
        <span class="material-symbols-outlined text-xl">close</span>
      </button>

      <div class="flex gap-5 p-6">
        <img
          src="/profesores/Ramiro%20Leal.JPG"
          alt="Profe Ramiro Leal"
          class="size-32 rounded-xl object-cover object-top border-2 border-primary flex-shrink-0"
          loading="lazy"
          decoding="async"
        />
        <div class="flex flex-col justify-center gap-2 pr-6">
          <p class="text-white font-black text-xl leading-tight">¿Encontraste lo que buscabas?</p>
          <p class="text-white/65 text-base leading-snug">Hablemos si necesitas ayuda o tienes alguna duda.</p>
        </div>
      </div>

      <div class="px-6 pb-6">
        <button
          @click="hablar"
          class="w-full h-14 bg-primary text-black font-black uppercase tracking-widest text-sm rounded-lg hover:brightness-110 transition-all flex items-center justify-center gap-2"
        >
          <IconoWhatsApp class="size-6" />
          Hablar por WhatsApp
        </button>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { openWhatsApp } from '../utils/deepLinking';
import IconoWhatsApp from './IconoWhatsApp.vue';

// Aparece tras DELAY_MS de navegación (una vez por visita: si lo cierran, no vuelve hasta otra sesión)
const DELAY_MS = 20 * 1000;
const STORAGE_KEY = 'rama_ayuda_whatsapp_cerrado';

const visible = ref(false);
let timer = null;

function yaCerrado() {
  try {
    return sessionStorage.getItem(STORAGE_KEY) === '1';
  } catch {
    return false;
  }
}

function marcarCerrado() {
  try {
    sessionStorage.setItem(STORAGE_KEY, '1');
  } catch {
    // sin storage: solo se oculta en esta página
  }
}

function cerrar() {
  visible.value = false;
  marcarCerrado();
}

function hablar() {
  openWhatsApp('Hola Rama! Estaba viendo la página y tengo una duda.');
  cerrar();
}

onMounted(() => {
  if (yaCerrado()) return;
  timer = setTimeout(() => {
    visible.value = true;
  }, DELAY_MS);
});

onBeforeUnmount(() => clearTimeout(timer));
</script>

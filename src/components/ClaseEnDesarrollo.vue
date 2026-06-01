<template>
  <div class="bg-background-dark font-display text-white min-h-screen">
    <div class="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div class="layout-container flex h-full grow flex-col">
        <Navbar />

        <main class="flex flex-1 items-center justify-center px-6 py-20">
          <div class="max-w-2xl flex flex-col items-center gap-6 text-center">
            <span class="material-symbols-outlined text-primary text-7xl md:text-8xl">construction</span>
            <h1 class="text-white text-3xl md:text-5xl font-black uppercase tracking-tight">
              {{ nombre }}
            </h1>
            <p class="text-white/70 text-lg md:text-xl">
              Esta sección está <span class="text-primary font-bold">en desarrollo</span>.
            </p>
            <p class="text-white/50 text-base">
              Pronto encontrarás aquí toda la información sobre esta clase.
            </p>
            <router-link
              to="/"
              class="mt-4 inline-flex items-center gap-2 bg-primary text-black font-bold py-3 px-8 rounded-lg uppercase tracking-widest text-sm hover:scale-105 transition-transform"
            >
              <span class="material-symbols-outlined text-xl">arrow_back</span>
              Volver al inicio
            </router-link>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from '../layouts/Navbar.vue';
import Footer from '../layouts/Footer.vue';

defineProps({
  nombre: {
    type: String,
    default: 'Clase',
  },
});
</script>

<template>
  <div class="flex flex-col gap-20 lg:gap-28">
    <div
      v-for="(seccion, i) in secciones"
      :key="i"
      :ref="(el) => setRef(el, i)"
      class="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center transition-all duration-[1400ms] ease-out"
      :class="estados[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'"
    >
      <!-- IMAGEN -->
      <div
        class="relative w-full overflow-hidden h-64 sm:h-80 lg:h-[26rem] rounded-sm transition-transform duration-[1400ms] ease-out"
        :class="[
          estados[i] ? 'scale-100' : 'scale-95',
          seccion.imagenIzquierda ? 'lg:order-1' : 'lg:order-2',
        ]"
      >
        <img
          :src="seccion.imagen || imagen"
          :alt="seccion.titulo"
          class="w-full h-full object-cover block"
          loading="lazy"
          decoding="async"
        />
        <!-- Fundido en los bordes (patrón del sitio) -->
        <div class="absolute inset-0 bg-[linear-gradient(to_bottom,#000_0%,transparent_12%,transparent_88%,#000_100%)]"></div>
        <div class="absolute inset-0 bg-[linear-gradient(to_right,#000_0%,transparent_10%,transparent_90%,#000_100%)]"></div>
      </div>

      <!-- TEXTO al lado -->
      <div
        class="flex flex-col gap-5 transition-all duration-[1400ms] ease-out delay-200"
        :class="[
          estados[i]
            ? 'opacity-100 translate-x-0'
            : seccion.imagenIzquierda
              ? 'opacity-0 lg:translate-x-12'
              : 'opacity-0 lg:-translate-x-12',
          seccion.imagenIzquierda ? 'lg:order-2' : 'lg:order-1',
        ]"
      >
        <span class="font-mono text-[10px] tracking-[0.4em] uppercase text-accent">{{ seccion.label }}</span>
        <h3 class="font-black uppercase tracking-tight text-primary text-3xl lg:text-5xl leading-none">{{ seccion.titulo }}</h3>
        <p class="text-white/75 text-base lg:text-lg leading-relaxed">{{ seccion.texto }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
  secciones: { type: Array, required: true },
  imagen: { type: String, default: '/foto_ejemplo.JPG' },
});

const refs = ref([]);
const estados = ref(props.secciones.map(() => false));
let observer = null;

function setRef(el, i) {
  if (el) refs.value[i] = el;
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const i = refs.value.indexOf(entry.target);
        if (entry.isIntersecting && i !== -1) {
          estados.value[i] = true;
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  refs.value.forEach((el) => el && observer.observe(el));
});

onBeforeUnmount(() => {
  observer?.disconnect();
});
</script>

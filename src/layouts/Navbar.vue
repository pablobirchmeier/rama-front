<template>
  <header class="flex items-center justify-between px-6 md:px-10 py-4 sticky top-0 bg-black/90 backdrop-blur-md z-50">
    <router-link to="/" class="flex items-center">
      <img src="/logo_letra_negra.png" alt="Rama Muay Thai" class="h-8 md:h-10 w-auto" />
    </router-link>
    <div class="flex flex-1 justify-end gap-4 md:gap-8">
      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center gap-9">
        <router-link to="/" class="text-white hover:text-primary transition-colors text-sm font-medium leading-normal">Inicio</router-link>

        <!-- Clases dropdown (desktop) -->
        <div class="relative" @mouseenter="isClasesOpen = true" @mouseleave="isClasesOpen = false">
          <button
            type="button"
            class="flex items-center gap-1 text-white hover:text-primary transition-colors text-sm font-medium leading-normal"
            @click="isClasesOpen = !isClasesOpen"
          >
            Clases
            <span class="material-symbols-outlined text-base transition-transform" :class="{ 'rotate-180': isClasesOpen }">expand_more</span>
          </button>
          <transition
            enter-active-class="transition duration-150 ease-out"
            enter-from-class="translate-y-[-6px] opacity-0"
            enter-to-class="translate-y-0 opacity-100"
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="translate-y-0 opacity-100"
            leave-to-class="translate-y-[-6px] opacity-0"
          >
            <div
              v-if="isClasesOpen"
              class="absolute right-0 top-full mt-3 w-64 bg-black/95 border border-white/10 rounded-lg shadow-lg overflow-hidden"
            >
              <router-link
                v-for="clase in clases"
                :key="clase.nombre"
                :to="clase.to"
                @click="isClasesOpen = false"
                class="block px-5 py-3 text-white text-sm font-medium hover:bg-primary hover:text-black transition-colors"
              >
                {{ clase.nombre }}
              </router-link>
            </div>
          </transition>
        </div>

        <router-link to="/planes" class="text-white hover:text-primary transition-colors text-sm font-medium leading-normal">Planes</router-link>
        <router-link to="/horarios" class="text-white hover:text-primary transition-colors text-sm font-medium leading-normal">Horarios</router-link>
      </div>
      <button
        @click="openBoxMagic"
        class="flex min-w-[100px] md:min-w-[120px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 md:px-5 bg-primary text-black text-sm font-bold hover:scale-105 transition-transform"
      >
        <span class="uppercase tracking-widest text-[11px] md:text-sm">Unirse</span>
      </button>
      <!-- Mobile Menu Button -->
      <div class="md:hidden flex items-center text-primary cursor-pointer" @click="isMenuOpen = !isMenuOpen">
        <span class="material-symbols-outlined text-3xl">{{ isMenuOpen ? 'close' : 'menu' }}</span>
      </div>
    </div>

    <!-- Mobile Menu Dropdown -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="translate-y-[-10px] opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-[-10px] opacity-0"
    >
      <div v-if="isMenuOpen" class="absolute top-full left-0 w-full bg-black/95 border-b border-white/10 flex flex-col items-center py-6 gap-6 md:hidden">
        <router-link to="/" @click="closeMobileMenu" class="text-white hover:text-primary transition-colors text-lg font-medium">Inicio</router-link>

        <!-- Clases (mobile, collapsible) -->
        <div class="flex flex-col items-center gap-3 w-full">
          <button
            type="button"
            class="flex items-center gap-1 text-white hover:text-primary transition-colors text-lg font-medium"
            @click="isClasesMobileOpen = !isClasesMobileOpen"
          >
            Clases
            <span class="material-symbols-outlined text-xl transition-transform" :class="{ 'rotate-180': isClasesMobileOpen }">expand_more</span>
          </button>
          <div v-if="isClasesMobileOpen" class="flex flex-col items-center gap-3 w-full">
            <router-link
              v-for="clase in clases"
              :key="clase.nombre"
              :to="clase.to"
              @click="closeMobileMenu"
              class="text-white/80 hover:text-primary transition-colors text-base font-normal"
            >
              {{ clase.nombre }}
            </router-link>
          </div>
        </div>

        <router-link to="/planes" @click="closeMobileMenu" class="text-white hover:text-primary transition-colors text-lg font-medium">Planes</router-link>
        <router-link to="/horarios" @click="closeMobileMenu" class="text-white hover:text-primary transition-colors text-lg font-medium">Horarios</router-link>
        <button
          @click="openBoxMagic(); closeMobileMenu()"
          class="bg-primary text-black font-bold py-3 px-8 rounded-lg uppercase tracking-widest text-sm"
        >Unirse</button>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { openBoxMagic } from '../utils/deepLinking';

const isMenuOpen = ref(false);
const isClasesOpen = ref(false);
const isClasesMobileOpen = ref(false);

const clases = [
  { nombre: 'Muay Thai Formativo', to: '/clases/muay-thai-formativo' },
  { nombre: 'Muay Thai Amateur', to: '/clases/muay-thai-amateur' },
  { nombre: 'Muay Thai Combat', to: '/clases/muay-thai-combat' },
  { nombre: 'Muay Thai Women', to: '/clases/muay-thai-women' },
  { nombre: 'Brazilian JiuJitsu', to: '/clases/brazilian-jiujitsu' },
  { nombre: 'Cross Training', to: '/clases/cross-training' },
  { nombre: 'Pad Holder', to: '/clases/pad-holder' },
];

function closeMobileMenu() {
  isMenuOpen.value = false;
  isClasesMobileOpen.value = false;
}
</script>

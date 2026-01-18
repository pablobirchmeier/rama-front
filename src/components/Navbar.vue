<template>
  <header class="flex items-center justify-between border-b border-solid border-white/10 px-6 md:px-10 py-4 sticky top-0 bg-black/90 backdrop-blur-md z-50">
    <div class="flex items-center gap-4 text-white">
      <div class="size-6 text-primary">
        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" fill="currentColor"></path>
        </svg>
      </div>
      <h2 class="text-white text-lg md:text-xl font-bold leading-tight tracking-tight uppercase">Rama <span class="text-primary">Muay Thai</span></h2>
    </div>
    <div class="flex flex-1 justify-end gap-4 md:gap-8">
      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center gap-9">
        <router-link to="/" class="text-white hover:text-primary transition-colors text-sm font-medium leading-normal">Inicio</router-link>
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
        <router-link to="/" @click="isMenuOpen = false" class="text-white hover:text-primary transition-colors text-lg font-medium">Inicio</router-link>
        <router-link to="/planes" @click="isMenuOpen = false" class="text-white hover:text-primary transition-colors text-lg font-medium">Planes</router-link>
        <router-link to="/horarios" @click="isMenuOpen = false" class="text-white hover:text-primary transition-colors text-lg font-medium">Horarios</router-link>
        <button 
          @click="openBoxMagic(); isMenuOpen = false"
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
</script>

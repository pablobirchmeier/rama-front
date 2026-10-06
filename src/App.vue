<template>
  <div id="app-root">
    <router-view></router-view>
    <AyudaWhatsApp />
    <BoxMagicModal />
  </div>
</template>

<script setup>
import AyudaWhatsApp from './components/AyudaWhatsApp.vue';
import BoxMagicModal from './components/BoxMagicModal.vue';
</script>

<style>
</style>

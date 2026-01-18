<template>
  <div class="bg-background-dark font-display text-white min-h-screen">
    <div class="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div class="layout-container flex h-full grow flex-col">
        <Navbar />

        <main class="flex flex-col flex-1 max-w-[1200px] mx-auto w-full px-4 md:px-10">
          <!-- Pricing Section -->
          <section class="py-16" id="pricing">
            <div class="text-center mb-12">
              <span class="text-primary font-bold tracking-[0.2em] uppercase text-xs">Elige tu Camino</span>
              <h2 class="text-white text-4xl md:text-5xl font-black leading-tight tracking-tight mt-2 italic uppercase">PLANES 2026</h2>
            </div>
            
            <!-- Slider for 12 Plans -->
            <div class="w-full relative px-4 md:px-0 mb-12 group/slider">
              <!-- Navigation Buttons -->
              <button @click="scrollPrev" class="absolute left-0 top-1/2 -translate-y-1/2 z-10 size-12 rounded-full bg-black/50 border border-white/20 text-white flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-opacity hover:bg-primary hover:text-black hidden md:flex -ml-6">
                <span class="material-symbols-outlined">chevron_left</span>
              </button>
              <button @click="scrollNext" class="absolute right-0 top-1/2 -translate-y-1/2 z-10 size-12 rounded-full bg-black/50 border border-white/20 text-white flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-opacity hover:bg-primary hover:text-black hidden md:flex -mr-6">
                <span class="material-symbols-outlined">chevron_right</span>
              </button>

              <div 
                ref="sliderRef"
                @mousedown="startDragging"
                @mouseleave="stopDragging"
                @mouseup="stopDragging"
                @mousemove="doDrag"
                class="flex overflow-x-auto gap-8 py-8 cursor-grab active:cursor-grabbing hide-scrollbar snap-x snap-mandatory scroll-smooth"
              >
                <div v-for="(plan, index) in plans" :key="index" class="flex-shrink-0 w-[300px] md:w-[320px] snap-center">
                  <div class="group flex flex-col gap-6 rounded-xl border border-white/10 bg-[#331919]/40 p-8 hover:border-primary/50 transition-all h-full">
                    <div class="flex flex-col gap-2">
                      <h3 class="text-white/60 text-base font-bold uppercase tracking-widest h-[40px] flex items-center">{{ plan.name }}</h3>
                      <div class="flex items-baseline gap-1 mt-4">
                        <span class="text-white text-4xl font-black tracking-tight">{{ plan.price }}</span>
                        <span class="text-white/40 text-sm font-medium">/plan</span>
                      </div>
                    </div>
                    <button class="w-full flex cursor-pointer items-center justify-center rounded-lg h-12 bg-white/10 text-white text-sm font-bold uppercase tracking-widest hover:bg-white/20 transition-colors mt-auto">
                      Empezar
                    </button>
                    <div class="flex flex-col gap-4 pt-4 border-t border-white/5">
                      <div v-for="(feature, fIndex) in plan.features" :key="fIndex" class="flex gap-3 items-center text-white/80">
                        <span class="material-symbols-outlined text-primary text-xl">check_circle</span>
                        <span class="text-xs">{{ feature }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex justify-center gap-6">
                <p class="text-primary/60 text-xs font-bold animate-pulse uppercase tracking-widest">Desliza para ver más →</p>
              </div>
            </div>
          </section>

          <!-- Gallery Section -->
          <section class="py-16" id="gallery">
            <div class="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
              <div>
                <span class="text-primary font-bold tracking-[0.2em] uppercase text-xs">La Arena</span>
                <h2 class="text-white text-4xl font-black tracking-tight mt-2 italic uppercase">DENTRO DEL RING</h2>
              </div>
              <p class="text-white/60 max-w-xs text-sm">Vive la intensidad, la disciplina y la energía de nuestro centro de entrenamiento de alto rendimiento.</p>
            </div>
            <div class="masonry-grid">
              <div class="masonry-item-tall bg-center bg-cover rounded-xl overflow-hidden group relative" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDpGuj-2491kpy9--Pt5L0V42KfiOyAn1-ZC71npvCsAjb5leKW2NItiPdmgOw3ZWYQqm-E_K8Y7Vb6J7nPboBJrWe3RavOCA5m0BwRT9eTNGkkNJYesrEYgLr9ya_UPVaEgsupvDuk6uETBQznbomqpzJfXzJ9fvxXSZzbyfGD4pZbfUub91wGjRYo1rEgZ6JDSneB_mZT561ZcwF7XoJpziOtv-sBZmOGhhAM4bFHiA8aIJZYQL7bV2uUS9PdQZzCcS0IlvOhYHQ");'>
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p class="text-xs font-bold uppercase tracking-widest">Trabajo de Pads</p>
                </div>
              </div>
              <div class="bg-center bg-cover rounded-xl overflow-hidden group relative" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBvogghu5txP7dUZcU6WpOOdTYsyzywTB--HNJeNnUwvy-MbYA-F-FVd_58eGl_7QgEROvSqnYntDOWyDGeVIjhRxoHTdMKvReCDxUizgXhRtbu7PKpC3dGP3_2OkPJPgrJ4YxwCJwXq6hYVx6iU6L6Q5U3zQTEeQjUP3Ktov4U_tB-XOLPVabO17vCUWYI8lwu_wFcw0HaY5iZZedoXvi-baDNT44Vqu96i82eW_CpI6qDOF9QqAamLr1bSL7iEweFZ3fFbrCf6X8");'>
                <div class="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div class="masonry-item-wide bg-center bg-cover rounded-xl overflow-hidden group relative" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAND2ZhliGOnHeRsMbh33HKGUOnLD2C7Twh2IHU7TaV4ZWgFJHwNZMKBq4MXtBdGCsCVU8sbYEwGQOWYfGoD5a4O5tdGufgA9IK83UMGdNN4mBhhFwFziRCERVnVYVMa4HiGvF401kSYcYPdWUh3jcDqGRaHIU9KbfAlK4EzllOnCdBOQ6ZswC8SdxRv26XIRrfjKiAk2sVPnSPvWWPW0XPkNpDqXBdV5GxVC4rimcioLyII4RfK27a8LCEPe1456yapV0iuECZh8s");'>
                <div class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span class="material-symbols-outlined text-6xl text-primary">play_circle</span>
                </div>
              </div>
              <div class="bg-center bg-cover rounded-xl overflow-hidden group relative" style='background-image: url("/galeria_clase.jpg");'></div>
              <div class="masonry-item-tall bg-center bg-cover rounded-xl overflow-hidden group relative" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuA8zFZsgYLurXBBYQqO_oZX7OYY6oskqaYrJKybzfAJ6vlcI1BN2mFx8BmEGPaFPDn4fZwKjqdcEbcmtl47EAErQsU0ekqd7EDe0JlZVqkoekgZ_LitiXWs_jnPDW4jweciPNMGNMhRfhh8TykgQzJf9hwcZhYkreHKlXUIa4FX1frD9rLixIdx6Zhpp1XnuWI1h2Mqn6ACtPQNLluBXQh3qoTAWA_y3xARlYLYz3I5XGXuO666smCDvxoX-sgCX3kMRCoFT1vqNxI");'></div>
            </div>
          </section>

          <!-- Location Section -->
          <section class="py-16" id="location">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
              <div class="lg:col-span-5 flex flex-col justify-center">
                <span class="text-primary font-bold tracking-[0.2em] uppercase text-xs">Contacto</span>
                <h2 class="text-white text-4xl font-black tracking-tight mt-2 italic mb-6">ENCUÉNTRANOS</h2>
                <div class="space-y-6">
                  <div class="flex gap-4">
                    <div class="size-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                      <span class="material-symbols-outlined text-primary">location_on</span>
                    </div>
                    <div>
                      <p class="text-sm font-bold uppercase text-white/40 mb-1">Nuestro Dojo</p>
                      <p class="text-white text-lg">Tegualda 1895, 7770355 Ñuñoa<br/>Región Metropolitana, Chile</p>
                    </div>
                  </div>
                  <div class="flex gap-4">
                    <div class="size-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                      <span class="material-symbols-outlined text-primary">schedule</span>
                    </div>
                    <div>
                      <p class="text-sm font-bold uppercase text-white/40 mb-1">Horarios de Entrenamiento</p>
                      <p class="text-white">Lun - Sáb: 07:00 AM - 09:00 PM</p>
                      <p class="text-white/60 text-sm italic">Cerrado Domingos y Feriados</p>
                    </div>
                  </div>
                  <div class="flex gap-4">
                    <div class="size-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                      <span class="material-symbols-outlined text-primary">call</span>
                    </div>
                    <div>
                      <p class="text-sm font-bold uppercase text-white/40 mb-1">Ponte en Contacto</p>
                      <p class="text-white text-lg font-bold">+56 9 1234 5678</p>
                      <p class="text-white/60">ramamuaythaiboxing@gmail.com</p>
                    </div>
                  </div>
                  <!-- Social Media Buttons -->
                  <div class="flex gap-4 mt-4">
                    <button @click="openInstagram" class="size-12 cursor-pointer rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black transition-all group shadow-lg">
                      <svg class="size-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.247 2.242 1.308 3.607.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.247-3.607 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.247-2.242-1.308-3.607-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.247 3.607-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    </button>
                    <button @click="openFacebook" class="size-12 cursor-pointer rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black transition-all group shadow-lg">
                      <svg class="size-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="lg:col-span-7 h-[450px] bg-white/5 rounded-2xl relative overflow-hidden group border border-white/10 shadow-2xl">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.9144699268622!2d-70.62505492346145!3d-33.45153479756916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c57d4fc3a813%3A0x6e5c7fe96c3a1c73!2zVGVndWFsZGEgMTg5NSwgw5F1w7FvYSwgUmVnacOzbiBNZXRyb3BvbGl0YW5h!5e0!3m2!1ses!2scl!4v1768700809075!5m2!1ses!2scl" 
                  width="100%" 
                  height="100%" 
                  style="border:0; filter: invert(90%) hue-rotate(180deg) brightness(85%) contrast(100%);" 
                  allowfullscreen="" 
                  loading="lazy" 
                  referrerpolicy="no-referrer-when-downgrade"
                  class="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';

const sliderRef = ref(null);
const isDragging = ref(false);
const startX = ref(0);
const scrollLeft = ref(0);

const startDragging = (e) => {
  isDragging.value = true;
  sliderRef.value.classList.add('dragging');
  startX.value = e.pageX - sliderRef.value.offsetLeft;
  scrollLeft.value = sliderRef.value.scrollLeft;
};

const stopDragging = () => {
  isDragging.value = false;
  sliderRef.value.classList.remove('dragging');
};

const doDrag = (e) => {
  if (!isDragging.value) return;
  e.preventDefault();
  const x = e.pageX - sliderRef.value.offsetLeft;
  const walk = (x - startX.value) * 2; // Scroll speed
  sliderRef.value.scrollLeft = scrollLeft.value - walk;
};

const scrollNext = () => {
  const container = sliderRef.value;
  if (container) {
    container.scrollBy({ left: 350, behavior: 'smooth' });
  }
};

const scrollPrev = () => {
  const container = sliderRef.value;
  if (container) {
    container.scrollBy({ left: -350, behavior: 'smooth' });
  }
};

const plans = [
  {
    name: "Grupal",
    price: "$10.000",
    features: [
      "Un entrenamiento grupal."
    ]
  },
  {
    name: "Sesión Training Pads",
    price: "$20.000",
    features: [
      "Sesión 1 a 1 con un Kru (45min).",
      "Válido por un día."
    ]
  },
  {
    name: "Plan Estudiante Entrenamientos Grupales",
    price: "$40.000",
    features: [
      "Pack de 12 reservas con acceso liberado.",
      "Válido por 30 días. *requiere certificado."
    ]
  },
  {
    name: "Plan 8 Entrenamientos Grupales",
    price: "$45.000",
    features: [
      "Pack de 8 reservas con acceso liberado.",
      "Válido por 30 días."
    ]
  },
  {
    name: "Plan AM Entrenamientos Grupales",
    price: "$50.000",
    features: [
      "Pack de 12 reservas jornada AM (7 a 13hr).",
      "Válido por 30 días."
    ]
  },
  {
    name: "Plan 16 Entrenamientos Grupales",
    price: "$55.000",
    features: [
      "Pack de 16 reservas con acceso liberado.",
      "Válido por 30 días."
    ]
  },
  {
    name: "Plan Ilimitado Entrenamientos Grupales",
    price: "$75.000",
    features: [
      "Pack ilimitado de reservas con acceso liberado.",
      "Válido por 30 días."
    ]
  },
  {
    name: "Plan 4 Training Pads",
    price: "$75.000",
    features: [
      "Pack de 4 reservas 1 a 1 con un Kru (45min).",
      "Válido para 30 días."
    ]
  },
  {
    name: "Plan 16 Entrenamientos Grupales Trimestral",
    price: "$150.000",
    features: [
      "Pack de 48 reservas con acceso liberado.",
      "Válido por 90 días."
    ]
  },
  {
    name: "Plan Ilimitado Entrenamientos Grupales Trimestral",
    price: "$210.000",
    features: [
      "Pack ilimitado de reservas con acceso liberado.",
      "Válido por 90 días."
    ]
  },
  {
    name: "Plan 16 Entrenamientos Grupales Semestral",
    price: "$290.000",
    features: [
      "Pack de 96 reservas con acceso liberado.",
      "Válido por 180 días."
    ]
  },
  {
    name: "Plan Ilimitado Entrenamientos Grupales Semestral",
    price: "$390.000",
    features: [
      "Pack ilimitado de reservas con acceso liberado.",
      "Válido por 180 días."
    ]
  }
];
</script>

<style scoped>
.masonry-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-auto-rows: 200px;
  gap: 12px;
}
.masonry-item-tall { grid-row: span 2; }
.masonry-item-wide { grid-column: span 2; }
@media (max-width: 768px) {
  .masonry-item-wide { grid-column: span 1; }
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
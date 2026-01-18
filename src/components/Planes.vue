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
              <h2 class="text-white text-4xl md:text-5xl font-black leading-tight tracking-tight mt-2 italic uppercase">PLANES 2025</h2>
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
              <div class="bg-center bg-cover rounded-xl overflow-hidden group relative" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCaPLc__13vXC4PRG3BmE3TgPPGJUcLOveR8Y9gAwcEEUCwS-EB5QL9jEq9GqI39tJQo_R-kecxo1dKID3xtJ3FUnHF8Gv-Zy55rs2vKRi-FOMyXa0zl4wDUp4fcHSnhcnb3shl7lsOZnnJTr8dxkIDLVCosUMg42t9mHJFeMCKFfB5lqFjiieObAmKi4-pJcU0bKhaKsGAJDSwfN6Nk3jw_gBZnU-0pSLu9IyB__7Ml8tlwT3HJVJdUhSlmsDhUTiYZ4StiCuRupk");'></div>
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
                      <p class="text-white text-lg">Dirección de la Escuela Rama<br/>Santiago, Chile</p>
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
                      <p class="text-white/60">contacto@ramamuaythai.cl</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="lg:col-span-7 h-[450px] bg-white/5 rounded-2xl relative overflow-hidden group">
                <div class="absolute inset-0 grayscale brightness-50 opacity-40 mix-blend-overlay bg-center bg-cover" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCQOi4O41VBa-IREulFSVjTyILNkeP6ZBitvik2j4vaoj1PycjwjqH1SdEmAg__wFnItHsqzhUikHIzk4Y5WLa6JWBDMVyMnCvrt6POSq6k4oF37-MkN25YFAZ3s5E0d9Ct6TFuMrsEHXM_i0NDp_scMld1R3-YLo58u4Xf3EEpU3orCZNtb86uiFWVoxIg7DXeEu1EdgUMmudQG2DEC4d9oSBCkVnZPnkJ2NM_JAajmHTdgyEfRiAoHK0_5Lx7gwYH5dpkGhjuxGM");'></div>
                <div class="absolute inset-0 bg-background-dark/20 flex items-center justify-center">
                  <div class="relative">
                    <div class="absolute -top-12 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded text-black text-[10px] font-black uppercase whitespace-nowrap shadow-xl">
                      Rama Muay Thai HQ
                      <div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45"></div>
                    </div>
                    <span class="material-symbols-outlined text-primary text-5xl animate-bounce drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]">location_on</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer class="border-t border-white/10 py-10 px-10">
          <div class="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div class="flex items-center gap-3">
              <div class="size-5 text-primary">
                <svg fill="currentColor" viewBox="0 0 48 48"><path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"></path></svg>
              </div>
              <span class="font-bold tracking-widest text-sm uppercase">Rama Muay Thai</span>
            </div>
            <p class="text-[11px] text-white/40 uppercase tracking-widest">© 2024 RAMA MUAY THAI. TODOS LOS DERECHOS RESERVADOS.</p>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Navbar from './Navbar.vue';

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
    name: "Plan Ilimitado Entrenamientos Grupales Semestral",
    price: "$390.000",
    features: [
      "Pack ilimitado de reservas con acceso liberado.",
      "Válido por 180 días."
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
    name: "Plan Ilimitado Entrenamientos Grupales",
    price: "$75.000",
    features: [
      "Pack ilimitado de reservas con acceso liberado.",
      "Válido por 30 días."
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
    name: "Plan 16 Entrenamientos Grupales Trimestral",
    price: "$150.000",
    features: [
      "Pack de 48 reservas con acceso liberado.",
      "Válido por 90 días."
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
    name: "Plan AM Entrenamientos Grupales",
    price: "$50.000",
    features: [
      "Pack de 12 reservas jornada AM (7 a 13hr).",
      "Válido por 30 días."
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
    name: "Plan Estudiante Entrenamientos Grupales",
    price: "$40.000",
    features: [
      "Pack de 12 reservas con acceso liberado.",
      "Válido por 30 días. *requiere certificado."
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
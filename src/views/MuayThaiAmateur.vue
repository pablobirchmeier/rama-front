<template>
  <div class="bg-background-dark text-white min-h-screen flex flex-col font-display">
    <Navbar />

    <main class="relative flex-1 flex flex-col overflow-hidden bg-background-dark">
      <!-- Hero: mismo formato que Formativo (video anclado abajo, banda oscura arriba) -->
      <div class="relative w-full overflow-hidden aspect-[3/2] min-h-[44rem]">
        <!-- Video anclado abajo (alterna entre los dos clips) -->
        <div class="absolute inset-x-0 bottom-0 h-[74%] overflow-hidden">
          <video
            :key="videoActual"
            :src="amateurVideos[videoActual]"
            class="w-full h-full object-cover block"
            autoplay
            muted
            playsinline
            @ended="siguienteVideo"
          ></video>
          <!-- Gradientes (mismo patrón que Formativo) -->
          <div class="absolute inset-0 bg-gradient-to-r from-background-dark/85 via-background-dark/20 to-transparent"></div>
          <div class="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-transparent to-transparent"></div>
          <!-- Fundido superior: funde el borde de arriba del video con la banda oscura -->
          <div class="absolute inset-0 bg-[linear-gradient(to_bottom,#000_0%,transparent_20%)]"></div>
        </div>

        <!-- Marca decorativa esquina superior derecha -->
        <span
          class="hidden lg:block absolute top-24 right-10 xl:right-24 text-primary/10 text-[12rem] font-black italic leading-none pointer-events-none select-none z-10"
        >b</span>

        <!-- Contenido encima del video, alineado arriba -->
        <div class="absolute inset-0 z-10 grid lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_440px] gap-10 lg:gap-16 max-w-[1500px] w-full mx-auto px-6 sm:px-10 lg:px-16 pt-10 sm:pt-12 lg:pt-16 pb-10">
          <!-- IZQUIERDA -->
          <div class="flex flex-col gap-8 lg:gap-10">
            <!-- Label "06 / NIVEL INTERMEDIO" -->
            <div class="flex items-center gap-4">
              <div class="h-px w-10 bg-accent"></div>
              <span class="font-mono text-[11px] tracking-[0.4em] uppercase text-accent">06 / Nivel Intermedio</span>
            </div>

            <!-- Titular -->
            <h1 class="font-black uppercase leading-[0.85] tracking-tight text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] xl:text-[10rem] drop-shadow-2xl">
              <span class="block text-white">Muay Thai</span>
              <span class="block text-primary">Amateur.</span>
            </h1>

            <!-- Descripción -->
            <p class="max-w-xl text-slate-200 text-base lg:text-lg font-light leading-relaxed drop-shadow-lg">
              Ya tienes la base. Aquí dejas de pensar cada golpe y empiezas a
              encadenar: combinaciones, clinch, timing y tu primer contacto
              controlado. El paso natural antes de entrar a Combat.
            </p>

            <!-- Progresión del gimnasio -->
            <div class="mt-2 flex flex-col gap-5">
              <span class="font-mono text-[11px] tracking-[0.3em] uppercase text-white/60 drop-shadow-md">Progresión del Gimnasio</span>
              <div class="relative max-w-md">
                <!-- Línea base -->
                <div class="absolute left-6 right-6 top-[10px] h-px bg-white/25"></div>
                <!-- Puntos -->
                <div class="relative flex items-start justify-between">
                  <div class="flex flex-col items-center gap-3">
                    <div class="h-5 flex items-center"><div class="size-3 rounded-full bg-primary/60"></div></div>
                    <span class="font-mono text-[10px] tracking-[0.25em] uppercase text-white/60 drop-shadow-md">Formativo</span>
                  </div>
                  <div class="flex flex-col items-center gap-2">
                    <div class="h-5 flex items-center">
                      <div class="size-5 rounded-full bg-primary shadow-[0_0_25px_rgba(255,215,0,0.6)] ring-4 ring-primary/15"></div>
                    </div>
                    <span class="font-mono text-[10px] tracking-[0.25em] uppercase text-white font-bold drop-shadow-md">Amateur</span>
                    <span class="font-mono text-[9px] tracking-[0.3em] uppercase text-accent drop-shadow-md">Estás aquí</span>
                  </div>
                  <div class="flex flex-col items-center gap-3">
                    <div class="h-5 flex items-center"><div class="size-3 rounded-full border-2 border-white/60"></div></div>
                    <span class="font-mono text-[10px] tracking-[0.25em] uppercase text-white/60 drop-shadow-md">Combat</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- DERECHA: Panel "Qué Dominarás" -->
          <div class="flex items-start lg:items-center">
            <div class="w-full bg-black/60 backdrop-blur-md border border-white/10 border-t-2 border-t-primary p-6 lg:p-8 flex flex-col gap-6">
              <span class="font-mono text-[10px] tracking-[0.35em] uppercase text-accent">Qué Dominarás</span>
              <ul class="flex flex-col">
                <li
                  v-for="(item, i) in dominaras"
                  :key="item.titulo"
                  class="flex gap-5 py-5 border-t border-white/10 first:border-t-0 first:pt-0 last:pb-0"
                >
                  <span class="font-mono text-[11px] tracking-[0.2em] text-accent shrink-0 pt-0.5">{{ String(i + 1).padStart(2, '0') }}</span>
                  <div class="flex flex-col gap-1">
                    <h3 class="font-bold uppercase tracking-tight text-white text-base lg:text-lg">{{ item.titulo }}</h3>
                    <p class="text-white/60 text-sm leading-snug">{{ item.desc }}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Secciones imagen + texto con reveal al scroll -->
      <div class="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-12 lg:py-20">
        <SeccionesReveal :secciones="secciones" />
      </div>

      <!-- Barra inferior amarilla -->
      <div class="relative bg-primary text-black">
        <div class="max-w-[1500px] mx-auto flex flex-col sm:flex-row items-stretch">
          <div class="flex-1 px-6 sm:px-10 lg:px-16 py-5 lg:py-6 flex flex-col gap-1 sm:border-r border-black/20">
            <span class="font-mono text-[10px] tracking-[0.35em] uppercase text-black/70">Requisito</span>
            <span class="font-bold text-base lg:text-lg uppercase tracking-tight">3 meses de Formativo</span>
          </div>
          <div class="flex-1 px-6 sm:px-10 lg:px-16 py-5 lg:py-6 flex flex-col gap-1 sm:border-r border-black/20 border-t sm:border-t-0">
            <span class="font-mono text-[10px] tracking-[0.35em] uppercase text-black/70">Horarios</span>
            <span class="font-bold text-base lg:text-lg uppercase tracking-tight">Mar · Jue 19:30 &middot; Sáb 12:00</span>
          </div>
          <router-link
            to="/clases/muay-thai-combat"
            class="bg-black text-white font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 px-8 lg:px-12 py-6 hover:bg-black/80 transition-colors"
          >
            Subir de Nivel
            <span class="material-symbols-outlined">arrow_forward</span>
          </router-link>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Navbar from '../layouts/Navbar.vue';
import Footer from '../layouts/Footer.vue';
import SeccionesReveal from '../components/SeccionesReveal.vue';

const secciones = [
  {
    label: '01 / Encadenamiento',
    titulo: 'Combinaciones que Fluyen',
    texto: 'Aquí dejas de tirar golpes sueltos y empiezas a leer secuencias. Un jab abre el codo, el codo abre la rodilla, la rodilla abre la patada. Tres, cuatro, cinco movimientos hilados que el cuerpo arma sin pedir permiso. La técnica deja de pensarse y empieza a salir.',
    imagenIzquierda: true,
  },
  {
    label: '02 / Distancia corta',
    titulo: 'Clinch y Rodillas',
    texto: 'El Muay Thai vive en el cuerpo a cuerpo. Cuello, agarres, control de postura, pasajes y rodillazos cortos. Aquí aprendes a trabajar pegado al rival sin perder estructura — el espacio donde los principiantes se quedan sin aire y los amateurs se vuelven peligrosos.',
    imagenIzquierda: false,
  },
  {
    label: '03 / Primer contacto',
    titulo: 'Sparring Controlado',
    texto: 'Antes del Combat, hay que tocar y dejarse tocar. El sparring aquí es al 20%: sin pegar a matar, pero con la presión real de un compañero que responde. Es donde aprendes a respirar bajo presión, leer fintas y descubrir qué de tu técnica funciona cuando hay alguien al otro lado.',
    imagenIzquierda: true,
  },
];

const amateurVideos = [
  '/amateur/amateur1.mp4',
  '/amateur/amateur2.mp4',
];
const videoActual = ref(0);

function siguienteVideo() {
  videoActual.value = (videoActual.value + 1) % amateurVideos.length;
}

const dominaras = [
  { titulo: 'Combinaciones Encadenadas', desc: 'De golpes sueltos a series fluidas de 3-4 técnicas.' },
  { titulo: 'Clinch y Rodillazos', desc: 'Control del agarre, pasaje de cuello y trabajo de rodilla.' },
  { titulo: 'Timing y Lectura', desc: 'Contras, fintas y distancia ante un compañero que responde.' },
  { titulo: 'Sparring Ligero', desc: 'Primer contacto controlado, sin presión, al 40%.' },
];
</script>

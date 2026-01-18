<template>
  <div class="bg-black font-display text-white min-h-screen selection:bg-primary selection:text-black">
    <div class="relative flex min-h-screen flex-col overflow-x-hidden">
      <!-- Textured Background Overlay -->
      <div class="absolute inset-0 z-0 opacity-30 pointer-events-none mix-blend-overlay bg-cover bg-center" style="background-image: url('https://www.transparenttextures.com/patterns/dark-matter.png');"></div>
      
      <Navbar />

      <main class="relative z-10 flex flex-col items-center">
        <!-- Elite Team Section -->
        <section class="w-full py-16 px-6 md:px-40">
          <div class="flex flex-col gap-4 mb-10">
            <div class="flex items-center gap-2 text-primary font-bold tracking-[0.2em] uppercase text-xs">
              <span class="material-symbols-outlined text-sm">sports_martial_arts</span>
              Elite Muay Thai Fighters
            </div>
            <h2 class="text-3xl md:text-5xl font-black uppercase italic tracking-tight leading-none">
              HONOR Y <span class="text-primary italic">LIDERAZGO</span>
            </h2>
            <p class="max-w-2xl text-white/40 text-sm md:text-base leading-relaxed uppercase tracking-wider">
              Entrena con campeones. Nuestro equipo de elite está aquí para llevar tu técnica al siguiente nivel con disciplina y respeto.
            </p>
          </div>

          <div class="flex overflow-x-auto hide-scrollbar py-4 gap-8">
            <div class="flex items-stretch gap-8">
              <!-- Fighter 1 -->
              <div class="flex h-full w-72 md:w-80 flex-col gap-5 group cursor-pointer">
                <div class="relative w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.03] border-b-4 border-primary" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCMHwkFWOwFEprWepJwLocmgk3oFs6MwRkg9vf6FHV3cva8TDFkKAZrxgd4wGiBM4CtsIskdg4eQ8zsRIj_RLG4RWVA5c20ufXzOBLRZ0nwyGH2SiTlXs0fU_e_6GuQu-6menvfrSEB7_20ts6la3OhduxODwkoihSJiWUtL08v_R3vz623GeJb4Y4xBL47AWZAm15OJFJCGKuqhsjDYEa-YgJRTwSjcueRY4DqE9aK9a_OY5S1CwrCCgzsjoPsWSxVixZAm4L46Ws");'>
                  <div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
                  <div class="absolute bottom-4 left-4">
                    <span class="bg-primary text-black px-3 py-1 text-[10px] font-black uppercase rounded-sm tracking-widest shadow-lg">Champion</span>
                  </div>
                </div>
                <div class="px-1">
                  <p class="text-primary text-2xl font-black uppercase italic tracking-tighter">Nong-O Pro</p>
                  <div class="flex items-center gap-2 mt-1">
                    <span class="text-primary material-symbols-outlined text-sm">military_tech</span>
                    <p class="text-white/60 text-xs font-bold uppercase tracking-widest leading-none mt-1">Record: 12-2-0</p>
                  </div>
                  <p class="text-white/40 text-[10px] mt-2 uppercase font-black tracking-widest">Clinch & Knee Specialist</p>
                </div>
              </div>

              <!-- Fighter 2 -->
              <div class="flex h-full w-72 md:w-80 flex-col gap-5 group cursor-pointer">
                <div class="relative w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.03] border-b-4 border-primary" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDBjINDBtKZGhE1BM_uVpdtcoqxKiC7SFrFRnVywcb7kY3mXCTFLpiyH0V2mU-P4-W0PM0RdFCrMNmbwRWGqQ7aI2mtPlGpPjsj14crHnh6CJf8hz60N02fRpAGWuMu5eM89SgrStIeNQM9yGtxO-TRacogcvx_mciAJV5YjjmYsY8Yga1nMDcIC2YYyrQnXez-wwQekxd0JnSs0S_zZUWPg5-GO68-Peu-vJL3mfCt5m_2rinWdgAJySmJ_L1i-0WhJePv-sWGmQs");'>
                  <div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
                  <div class="absolute bottom-4 left-4">
                    <span class="bg-white text-black px-3 py-1 text-[10px] font-black uppercase rounded-sm tracking-widest shadow-lg">Head Coach</span>
                  </div>
                </div>
                <div class="px-1">
                  <p class="text-primary text-2xl font-black uppercase italic tracking-tighter">Coach Liam</p>
                  <div class="flex items-center gap-2 mt-1">
                    <span class="text-primary material-symbols-outlined text-sm">stars</span>
                    <p class="text-white/60 text-xs font-bold uppercase tracking-widest leading-none mt-1">20+ Years Experience</p>
                  </div>
                  <p class="text-white/40 text-[10px] mt-2 uppercase font-black tracking-widest">Master of Technical Striking</p>
                </div>
              </div>

              <!-- Fighter 3 -->
              <div class="flex h-full w-72 md:w-80 flex-col gap-5 group cursor-pointer">
                <div class="relative w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.03] border-b-4 border-primary" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDhwOutTiAEqeGJey54dvEhIHF5Z2DLLJrX2C8GFWMiwgfurob4BZv4sWQ5j-Gx2sq19qhbS8YrmQXWnJyzovefMC7q_RxIODip3dNFUvHqH9EJatdHaWMganqDRWj9eUGrN1UbDLpROz2fLF-dMOone7018r1O3t4GXnPm2z8D3ogoUNkQ-hh-5iygfHGmpmSLe47Pq7539dKGHy2CcmVp1nP2usRqEG6IFgA4RIpLvuuFDhx6_qNwdKT-kKJOcV9ngKRRlzBko_g");'>
                  <div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
                  <div class="absolute bottom-4 left-4">
                    <span class="bg-primary text-black px-3 py-1 text-[10px] font-black uppercase rounded-sm tracking-widest shadow-lg">Pro Fighter</span>
                  </div>
                </div>
                <div class="px-1">
                  <p class="text-primary text-2xl font-black uppercase italic tracking-tighter">Powerhouse Sarah</p>
                  <div class="flex items-center gap-2 mt-1">
                    <span class="text-primary material-symbols-outlined text-sm">military_tech</span>
                    <p class="text-white/60 text-xs font-bold uppercase tracking-widest leading-none mt-1">Record: 10-3-0</p>
                  </div>
                  <p class="text-white/40 text-[10px] mt-2 uppercase font-black tracking-widest">High-Impact Kicking Power</p>
                </div>
              </div>

              <!-- Fighter 4 -->
              <div class="flex h-full w-72 md:w-80 flex-col gap-5 group cursor-pointer">
                <div class="relative w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.03] border-b-4 border-primary" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBWpov12NvLRQZObHBTczdIttp7cXonQdE41idcRqGMqYA_bBnvk0ucUsnXSVnF7TTsrtUqXV3mDByqWeETc4knQZvoVPOinoGdEhNqI1i5jgQHTW81RtzQV3_VFdDVRuf89sU8aX-6kPeRZ4j3GsVZJUVFPgxU-PX-lARI5HVJudimtvtDP9vsZ6JCnXbjJG92ZCQ9wwT-SnpV2RRzi4EF-NnHF9NWB1LmsN_E980zu_Kzd5V4fVwsnkHo7c2TrJztTbFOeXqRVB4");'>
                  <div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
                  <div class="absolute bottom-4 left-4">
                    <span class="bg-primary text-black px-3 py-1 text-[10px] font-black uppercase rounded-sm tracking-widest shadow-lg">Rising Star</span>
                  </div>
                </div>
                <div class="px-1">
                  <p class="text-primary text-2xl font-black uppercase italic tracking-tighter">The Elbow King</p>
                  <div class="flex items-center gap-2 mt-1">
                    <span class="text-primary material-symbols-outlined text-sm">military_tech</span>
                    <p class="text-white/60 text-xs font-bold uppercase tracking-widest leading-none mt-1">Record: 8-1-2</p>
                  </div>
                  <p class="text-white/40 text-[10px] mt-2 uppercase font-black tracking-widest">Technical Elbow Master</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Header for Schedule Section -->
        <div class="flex flex-col items-center gap-4 mt-8 mb-16">
          <div class="flex items-center gap-4">
            <div class="size-12 text-primary">
              <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"></path>
              </svg>
            </div>
            <h1 class="text-white text-3xl md:text-5xl font-black uppercase italic tracking-tighter">
              <span class="text-primary italic">RAMA</span> HORARIOS 2026
            </h1>
          </div>
        </div>

        <div class="w-full max-w-[1100px] flex flex-col gap-24 px-4 md:px-0 mb-32">
          <!-- AM BLOCK -->
          <div class="flex flex-col gap-10">
            <div class="flex">
              <div class="bg-primary text-black px-12 py-3 rounded-full font-black text-3xl italic uppercase tracking-tighter shadow-[0_0_30px_rgba(255,215,0,0.3)]">AM</div>
            </div>
            
            <div class="overflow-x-auto pb-4 hide-scrollbar">
              <table class="w-full border-separate border-spacing-x-2 border-spacing-y-2">
                <thead>
                  <tr>
                    <th class="w-[140px]"></th>
                    <th v-for="day in ['LUNES', 'MARTES', 'MIÉCOLES', 'JUEVES', 'VIERNES', 'SÁBADO']" :key="day" class="text-primary text-[11px] font-black uppercase tracking-[0.2em] py-4 text-center">
                      {{ day }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <!-- 7:00 - 8:00 -->
                  <tr class="h-14">
                    <td class="text-[10px] font-black text-white/40 uppercase tracking-widest text-right pr-6 whitespace-nowrap">7:00 - 8:00 HRS.</td>
                    <td class="bg-primary text-black p-3 text-center rounded-sm font-black text-[10px] uppercase italic">Muay Thai</td>
                    <td class="bg-primary text-black p-3 text-center rounded-sm font-black text-[10px] uppercase italic">Cross Training</td>
                    <td class="bg-primary text-black p-3 text-center rounded-sm font-black text-[10px] uppercase italic">Muay Thai</td>
                    <td class="bg-primary text-black p-3 text-center rounded-sm font-black text-[10px] uppercase italic">Cross Training</td>
                    <td class="bg-primary text-black p-3 text-center rounded-sm font-black text-[10px] uppercase italic">Muay Thai</td>
                    <td class="bg-transparent border border-white/5 opacity-20"></td>
                  </tr>
                  <!-- 10:00 - 11:00 -->
                  <tr class="h-14">
                    <td class="text-[10px] font-black text-white/40 uppercase tracking-widest text-right pr-6 whitespace-nowrap">10:00 - 11:00 HRS.</td>
                    <td class="bg-transparent border border-white/5 opacity-10"></td>
                    <td class="bg-transparent border border-white/5 opacity-10"></td>
                    <td class="bg-transparent border border-white/5 opacity-10"></td>
                    <td class="bg-transparent border border-white/5 opacity-10"></td>
                    <td class="bg-transparent border border-white/5 opacity-10"></td>
                    <td class="bg-primary text-black p-3 text-center rounded-sm font-black text-[10px] uppercase italic">Muay Thai</td>
                  </tr>
                  <!-- 11:00 - 12:00 -->
                  <tr class="h-14">
                    <td class="text-[10px] font-black text-white/40 uppercase tracking-widest text-right pr-6 whitespace-nowrap">11:00 - 12:00 HRS.</td>
                    <td class="bg-primary text-black p-3 text-center rounded-sm font-black text-[10px] uppercase italic">Muay Thai</td>
                    <td class="bg-primary text-black p-3 text-center rounded-sm font-black text-[10px] uppercase italic">Muay Thai</td>
                    <td class="bg-primary text-black p-3 text-center rounded-sm font-black text-[10px] uppercase italic">Muay Thai</td>
                    <td class="bg-primary text-black p-3 text-center rounded-sm font-black text-[10px] uppercase italic">Muay Thai</td>
                    <td class="bg-primary text-black p-3 text-center rounded-sm font-black text-[10px] uppercase italic">Muay Thai</td>
                    <td class="bg-primary text-black p-3 text-center rounded-sm font-black text-[10px] uppercase italic">Cross Training</td>
                  </tr>
                  <!-- 12:00 - 13:00 -->
                  <tr class="h-14">
                    <td class="text-[10px] font-black text-white/40 uppercase tracking-widest text-right pr-6 whitespace-nowrap">12:00 - 13:00 HRS.</td>
                    <td class="bg-transparent border border-white/5 opacity-10"></td>
                    <td class="bg-transparent border border-white/5 opacity-10"></td>
                    <td class="bg-transparent border border-white/5 opacity-10"></td>
                    <td class="bg-transparent border border-white/5 opacity-10"></td>
                    <td class="bg-transparent border border-white/5 opacity-10"></td>
                    <td class="bg-primary text-black p-3 text-center rounded-sm font-black text-[10px] uppercase italic">Muay Thai</td>
                  </tr>
                  <!-- 13:00 - 14:00 -->
                  <tr class="h-14">
                    <td class="text-[10px] font-black text-white/40 uppercase tracking-widest text-right pr-6 whitespace-nowrap">13:00 - 14:00 HRS.</td>
                    <td class="bg-primary text-black p-3 text-center rounded-sm font-black text-[10px] uppercase italic leading-tight">Box Training</td>
                    <td class="bg-primary text-black p-3 text-center rounded-sm font-black text-[10px] uppercase italic leading-tight">Cross Training</td>
                    <td class="bg-primary text-black p-3 text-center rounded-sm font-black text-[10px] uppercase italic leading-tight">Box Training</td>
                    <td class="bg-primary text-black p-3 text-center rounded-sm font-black text-[10px] uppercase italic leading-tight">Cross Training</td>
                    <td class="bg-primary text-black p-3 text-center rounded-sm font-black text-[10px] uppercase italic leading-tight">Box Training</td>
                    <td class="bg-primary text-black p-3 text-center rounded-sm font-black text-[10px] uppercase italic leading-tight whitespace-nowrap">Jui Jitsu No Gi</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- PM BLOCK -->
          <div class="flex flex-col gap-10">
            <div class="flex">
              <div class="bg-primary text-black px-12 py-3 rounded-full font-black text-3xl italic uppercase tracking-tighter shadow-[0_0_30px_rgba(255,215,0,0.3)]">PM</div>
            </div>
            
            <div class="overflow-x-auto pb-4 hide-scrollbar">
              <table class="w-full border-separate border-spacing-x-2 border-spacing-y-2">
                <thead>
                  <tr>
                    <th class="w-[140px]"></th>
                    <th v-for="day in ['LUNES', 'MARTES', 'MIÉCOLES', 'JUEVES', 'VIERNES']" :key="day" class="text-primary text-[11px] font-black uppercase tracking-[0.2em] py-4 text-center">
                      {{ day }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <!-- 17:30 - 18:30 -->
                  <tr class="h-14">
                    <td class="text-[10px] font-black text-white/40 uppercase tracking-widest text-right pr-6 whitespace-nowrap">17:30 - 18:30 HRS.</td>
                    <td class="bg-primary text-black p-3 text-center rounded-sm font-black text-[10px] uppercase italic">Boxeo</td>
                    <td class="bg-primary text-black p-3 text-center rounded-sm font-black text-[10px] uppercase italic">Muay Thai</td>
                    <td class="bg-primary text-black p-3 text-center rounded-sm font-black text-[10px] uppercase italic">Boxeo</td>
                    <td class="bg-primary text-black p-3 text-center rounded-sm font-black text-[10px] uppercase italic">Muay Thai</td>
                    <td class="bg-primary text-black p-3 text-center rounded-sm font-black text-[10px] uppercase italic">Boxeo</td>
                  </tr>
                  <!-- 18:30 - 19:30 -->
                  <tr class="h-14">
                    <td class="text-[10px] font-black text-white/40 uppercase tracking-widest text-right pr-6 whitespace-nowrap">18:30 - 19:30 HRS.</td>
                    <td class="bg-primary text-black p-3 text-center rounded-sm font-black text-[10px] uppercase italic">Muay Thai</td>
                    <td class="bg-primary text-black p-3 text-center rounded-sm font-black text-[10px] uppercase italic leading-tight">Cross Training</td>
                    <td class="bg-primary text-black p-3 text-center rounded-sm font-black text-[10px] uppercase italic">Muay Thai</td>
                    <td class="bg-primary text-black p-3 text-center rounded-sm font-black text-[10px] uppercase italic leading-tight">Cross Training</td>
                    <td class="bg-primary text-black p-3 text-center rounded-sm font-black text-[10px] uppercase italic">Muay Thai</td>
                  </tr>
                  <!-- 19:30 - 20:30 -->
                  <tr class="h-14">
                    <td class="text-[10px] font-black text-white/40 uppercase tracking-widest text-right pr-6 whitespace-nowrap">19:30 - 20:30 HRS.</td>
                    <td class="bg-primary text-black p-3 text-center rounded-sm font-black text-[10px] uppercase italic leading-tight">Cross Training</td>
                    <td class="bg-primary text-black p-3 text-center rounded-sm font-black text-[10px] uppercase italic">Muay Thai</td>
                    <td class="bg-primary text-black p-3 text-center rounded-sm font-black text-[10px] uppercase italic leading-tight">Cross Training</td>
                    <td class="bg-primary text-black p-3 text-center rounded-sm font-black text-[10px] uppercase italic">Muay Thai</td>
                    <td class="bg-primary text-black p-3 text-center rounded-sm font-black text-[10px] uppercase italic leading-tight">Cross Training</td>
                  </tr>
                  <!-- 20:30 - 22:00 -->
                  <tr class="h-14">
                    <td class="text-[10px] font-black text-white/40 uppercase tracking-widest text-right pr-6 whitespace-nowrap">20:30 - 22:00 HRS.</td>
                    <td class="bg-primary text-black p-3 text-center rounded-sm font-black text-[10px] uppercase italic">Muay Thai</td>
                    <td class="bg-primary text-black p-3 text-center rounded-sm font-black text-[10px] uppercase italic leading-tight">Jui Jitsu No Gi</td>
                    <td class="bg-primary text-black p-3 text-center rounded-sm font-black text-[10px] uppercase italic">Muay Thai</td>
                    <td class="bg-primary text-black p-3 text-center rounded-sm font-black text-[10px] uppercase italic leading-tight">Jui Jitsu No Gi</td>
                    <td class="bg-transparent border border-white/5 opacity-10"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- CTA Section: Clase Gratis -->
        <div class="mt-20 flex flex-col md:flex-row items-center justify-center gap-8 text-center bg-white/5 p-10 md:p-12 rounded-3xl border border-white/5 backdrop-blur-sm mx-4 md:mx-0 w-full max-w-[1100px]">
          <p class="text-white/60 text-lg md:text-xl font-medium uppercase tracking-wide">
            ¿NUEVO EN EL MUAY THAI? <span class="text-primary font-black italic">COMIENZA TU VIAJE HOY MISMO.</span>
          </p>
          <button 
            @click="openBoxMagic"
            class="group flex h-16 items-center justify-center gap-4 rounded-xl bg-primary px-10 hover:brightness-110 hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,215,0,0.2)]"
          >
            <span class="material-symbols-outlined text-black font-bold text-3xl">confirmation_number</span>
            <span class="text-black text-sm font-black uppercase tracking-[0.2em] italic">Reserva tu Clase Gratis</span>
          </button>
        </div>

        <Footer />
      </main>
    </div>
  </div>
</template>

<script setup>
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';
import { openBoxMagic } from '../utils/deepLinking';
</script>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
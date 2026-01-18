<template>
  <div class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white transition-colors duration-300">
    <Navbar />
    <main class="flex flex-col">
      <section class="relative min-h-[95vh] flex flex-col items-center justify-center overflow-hidden">
        <div class="absolute inset-0 z-0">
          <div class="absolute inset-0 hero-overlay z-10"></div>
          <img class="w-full h-full object-cover" alt="Muay Thai training in Rama Muay Thai" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvyjBaHUvGYc_QrM-_BjIE0zyOMqKMSaQEnskpIH1Bd2W4uliKeDlP55z907CGwXdZfQjtcsTb4sfGods8BK-xox3jZopKW1E0K5q4K6eCpmnuJ68vsqx9pO6sWdsbi59dEoOQug5gs5kniih8Gg0U0u8TEBs_WIb-LuVekyy-ctoq77Ff_UznnJ3HwSCxtNRxcFWJRG7Tn-npCX7Jet4jN79bbLRIMBk-RYhgJJQuapUxtpIa5OhedwS9I7YyW5oDH_cEFkkGndA"/>
        </div>
        <div class="relative z-20 max-w-[1000px] w-full px-6 text-center">
          <div class="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full border border-accent/50 bg-black/40 text-accent backdrop-blur-sm">
            <span class="material-symbols-outlined text-sm">workspace_premium</span>
            <span class="text-xs font-bold uppercase tracking-[0.25em]">Tradición • Respeto • Poder</span>
          </div>
          <h1 class="text-white text-5xl md:text-8xl font-black leading-[1.05] tracking-tighter mb-8 uppercase drop-shadow-2xl">
            RAMA MUAY THAI <br class="hidden md:block"/> <span class="text-gold-gradient">ESCUELA DE BOXEO TAILANDÉS</span>
          </h1>
          <p class="text-slate-200 text-lg md:text-2xl font-light max-w-2xl mx-auto mb-12 leading-relaxed">
            Domina el arte de las ocho extremidades en el corazón de la tradición. 
            Entrena con el espíritu de un guerrero Rama.
          </p>
          <div class="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <button class="w-full sm:w-auto min-w-[280px] h-16 bg-primary hover:brightness-110 text-black rounded-lg font-black text-xl shadow-2xl shadow-primary/30 transition-all flex items-center justify-center gap-3 uppercase tracking-widest border-b-4 border-black/20">
              Prueba Gratis
              <span class="material-symbols-outlined">shield</span>
            </button>
            <router-link to="/planes" class="w-full sm:w-auto min-w-[200px] h-16 border-2 border-primary/50 hover:bg-primary/10 text-primary rounded-lg font-bold text-lg backdrop-blur-sm transition-all uppercase tracking-widest flex items-center justify-center">
              Ver Planes
            </router-link>
          </div>
        </div>
        <div class="relative z-20 w-full max-w-[1100px] mx-auto mt-20 px-4">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="flex flex-col items-center justify-center gap-2 rounded-xl p-10 bg-black/60 backdrop-blur-xl border-t border-accent/30 shadow-2xl">
              <p class="text-gold-gradient text-4xl font-black">100+</p>
              <div class="h-px w-8 bg-primary mb-1"></div>
              <p class="text-slate-400 text-xs font-bold uppercase tracking-[0.3em]">Estudiantes</p>
            </div>
            <div class="flex flex-col items-center justify-center gap-2 rounded-xl p-10 bg-black/60 backdrop-blur-xl border-t border-accent/30 shadow-2xl">
              <p class="text-gold-gradient text-4xl font-black">Rama</p>
              <div class="h-px w-8 bg-primary mb-1"></div>
              <p class="text-slate-400 text-xs font-bold uppercase tracking-[0.3em]">Legado Tailandés</p>
            </div>
            <div class="flex flex-col items-center justify-center gap-2 rounded-xl p-10 bg-black/60 backdrop-blur-xl border-t border-accent/30 shadow-2xl">
              <p class="text-gold-gradient text-4xl font-black">40+</p>
              <div class="h-px w-8 bg-primary mb-1"></div>
              <p class="text-slate-400 text-xs font-bold uppercase tracking-[0.3em]">Clases Semanales</p>
            </div>
          </div>
        </div>
      </section>
      <section class="py-32 px-6 max-w-[1200px] mx-auto w-full">
        <div class="grid md:grid-cols-12 gap-16 items-center">
          <div class="md:col-span-5 flex flex-col gap-8">
            <div class="flex flex-col gap-2">
              <h2 class="text-accent text-sm font-black uppercase tracking-[0.5em]">Rama Muay Thai</h2>
              <div class="w-16 h-1 bg-primary"></div>
            </div>
            <h1 class="text-slate-900 dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-tight uppercase">
              HONOR, RESPETO Y<br/><span class="text-primary">DISCIPLINA</span>.
            </h1>
            <p class="text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-light">
              Nuestra escuela honra el linaje Rama. No solo formamos luchadores, sino personas con integridad y una técnica superior bajo la tradición tailandesa.
            </p>
            <div class="flex flex-col gap-8 mt-4">
              <div class="flex gap-5 items-start">
                <div class="p-4 bg-primary/10 rounded-xl text-accent border border-accent/20">
                  <span class="material-symbols-outlined text-2xl">verified_user</span>
                </div>
                <div>
                  <h3 class="text-slate-900 dark:text-accent font-bold text-xl mb-1 uppercase tracking-tight">Cultura Rama</h3>
                  <p class="text-slate-500 dark:text-slate-400 leading-snug">Preservamos la esencia del Muay Thai Boran y el respeto al maestro.</p>
                </div>
              </div>
              <div class="flex gap-5 items-start">
                <div class="p-4 bg-primary/10 rounded-xl text-accent border border-accent/20">
                  <span class="material-symbols-outlined text-2xl">electric_bolt</span>
                </div>
                <div>
                  <h3 class="text-slate-900 dark:text-accent font-bold text-xl mb-1 uppercase tracking-tight">Formación Integral</h3>
                  <p class="text-slate-500 dark:text-slate-400 leading-snug">Acondicionamiento físico extremo y técnica de alta competición.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="md:col-span-7 relative">
            <div class="grid grid-cols-2 gap-6">
              <div class="pt-16">
                <div class="relative group">
                  <div class="absolute -inset-1 bg-gradient-to-r from-accent to-primary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                  <img class="relative rounded-2xl shadow-2xl border-2 border-accent/20 object-cover w-full h-[450px]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcswUpIFeVCSSQ52DXAQlLqr5GOn0QTLkscaDx_uRu2g6aaVHzGgD2h7wMr6n3Evljj38PVt_eSsZ9X2I-1KaDyG58EipwfgP2AUWjUecClbyQJomhZmyY1KSl5rVMHCuhIQWrrtzu5YR0Kf47ALWIsJhbQGxAnAZF0z2cLsnpZxRBaD8SNgZHz3EBEdNalRT2Rpi6jqtdge-03eigxOp8zJj1DrY8V6_nCUfeXwzP7K6TUCbpumfZRhVZzfFiXnTEObIZcsP70rA" alt="Training at Rama Muay Thai"/>
                </div>
              </div>
              <div>
                <div class="relative group">
                  <div class="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                  <img class="relative rounded-2xl shadow-2xl border-2 border-accent/20 object-cover w-full h-[450px]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAme3VDdW6hIoc0TZMRPSQiW1zErRL8rzw1aS1UdW2tEDM6HAq2p43mvSiIN2NM-9ttlG-_gxsMtBGhVqG9O_P4aE6-ObutJDQQdGitKZJBUfpQVXDuY8XaUxy1h7GqBNZWjeFFFXHASUkWXqVtnjx30VLPGwS_DbwTxuIh8NcW-fkRtPtG-hKLMg2dvcYgNV2GOWQ9npBR5E8NBBrp8oNEFmtXoNVhSmwotMWRV5r8VMbjRSqL3nRa96z6ctSYGcuyrwFWW2kn2zA" alt="Rama Muay Thai Gear"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer class="bg-slate-100 dark:bg-[#0c0505] border-t border-accent/10 py-20 px-6">
      <div class="max-w-[1200px] mx-auto text-center flex flex-col items-center gap-12">
        <div class="flex items-center gap-3 text-accent">
          <span class="material-symbols-outlined text-4xl">sports_mma</span>
          <span class="text-2xl font-black uppercase tracking-tighter">RAMA MUAY THAI</span>
        </div>
        <div class="pt-12 border-t border-accent/10 w-full">
          <p class="text-slate-400 dark:text-slate-600 text-xs font-medium tracking-widest uppercase">
            © 2024 Rama Muay Thai School. El Honor de la Tradición.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import Navbar from './Navbar.vue';
</script>

<style scoped>
.hero-overlay {
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.95));
}
.text-gold-gradient {
  background: linear-gradient(to bottom right, #FFD700, #FBBF24, #DAA520);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>

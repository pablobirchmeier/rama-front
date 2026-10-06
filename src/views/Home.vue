<template>
  <div class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white transition-colors duration-300">
    <Navbar />
    <main class="flex flex-col">
      <!-- 1. HERO -->
      <section class="relative min-h-[95vh] flex flex-col items-center justify-center overflow-hidden">
        <div class="absolute inset-0 z-0">
          <div class="absolute inset-0 hero-overlay z-10"></div>
          <video
            class="w-full h-full object-cover"
            poster="/inicio.jpg"
            src="/sparring/Sparring%20Profe%20Ramiro%20vs%20Omar.mp4"
            autoplay
            muted
            loop
            playsinline
            preload="auto"
          ></video>
        </div>
        <div class="revelar relative z-20 max-w-[1000px] w-full px-6 py-24 text-center flex flex-col items-center">
          <div class="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full border border-accent/50 bg-black/40 text-accent backdrop-blur-sm">
            <span class="material-symbols-outlined text-sm">workspace_premium</span>
            <span class="text-xs font-bold uppercase tracking-[0.25em]">Desde 2015</span>
          </div>
          <h1 class="text-4xl md:text-7xl font-black uppercase leading-[0.95] tracking-tight mb-8">
            Entrena Muay Thai.<br /><span class="text-primary">Sé parte de Rama.</span>
          </h1>
          <p class="text-slate-200 text-lg md:text-2xl font-light max-w-2xl mx-auto mb-6 leading-relaxed">
            Una escuela para aprender, entrenar y superarte, sin importar tu nivel de experiencia.
          </p>
          <p class="text-white/60 text-base md:text-lg font-light max-w-2xl mx-auto mb-4 leading-relaxed">
            Desde 2015 enseñamos Muay Thai combinando técnica, preparación física y comunidad en un ambiente de respeto y compañerismo.
          </p>
          <p class="text-white font-bold text-base md:text-lg mb-12">
            No necesitas experiencia previa. Solo las ganas de comenzar.
          </p>
          <button
            @click="openBoxMagic"
            class="w-full sm:w-auto min-w-[300px] h-16 px-8 bg-primary hover:brightness-110 text-black rounded-lg font-black text-lg shadow-2xl shadow-primary/30 transition-all flex items-center justify-center gap-3 uppercase tracking-widest border-b-4 border-black/20"
          >
            Agenda tu clase de prueba
            <span class="material-symbols-outlined">arrow_forward</span>
          </button>
          <router-link
            to="/horarios"
            class="mt-4 w-full sm:w-auto min-w-[300px] h-14 px-8 border-2 border-primary/50 hover:bg-primary/10 text-primary rounded-lg font-bold text-sm uppercase tracking-widest backdrop-blur-sm transition-all flex items-center justify-center gap-3"
          >
            Ver horarios
            <span class="material-symbols-outlined">calendar_month</span>
          </router-link>
        </div>
      </section>

      <!-- 2. MUCHO MÁS QUE ENTRENAR -->
      <section class="py-24 lg:py-32 px-6 max-w-[1200px] mx-auto w-full">
        <div class="grid md:grid-cols-12 gap-16 items-center">
          <div class="md:col-span-5 flex flex-col gap-8">
            <div class="flex flex-col gap-2">
              <span class="text-accent text-xs font-black uppercase tracking-[0.4em]">Mucho más que entrenar</span>
              <div class="w-16 h-1 bg-primary"></div>
            </div>
            <h2 class="text-4xl md:text-5xl font-black leading-tight tracking-tight uppercase">
              Artes marciales para tu <span class="text-primary">desarrollo</span>.
            </h2>
            <p class="text-white/70 text-lg leading-relaxed font-light">
              En Rama creemos en las artes marciales como una herramienta de desarrollo físico y personal.
            </p>
            <p class="text-white/70 text-lg leading-relaxed font-light">
              Aquí puedes comenzar desde cero, mejorar tu condición física, perfeccionar tu técnica o prepararte para competir.
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="d in disciplinas"
                :key="d"
                class="px-4 py-2 rounded-full border border-primary/40 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest"
              >{{ d }}</span>
            </div>
            <button
              @click="scrollTo('entrenamientos')"
              class="self-start h-14 px-8 border-2 border-primary/50 hover:bg-primary/10 text-primary rounded-lg font-bold text-sm uppercase tracking-widest transition-all flex items-center gap-3"
            >
              Conoce nuestros entrenamientos
              <span class="material-symbols-outlined">arrow_downward</span>
            </button>
          </div>
          <div class="md:col-span-7 flex flex-col gap-6">
            <div class="relative group">
              <div class="absolute -inset-1 bg-gradient-to-r from-accent to-primary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <img class="relative rounded-2xl shadow-2xl border-2 border-accent/20 object-cover w-full aspect-3/2" src="/1home.JPG" alt="Entrenamiento en Rama Muay Thai" loading="lazy" decoding="async"/>
            </div>
            <div class="relative group">
              <div class="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <img class="relative rounded-2xl shadow-2xl border-2 border-accent/20 object-cover w-full aspect-3/2" src="/2home.JPG" alt="Comunidad Rama Muay Thai" loading="lazy" decoding="async"/>
            </div>
          </div>
        </div>
      </section>

      <!-- 3. EMPIEZA A TU RITMO -->
      <section class="relative py-20 lg:py-24 overflow-hidden border-y border-primary/20 bg-primary/[0.04]">
        <div class="relative max-w-3xl mx-auto px-6 text-center flex flex-col items-center gap-6">
          <span class="text-primary font-bold tracking-[0.4em] uppercase text-xs">Empieza a tu ritmo</span>
          <h2 class="text-3xl md:text-5xl font-black uppercase tracking-tight leading-[0.95]">
            ¿Nunca has entrenado Muay Thai?<br /><span class="text-primary">Perfecto.</span>
          </h2>
          <p class="text-white/65 text-base md:text-lg font-light leading-relaxed max-w-2xl">
            Nuestro programa formativo está diseñado para enseñarte desde las bases y acompañarte progresivamente en tu aprendizaje.
          </p>
          <p class="font-mono text-sm md:text-base tracking-[0.3em] uppercase text-accent">Aprende. Entrena. Progresa.</p>
          <button
            @click="openBoxMagic"
            class="h-14 px-10 bg-primary text-black font-black uppercase tracking-widest text-sm rounded-lg hover:brightness-110 transition-all flex items-center justify-center gap-3"
          >
            Quiero probar una clase
            <span class="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </section>

      <!-- 4. MUAY THAI PARA TODOS LOS NIVELES -->
      <section id="entrenamientos" class="scroll-mt-20 py-24 lg:py-32 px-6 max-w-[1400px] mx-auto w-full">
        <div class="flex flex-col items-center text-center gap-4 mb-14 lg:mb-20">
          <span class="text-primary font-bold tracking-[0.4em] uppercase text-xs">Muay Thai</span>
          <h2 class="text-4xl md:text-6xl font-black uppercase tracking-tight leading-[0.95]">
            Muay Thai para <span class="text-primary">todos los niveles</span>
          </h2>
          <p class="max-w-2xl text-white/60 text-base md:text-lg font-light leading-relaxed">
            Aprende Muay Thai de manera progresiva, desde sus fundamentos hasta el entrenamiento competitivo.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7">
          <router-link
            v-for="(nivel, i) in niveles"
            :key="nivel.nombre"
            :to="nivel.to"
            class="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-primary/60 transition-all"
          >
            <div class="aspect-[3/4] relative">
              <img
                :src="nivel.imagen"
                :alt="nivel.nombre"
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/10"></div>
              <div class="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                <span class="font-mono text-[10px] tracking-[0.4em] uppercase text-accent mb-3">0{{ i + 1 }} / Muay Thai</span>
                <h3 class="text-2xl md:text-3xl font-black uppercase tracking-tight mb-1">{{ nivel.nombre }}</h3>
                <p class="text-primary font-bold text-sm uppercase tracking-wider mb-3">{{ nivel.lema }}</p>
                <p class="text-white/75 text-sm leading-relaxed mb-3">{{ nivel.texto }}</p>
                <p class="text-white/50 text-xs leading-relaxed mb-5">{{ nivel.para }}</p>
                <span class="text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                  Ver clase <span class="material-symbols-outlined text-base">arrow_forward</span>
                </span>
              </div>
            </div>
          </router-link>
        </div>
      </section>

      <!-- 5. OTROS ENTRENAMIENTOS -->
      <section class="py-24 lg:py-32 bg-white/[0.015] border-y border-white/5">
        <div class="max-w-[1400px] mx-auto px-6">
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
            <div>
              <span class="text-primary font-bold tracking-[0.4em] uppercase text-xs">Otros entrenamientos</span>
              <h2 class="text-4xl md:text-5xl font-black uppercase tracking-tight mt-3">Complementa tu entrenamiento</h2>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            <component
              :is="item.to ? 'router-link' : 'button'"
              v-for="item in otros"
              :key="item.nombre"
              :to="item.to"
              @click="!item.to && openWhatsApp('Hola Rama! Quiero información sobre entrenamientos personalizados.')"
              class="group text-left flex flex-col rounded-xl overflow-hidden border border-white/10 hover:border-primary/60 bg-black transition-all cursor-pointer"
            >
              <div class="aspect-[4/3] relative overflow-hidden">
                <img
                  :src="item.imagen"
                  :alt="item.nombre"
                  class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              </div>
              <div class="flex flex-col gap-3 p-6 lg:p-7 flex-1">
                <h3 class="text-xl lg:text-2xl font-black uppercase tracking-tight text-primary">{{ item.nombre }}</h3>
                <p class="text-white/70 text-sm leading-relaxed flex-1">{{ item.texto }}</p>
                <span class="text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all mt-2">
                  {{ item.to ? 'Ver clase' : 'Consultar' }} <span class="material-symbols-outlined text-base">arrow_forward</span>
                </span>
              </div>
            </component>
          </div>
        </div>
      </section>

      <!-- 6. TEAM RAMA -->
      <section class="py-24 lg:py-32 px-6 max-w-[1300px] mx-auto w-full">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <!-- sparring2.mp4 es vertical (720x1280): contenedor 9:16 para mostrarlo completo, sin recorte -->
          <div class="relative mx-auto w-full max-w-[360px] lg:max-w-[400px] aspect-[9/16] overflow-hidden rounded-sm">
            <video
              class="video-fundido w-full h-full object-cover"
              src="/sparring/sparring2.mp4"
              autoplay
              muted
              loop
              playsinline
              preload="metadata"
            ></video>
          </div>
          <div class="flex flex-col gap-6">
            <span class="text-primary font-bold tracking-[0.4em] uppercase text-xs">Team Rama</span>
            <h2 class="text-4xl md:text-6xl font-black uppercase tracking-tight leading-[0.95]">
              De la escuela<br />al <span class="text-primary">ring</span>
            </h2>
            <p class="text-white/80 text-lg leading-relaxed">
              Para quienes deciden llevar su entrenamiento un paso más allá.
            </p>
            <p class="text-white/60 text-base leading-relaxed font-light">
              Team Rama reúne a nuestros deportistas en formación, competidores amateur y profesionales que representan a la escuela en diferentes eventos y competencias.
            </p>
            <p class="text-white/60 text-base leading-relaxed font-light">
              El proceso competitivo se construye con disciplina, preparación, respeto y compromiso.
            </p>
            <div class="border-l-4 border-primary pl-5 py-1">
              <p class="text-white text-base leading-relaxed">
                No necesitas querer competir para formar parte de Rama.<br />
                <span class="text-primary font-bold">Pero si algún día decides hacerlo, existe un camino para llegar ahí.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- 7. PLANES -->
      <section class="py-24 lg:py-32 bg-white/[0.015] border-y border-white/5">
        <div class="max-w-[1200px] mx-auto px-6">
          <div class="flex flex-col items-center text-center gap-4 mb-14">
            <span class="text-primary font-bold tracking-[0.4em] uppercase text-xs">Planes</span>
            <h2 class="text-4xl md:text-5xl font-black uppercase tracking-tight">Elige cómo quieres <span class="text-primary">entrenar</span></h2>
            <p class="max-w-2xl text-white/60 text-base md:text-lg font-light leading-relaxed">
              Tenemos diferentes alternativas según tu disponibilidad y objetivos.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div
              v-for="plan in planes"
              :key="plan.nombre"
              class="flex flex-col gap-4 p-7 rounded-2xl border border-white/10 bg-black hover:border-primary/50 transition-all"
            >
              <span class="material-symbols-outlined text-primary text-3xl">{{ plan.icono }}</span>
              <h3 class="text-white font-black uppercase tracking-tight text-lg leading-tight">{{ plan.nombre }}</h3>
              <p class="text-white/55 text-sm leading-relaxed">{{ plan.texto }}</p>
            </div>
          </div>

          <div class="flex flex-col items-center gap-5 mt-14">
            <router-link
              to="/planes"
              class="h-14 px-10 bg-primary text-black font-black uppercase tracking-widest text-sm rounded-lg hover:brightness-110 transition-all flex items-center justify-center gap-3"
            >
              Ver planes y valores
              <span class="material-symbols-outlined">arrow_forward</span>
            </router-link>
            <p class="text-white/50 text-sm uppercase tracking-widest mt-2">¿No sabes cuál elegir?</p>
            <button
              @click="openWhatsApp('Hola Rama! Quiero ayuda para elegir un plan.')"
              class="h-12 px-8 border border-white/30 text-white font-bold uppercase tracking-widest text-xs rounded-lg hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2"
            >
              <IconoWhatsApp color class="size-5" />
              Habla con nosotros
            </button>
          </div>
        </div>
      </section>

      <!-- 8. HORARIOS -->
      <section class="py-24 lg:py-28 px-6">
        <div class="max-w-[1100px] mx-auto grid md:grid-cols-12 gap-10 items-center">
          <div class="md:col-span-7 flex flex-col gap-5">
            <span class="text-primary font-bold tracking-[0.4em] uppercase text-xs">Horarios</span>
            <h2 class="text-4xl md:text-5xl font-black uppercase tracking-tight leading-[0.95]">
              Entrena cuando mejor <span class="text-primary">te acomode</span>
            </h2>
            <p class="text-white/65 text-base md:text-lg font-light leading-relaxed">
              Contamos con clases durante la mañana, mediodía y tarde para que puedas integrar el entrenamiento a tu rutina.
            </p>
            <p class="text-white/65 text-base md:text-lg font-light leading-relaxed">
              Selecciona la disciplina y nivel que quieras entrenar y revisa los horarios disponibles.
            </p>
            <p class="text-white/45 text-sm flex items-center gap-2">
              <span class="material-symbols-outlined text-primary text-lg">event_available</span>
              Las clases se reservan previamente a través de nuestra plataforma.
            </p>
          </div>
          <div class="md:col-span-5 flex flex-col gap-4">
            <div v-for="b in bloques" :key="b.nombre" class="flex items-center justify-between gap-4 p-5 rounded-xl border border-white/10 bg-white/[0.02]">
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-primary">{{ b.icono }}</span>
                <span class="font-black uppercase tracking-tight">{{ b.nombre }}</span>
              </div>
              <span class="text-white/50 text-sm font-mono">{{ b.horas }}</span>
            </div>
            <router-link
              to="/horarios"
              class="h-14 mt-2 bg-primary text-black font-black uppercase tracking-widest text-sm rounded-lg hover:brightness-110 transition-all flex items-center justify-center gap-3"
            >
              Ver horarios
              <span class="material-symbols-outlined">calendar_month</span>
            </router-link>
          </div>
        </div>
      </section>

      <!-- 9. EQUIPO RAMA -->
      <section class="py-24 lg:py-32 bg-white/[0.015] border-y border-white/5">
        <div class="max-w-[1200px] mx-auto px-6">
          <div class="flex flex-col gap-4 mb-14 max-w-3xl">
            <span class="text-primary font-bold tracking-[0.4em] uppercase text-xs">Equipo Rama</span>
            <h2 class="text-4xl md:text-5xl font-black uppercase tracking-tight leading-[0.95]">
              Quienes te van a <span class="text-primary">acompañar</span>
            </h2>
            <p class="text-white/65 text-base md:text-lg font-light leading-relaxed">
              Nuestro equipo está compuesto por profesores y entrenadores especializados en las diferentes áreas de la escuela.
            </p>
            <p class="text-white/65 text-base md:text-lg font-light leading-relaxed">
              Más que dirigir una clase, nuestro trabajo es acompañar tu proceso, corregir tu técnica y ayudarte a progresar de manera segura y constante.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div v-for="profe in profesores" :key="profe.nombre" class="flex flex-col gap-5 group">
              <div class="relative w-full aspect-3/4 rounded-xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] border-b-4 border-primary">
                <img :src="profe.foto" :alt="profe.nombre" class="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" />
                <div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
                <div class="absolute bottom-4 left-4">
                  <span class="bg-primary text-black px-3 py-1 text-[10px] font-black uppercase rounded-sm tracking-widest shadow-lg">{{ profe.disciplina }}</span>
                </div>
              </div>
              <div class="px-1 flex flex-col gap-1">
                <p class="text-primary text-2xl font-black uppercase tracking-tight">{{ profe.nombre }}</p>
                <p class="text-white/60 text-xs font-bold uppercase tracking-widest">{{ profe.rol }}</p>
                <p v-if="profe.descripcion" class="text-white/55 text-sm leading-relaxed mt-2">{{ profe.descripcion }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 10. NOSOTROS -->
      <section class="py-24 lg:py-32 px-6">
        <div class="max-w-3xl mx-auto flex flex-col items-center text-center gap-6">
          <span class="text-primary font-bold tracking-[0.4em] uppercase text-xs">Nosotros</span>
          <h2 class="text-4xl md:text-6xl font-black uppercase tracking-tight leading-[0.95]">
            Desde <span class="text-primary">2015</span><br />construyendo Rama
          </h2>
          <p class="text-white/70 text-lg leading-relaxed font-light">
            Rama Muay Thai nace con una idea sencilla: crear una escuela donde las artes marciales fueran más que aprender a pelear.
          </p>
          <p class="text-white text-xl font-bold">Un lugar para entrenar, aprender, superarse y pertenecer.</p>
          <p class="text-white/60 text-base leading-relaxed font-light">
            Con los años hemos formado alumnos recreativos, competidores amateur y deportistas profesionales, construyendo una comunidad donde conviven personas con distintos objetivos bajo los mismos valores.
          </p>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3 w-full mt-4">
            <div v-for="v in valores" :key="v" class="py-5 rounded-xl border border-primary/30 bg-primary/5">
              <span class="text-primary font-black uppercase tracking-widest text-sm">{{ v }}</span>
            </div>
          </div>
          <p class="text-3xl md:text-4xl font-black uppercase tracking-tight mt-4">Eso es <span class="text-primary">Rama</span>.</p>
        </div>
      </section>

      <!-- 11. GALERÍA -->
      <section class="py-24 lg:py-32 bg-white/[0.015] border-y border-white/5">
        <div class="max-w-[1400px] mx-auto px-6">
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div class="flex flex-col gap-3">
              <span class="text-primary font-bold tracking-[0.4em] uppercase text-xs">Galería</span>
              <h2 class="text-4xl md:text-5xl font-black uppercase tracking-tight">Así se vive <span class="text-primary">Rama</span></h2>
              <p class="max-w-xl text-white/60 text-base font-light leading-relaxed">
                Entrenamientos, seminarios, competencias, eventos y momentos de nuestra comunidad.
              </p>
            </div>
            <p class="text-white/80 text-lg md:text-right leading-snug">
              Porque Rama no solamente se explica.<br /><span class="text-primary font-black uppercase">Se vive.</span>
            </p>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[220px] gap-3 md:gap-4">
            <div
              v-for="foto in galeria"
              :key="foto.src"
              class="relative rounded-xl overflow-hidden group"
              :class="foto.clase"
            >
              <img
                :src="foto.src"
                :alt="foto.alt"
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>
          </div>

          <div class="flex justify-center mt-12">
            <button
              @click="openBoxMagic"
              class="h-14 px-10 bg-primary text-black font-black uppercase tracking-widest text-sm rounded-lg hover:brightness-110 transition-all flex items-center justify-center gap-3"
            >
              Quiero ser parte
              <span class="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      <!-- 12. PRIMERA CLASE -->
      <section class="py-24 lg:py-32 px-6 max-w-[1300px] mx-auto w-full">
        <div class="flex flex-col items-center text-center gap-4 mb-14">
          <span class="text-primary font-bold tracking-[0.4em] uppercase text-xs">Primera clase</span>
          <h2 class="text-4xl md:text-6xl font-black uppercase tracking-tight leading-[0.95]">
            ¿Nunca has entrenado <span class="text-primary">Muay Thai</span>?
          </h2>
          <p class="max-w-2xl text-white/60 text-base md:text-lg font-light leading-relaxed">
            No necesitas experiencia previa ni estar en excelente condición física para comenzar.
          </p>
          <p class="text-white font-bold text-lg">Nosotros te enseñamos desde cero.</p>
        </div>

        <h3 class="text-center text-accent font-mono text-xs tracking-[0.4em] uppercase mb-8">Tu primera experiencia en Rama</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div
            v-for="(paso, i) in pasos"
            :key="paso.titulo"
            class="relative flex flex-col gap-3 p-7 rounded-2xl border border-white/10 bg-white/[0.02]"
          >
            <span class="text-gold-gradient text-5xl font-black leading-none">{{ i + 1 }}</span>
            <h4 class="text-white font-black uppercase tracking-tight text-lg">{{ paso.titulo }}</h4>
            <p class="text-white/55 text-sm leading-relaxed">{{ paso.texto }}</p>
          </div>
        </div>

        <div class="flex justify-center mt-14">
          <button
            @click="openBoxMagic"
            class="w-full sm:w-auto min-w-[300px] h-16 px-8 bg-primary hover:brightness-110 text-black rounded-lg font-black text-lg shadow-2xl shadow-primary/30 transition-all flex items-center justify-center gap-3 uppercase tracking-widest border-b-4 border-black/20"
          >
            Agenda tu clase de prueba
            <span class="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </section>

      <!-- 13. UBICACIÓN -->
      <section class="py-24 lg:py-32 bg-white/[0.015] border-y border-white/5">
        <div class="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          <div class="lg:col-span-5 flex flex-col justify-center gap-6">
            <span class="text-primary font-bold tracking-[0.4em] uppercase text-xs">Ubicación</span>
            <h2 class="text-4xl md:text-5xl font-black uppercase tracking-tight leading-[0.95]">
              Te esperamos en <span class="text-primary">Barrio Italia</span>
            </h2>
            <div class="flex gap-4 items-start">
              <div class="size-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                <span class="material-symbols-outlined text-primary">location_on</span>
              </div>
              <p class="text-white text-xl leading-snug">Tegualda 1895<br /><span class="text-white/60 text-base">Ñuñoa, Santiago</span></p>
            </div>
            <p class="text-white/60 text-base font-light leading-relaxed">
              Ven a conocer nuestra escuela, nuestro equipo y nuestra comunidad.
            </p>
            <div class="flex flex-col sm:flex-row gap-3">
              <a
                :href="MAPS_URL"
                target="_blank"
                rel="noopener"
                class="h-14 px-7 bg-primary text-black font-black uppercase tracking-widest text-xs rounded-lg hover:brightness-110 transition-all flex items-center justify-center gap-2"
              >
                <span class="material-symbols-outlined text-lg">directions</span>
                Cómo llegar
              </a>
              <button
                @click="openWhatsApp()"
                class="h-14 px-7 border border-white/30 text-white font-bold uppercase tracking-widest text-xs rounded-lg hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2"
              >
                <span class="material-symbols-outlined text-lg">chat</span>
                Contactar por WhatsApp
              </button>
            </div>
          </div>
          <div class="lg:col-span-7 h-[380px] lg:h-[450px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.9144699268622!2d-70.62505492346145!3d-33.45153479756916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c57d4fc3a813%3A0x6e5c7fe96c3a1c73!2zVGVndWFsZGEgMTg5NSwgw5F1w7FvYSwgUmVnacOzbiBNZXRyb3BvbGl0YW5h!5e0!3m2!1ses!2scl!4v1768700809075!5m2!1ses!2scl"
              width="100%"
              height="100%"
              style="border:0; filter: invert(90%) hue-rotate(180deg) brightness(85%) contrast(100%);"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Ubicación Rama Muay Thai"
            ></iframe>
          </div>
        </div>
      </section>

      <!-- 14. CIERRE / CTA -->
      <section class="relative py-28 lg:py-36 overflow-hidden">
        <div class="absolute inset-0 z-0">
          <img src="/inicio.jpg" alt="" class="w-full h-full object-cover opacity-15" loading="lazy" decoding="async"/>
          <div class="absolute inset-0 bg-gradient-to-b from-background-dark via-background-dark/85 to-background-dark"></div>
        </div>
        <div class="relative z-10 max-w-3xl mx-auto px-6 text-center flex flex-col items-center gap-6">
          <h2 class="text-4xl md:text-6xl font-black uppercase leading-[0.95] tracking-tight">
            Tu primer paso es<br /><span class="text-primary">venir a entrenar</span>
          </h2>
          <p class="text-white/65 text-base md:text-lg font-light leading-relaxed max-w-2xl">
            No importa si nunca has practicado un arte marcial.
          </p>
          <p class="text-white/65 text-base md:text-lg font-light leading-relaxed max-w-2xl">
            No importa si quieres mejorar tu condición física, aprender Muay Thai o algún día subirte a competir.
          </p>
          <p class="text-white text-lg md:text-xl font-bold">
            Todos comenzaron alguna vez desde cero.<br /><span class="text-primary">Ahora puede ser tu turno.</span>
          </p>
          <button
            @click="openBoxMagic"
            class="mt-4 w-full sm:w-auto min-w-[300px] h-16 px-8 bg-primary hover:brightness-110 text-black rounded-lg font-black text-lg shadow-2xl shadow-primary/30 transition-all flex items-center justify-center gap-3 uppercase tracking-widest border-b-4 border-black/20"
          >
            Agenda tu primera clase
            <span class="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '../layouts/Navbar.vue';
import Footer from '../layouts/Footer.vue';
import IconoWhatsApp from '../components/IconoWhatsApp.vue';
import { openBoxMagic, openWhatsApp, MAPS_URL } from '../utils/deepLinking';
import { profesores } from '../data/profesores';

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

const disciplinas = ['Muay Thai', 'Cross Training', 'Grappling / Jiu Jitsu', 'Entrenamientos personalizados'];

// Progresión Formativo -> Amateur -> Combat
const niveles = [
  {
    nombre: 'Formativo',
    lema: 'Tu punto de partida.',
    texto: 'Aprende postura, desplazamientos, golpes, defensas y combinaciones mientras desarrollas tu condición física.',
    para: 'Ideal si estás comenzando o quieres construir una buena base técnica.',
    imagen: '/foto_ejemplo.JPG',
    to: '/clases/muay-thai-formativo',
  },
  {
    nombre: 'Amateur',
    lema: 'Lleva tu técnica al siguiente nivel.',
    texto: 'Entrenamientos con mayor intensidad, combinaciones avanzadas, trabajo táctico y situaciones reales de combate.',
    para: 'Para alumnos con experiencia que buscan continuar progresando.',
    imagen: '/foto1.JPG',
    to: '/clases/muay-thai-amateur',
  },
  {
    nombre: 'Combat',
    lema: 'Entrena para competir.',
    texto: 'Preparación técnica, táctica y física orientada al rendimiento competitivo.',
    para: 'Un espacio destinado a nuestros deportistas y equipo de competencia.',
    imagen: '/2home.JPG',
    to: '/clases/muay-thai-combat',
  },
];

// Sin `to` => abre WhatsApp (no hay página propia)
const otros = [
  {
    nombre: 'Cross Training',
    texto: 'Desarrolla fuerza, resistencia, potencia y movilidad mediante entrenamientos físicos complementarios al Muay Thai.',
    imagen: '/1home.JPG',
    to: '/clases/cross-training',
  },
  {
    nombre: 'Grappling / Jiu Jitsu',
    texto: 'Aprende control, derribos, posiciones y técnicas de combate en suelo mediante un entrenamiento técnico y progresivo.',
    imagen: '/inicio.jpg',
    to: '/clases/brazilian-jiujitsu',
  },
  {
    nombre: 'Entrenamiento Personalizado',
    texto: 'Entrenamiento individual adaptado a tus objetivos. Mejora técnica, condición física, trabajo de pads o preparación específica con atención personalizada.',
    imagen: '/foto1.JPG',
    to: null,
  },
];

const planes = [
  { icono: 'groups', nombre: 'Planes de clases grupales', texto: 'Muay Thai y Cross Training.' },
  { icono: 'all_inclusive', nombre: 'Plan ilimitado', texto: 'Mayor libertad para combinar nuestras disciplinas y entrenamientos.' },
  { icono: 'sports_kabaddi', nombre: 'Grappling / Jiu Jitsu', texto: 'Plan específico para entrenamiento de combate en suelo.' },
  { icono: 'person', nombre: 'Entrenamientos personalizados', texto: 'Sesiones individuales adaptadas a tus objetivos.' },
];

const bloques = [
  { icono: 'wb_twilight', nombre: 'Mañana', horas: '7:00 - 11:00' },
  { icono: 'light_mode', nombre: 'Mediodía', horas: '11:00 - 13:00' },
  { icono: 'dark_mode', nombre: 'Tarde', horas: '17:30 - 22:00' },
];

const valores = ['Respeto', 'Disciplina', 'Compañerismo', 'Superación'];

// Galería: reemplazar/agregar fotos de seminarios, competencias y eventos cuando lleguen
const galeria = [
  { src: '/1home.JPG', alt: 'Entrenamiento', clase: 'col-span-2 row-span-2' },
  { src: '/foto1.JPG', alt: 'Clase de Muay Thai', clase: '' },
  { src: '/women/womenmt.jpeg', alt: 'Comunidad Rama', clase: 'row-span-2' },
  { src: '/foto_ejemplo.JPG', alt: 'Técnica', clase: '' },
  { src: '/2home.JPG', alt: 'Equipo Rama', clase: 'col-span-2' },
  { src: '/inicio.jpg', alt: 'Escuela Rama', clase: 'col-span-2' },
];

const pasos = [
  { titulo: 'Agenda tu clase', texto: 'Selecciona un horario disponible.' },
  { titulo: 'Ven a entrenar', texto: 'Llega unos minutos antes para que podamos recibirte y orientarte.' },
  { titulo: 'Conoce Rama', texto: 'Entrena junto a nuestro equipo y descubre cómo funciona la escuela.' },
  { titulo: 'Elige tu plan', texto: 'Si quieres continuar, te ayudamos a encontrar la alternativa que mejor se adapte a tus objetivos.' },
];
</script>

<style scoped>
.hero-overlay {
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.95));
}
/* Hero: espera 2.5s (solo video) y luego todo el contenido aparece junto en 2s */
.revelar {
  animation: revelar 2s ease-out 2.5s both;
}
@keyframes revelar {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@media (prefers-reduced-motion: reduce) {
  .revelar {
    animation: none;
  }
}
/* Video Team Rama: un poco más oscuro, bordes sin fundido */
.video-fundido {
  filter: brightness(0.7);
}
.text-gold-gradient {
  background: linear-gradient(to bottom right, #FFD700, #FBBF24, #DAA520);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>

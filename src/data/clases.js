// Contenido de cada página de clase. Todas usan la misma plantilla (src/components/ClasePagina.vue);
// aquí solo cambia el contenido. Cada texto es el propio de cada clase.
//
// Campos:
//   etiqueta      pill sobre el título
//   titulo        [línea blanca, línea amarilla]
//   lema, texto   descripción del encabezado (Formativo/Amateur/Combat = texto del dueño, también en el Inicio)
//   nota          línea chica opcional bajo la descripción
//   videos        uno o varios (si son varios, se alternan)
//   claseHorario  nombre de la clase en src/data/horarios.js (para la barra de horarios)
//   lista         bloque opcional { titulo, items: [{ titulo, desc? }] }
//   frase         cita opcional
//   secciones     bloques foto + texto (SeccionesReveal); `imagen` opcional

export const clases = {
  formativo: {
    etiqueta: 'Muay Thai · Nivel inicial',
    titulo: ['Muay Thai', 'Formativo.'],
    lema: 'Tu punto de partida.',
    texto: 'Aprende Muay Thai desde sus fundamentos, desarrolla tu técnica y mejora tu condición física. Ideal para comenzar desde cero.',
    videos: ['/formativo/formativo1.mp4'],
    claseHorario: 'Muay Thai Formativo',
    secciones: [
      {
        label: '01 / El arte de las 8 extremidades',
        titulo: 'Las Ocho Armas',
        texto: 'El Muay Thai se llama el arte de las ocho extremidades por una razón. Puños, codos, rodillas y patadas — cada parte del cuerpo es un arma, y cada una se aprende sola antes de combinarse. Aquí empiezas por el principio: cómo plantar los pies, cómo levantar la guardia, cómo soltar el primer recto sin perder el equilibrio.',
        imagenIzquierda: true,
      },
      {
        label: '02 / Disciplina diaria',
        titulo: 'Constancia, no Fuerza',
        texto: 'Nadie llega rápido. Y nadie llega solo a fuerza. El Formativo se construye con repetición — los mismos golpes, las mismas correcciones, hasta que tu cuerpo deja de pensar y empieza a responder. Aquí no entrenamos para verse — entrenamos para que el día que el cuerpo tenga que reaccionar, sepa.',
        imagenIzquierda: false,
      },
    ],
  },

  amateur: {
    etiqueta: 'Muay Thai · Nivel intermedio',
    titulo: ['Muay Thai', 'Amateur.'],
    lema: 'Lleva tu técnica al siguiente nivel.',
    texto: 'Perfecciona tus habilidades mediante entrenamientos de mayor intensidad, trabajo táctico y preparación deportiva.',
    videos: ['/amateur/amateur1.mp4', '/amateur/amateur2.mp4'],
    claseHorario: 'Muay Thai Amateur',
    lista: {
      titulo: 'Qué dominarás',
      items: [
        { titulo: 'Combinaciones Encadenadas', desc: 'De golpes sueltos a series fluidas de 3-4 técnicas.' },
        { titulo: 'Clinch y Rodillazos', desc: 'Control del agarre, pasaje de cuello y trabajo de rodilla.' },
        { titulo: 'Timing y Lectura', desc: 'Contras, fintas y distancia ante un compañero que responde.' },
        { titulo: 'Sparring Ligero', desc: 'Primer contacto controlado, sin presión.' },
      ],
    },
    secciones: [
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
        texto: 'Antes del Combat, hay que tocar y dejarse tocar. El sparring aquí es controlado: sin pegar a matar, pero con la presión real de un compañero que responde. Es donde aprendes a respirar bajo presión, leer fintas y descubrir qué de tu técnica funciona cuando hay alguien al otro lado.',
        imagenIzquierda: true,
      },
    ],
  },

  combat: {
    etiqueta: 'Muay Thai · Nivel avanzado',
    titulo: ['Muay Thai', 'Combat.'],
    lema: 'Entrena para combatir.',
    texto: 'Preparación técnica, física y táctica para deportistas avanzados y competidores de Rama.',
    videos: ['/sparring/sparring2.mp4', '/sparring/Sparring%20Profe%20Ramiro%20vs%20Omar.mp4'],
    claseHorario: 'Muay Thai Combat',
    frase: 'El miedo no se vence afuera del ring. Se vence dentro.',
    secciones: [
      {
        label: '01 / El Ring',
        titulo: 'Entrar al Cuadrado',
        texto: 'El ring no perdona. No hay esquinas para esconderse, no hay tiempo para pensar dos veces. Aquí no se entrena para verse — se entrena para resistir. Cada round es una pregunta directa: ¿qué tan parado puedes quedarte cuando el otro también vino a quedarse parado?',
        imagenIzquierda: true,
      },
      {
        label: '02 / Lectura',
        titulo: 'Ver Antes de Pegar',
        texto: 'Ningún golpe llega por casualidad. Hay una respiración antes, un peso que se carga, un hombro que avisa. Aquí entrenas a leer eso — fintas, ritmos, telegrafías. La diferencia entre comer la patada y verla venir está en milésimas de segundo, y se entrena.',
        imagenIzquierda: false,
      },
      {
        label: '03 / Mental',
        titulo: 'Gestión del Miedo',
        texto: 'El miedo no se vence afuera, se vence dentro. Aquí no negamos que da nervios — lo usamos. Aprendes a respirar cuando el corazón se acelera, a soltar cuando el cuerpo se tranca, a volver al plan cuando todo se sale del libreto. Eso es Combat: cabeza fría, cuerpo despierto.',
        imagenIzquierda: true,
      },
    ],
  },

  women: {
    etiqueta: 'Muay Thai · Solo para mujeres',
    titulo: ['Muay Thai', 'Women.'],
    lema: 'Entrenamiento exclusivo para mujeres.',
    texto: 'Un día a la semana, el tatami es tuyo. Una clase pensada para mujeres que quieren empezar en un espacio seguro — o entrenar fuerte rodeadas de las suyas. Misma técnica, mismo respeto, tu propio ritmo.',
    videos: ['/women/muay%20women1.mp4'],
    claseHorario: 'Woman Muay Thai',
    lista: {
      titulo: 'Lo que vas a encontrar',
      items: [
        { titulo: 'Comunidad', desc: 'Entrenas en grupo, avanzas en grupo. Aquí nadie empieza sola.' },
        { titulo: 'Técnica Real', desc: 'Mismo Muay Thai, misma exigencia. Defensa personal que de verdad funciona.' },
      ],
    },
    secciones: [
      {
        label: '',
        titulo: 'Tu Espacio',
        texto: 'Una clase exclusiva para mujeres que combina técnica, acondicionamiento físico y confianza. Un espacio seguro pensado para que puedas enfocarte en tu progreso, desafiarte en cada entrenamiento y disfrutar del Muay Thai junto a otras mujeres que buscan crecer, aprender y superarse día a día.',
        imagen: '/women/womenmt.jpeg',
        imagenIzquierda: true,
      },
    ],
  },

  cross: {
    etiqueta: 'Preparación física complementaria',
    titulo: ['Cross', 'Training.'],
    lema: 'Más fuerza. Más resistencia. Mejor rendimiento.',
    texto: 'Desarrolla fuerza, resistencia, potencia y movilidad mediante entrenamientos que complementan tu preparación física.',
    nota: 'Apto sin experiencia previa · Mixto con alumnos de Muay Thai',
    videos: ['/cross/cross2.mp4'],
    claseHorario: 'Cross Training',
    lista: {
      titulo: 'Metodología / 4 bloques',
      items: [
        { titulo: 'Activación dinámica' },
        { titulo: 'Fuerza compleja (kettlebell + peso corporal)' },
        { titulo: 'Capacidad metabólica (saco + cuerda)' },
        { titulo: 'Recovery + movilidad' },
      ],
    },
    secciones: [
      {
        label: '01 / Activación',
        titulo: 'Despertar el Cuerpo',
        texto: 'No se entra frío. Movilidad articular, activación de core y cadera, patrones básicos a velocidad controlada. Cinco a diez minutos donde el cuerpo deja la silla atrás y se prepara para responder. Sin este paso, todo lo que viene después pega doble.',
        imagenIzquierda: true,
      },
      {
        label: '02 / Fuerza explosiva',
        titulo: 'Kettlebell y Peso Corporal',
        texto: 'Empujones, tirones, sentadillas, swings. Movimientos compuestos que reclutan todo el cuerpo a la vez — porque ningún golpe nace solo del brazo. Aquí construyes la fuerza que sostiene la técnica: piernas para cargar peso, core para transmitirlo, hombros para soltarlo.',
        imagenIzquierda: false,
      },
      {
        label: '03 / Capacidad metabólica',
        titulo: 'El Motor del Round',
        texto: 'Saco, cuerda, intervalos cortos al máximo. Aquí entrenas la capacidad de seguir trabajando cuando los pulmones piden parar. Un round son tres minutos eternos — y este bloque te enseña a que el minuto tres se sienta igual de fuerte que el primero.',
        imagenIzquierda: true,
      },
    ],
  },
};

// Tarjetas de programas del Inicio: mismo lema y texto que el encabezado de cada clase
export const programas = {
  formativo: { lema: clases.formativo.lema, texto: clases.formativo.texto },
  amateur: { lema: clases.amateur.lema, texto: clases.amateur.texto },
  combat: { lema: clases.combat.lema, texto: clases.combat.texto },
};

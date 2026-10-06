// Título y descripción de cada página para Google (y vista previa al compartir).
// Lo usan: src/router.js (actualiza <title>/<meta> al navegar) y vite.config.js (genera sitemap.xml).
// Mantener las palabras clave locales: "Muay Thai", "Ñuñoa", "Santiago", "Barrio Italia".

export const paginas = [
  {
    path: '/',
    title: 'Rama Muay Thai | Escuela de Muay Thai en Ñuñoa, Santiago',
    description:
      'Escuela de Muay Thai en Barrio Italia, Ñuñoa (Santiago, Chile). Clases para todos los niveles desde 2015: Formativo, Amateur, Combat, Cross Training y Grappling. Agenda tu clase de prueba.',
    prioridad: '1.0',
  },
  {
    path: '/horarios',
    title: 'Horarios de clases de Muay Thai | Rama Muay Thai Ñuñoa',
    description:
      'Horarios 2026 de Rama Muay Thai en Ñuñoa: clases de Muay Thai, Cross Training y Grappling de lunes a sábado, mañana, mediodía y tarde.',
    prioridad: '0.9',
  },
  {
    path: '/planes',
    title: 'Planes y valores | Rama Muay Thai Ñuñoa, Santiago',
    description:
      'Planes de Rama Muay Thai: clases grupales de Muay Thai y Cross Training, plan ilimitado, Grappling / Jiu Jitsu y entrenamientos personalizados en Ñuñoa.',
    prioridad: '0.9',
  },
  {
    path: '/clases/muay-thai-formativo',
    title: 'Muay Thai para principiantes (Formativo) | Rama Muay Thai Santiago',
    description:
      'Clases de Muay Thai para principiantes en Ñuñoa, Santiago. Aprende postura, golpes, defensas y combinaciones desde cero. No necesitas experiencia previa.',
    prioridad: '0.8',
  },
  {
    path: '/clases/muay-thai-amateur',
    title: 'Muay Thai Amateur | Rama Muay Thai Santiago',
    description:
      'Muay Thai Amateur en Ñuñoa: entrenamientos de mayor intensidad, combinaciones avanzadas, trabajo táctico y situaciones reales de combate.',
    prioridad: '0.8',
  },
  {
    path: '/clases/muay-thai-combat',
    title: 'Muay Thai Combat: equipo de competencia | Rama Muay Thai',
    description:
      'Muay Thai Combat en Santiago: preparación técnica, táctica y física orientada a la competencia. El equipo de competidores de Rama Muay Thai.',
    prioridad: '0.8',
  },
  {
    path: '/clases/muay-thai-women',
    title: 'Muay Thai para mujeres | Rama Muay Thai Ñuñoa',
    description:
      'Clases de Muay Thai exclusivas para mujeres en Ñuñoa, Santiago. Entrena técnica y condición física en un espacio seguro y de compañerismo.',
    prioridad: '0.8',
  },
  {
    path: '/clases/brazilian-jiujitsu',
    title: 'Grappling y Jiu Jitsu en Ñuñoa | Rama Muay Thai',
    description:
      'Clases de Grappling / Jiu Jitsu en Ñuñoa, Santiago: control, derribos, posiciones y combate en suelo con un entrenamiento técnico y progresivo.',
    prioridad: '0.7',
  },
  {
    path: '/clases/cross-training',
    title: 'Cross Training en Ñuñoa | Rama Muay Thai',
    description:
      'Cross Training en Ñuñoa: fuerza, resistencia, potencia y movilidad como preparación física complementaria al Muay Thai.',
    prioridad: '0.7',
  },
  {
    path: '/clases/pad-holder',
    title: 'Pad Holder | Rama Muay Thai',
    description: 'Pad Holder en Rama Muay Thai, escuela de Muay Thai en Ñuñoa, Santiago.',
    prioridad: null, // clase en desarrollo: fuera del sitemap por ahora
  },
];

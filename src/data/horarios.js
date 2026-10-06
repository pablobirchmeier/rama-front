// Horarios oficiales 2026 (fuente: flyers @ramamuaythai, ver CLAUDE.md).
// Única fuente de verdad: la usan la vista por día (HorarioPorDia.vue, en Home y Horarios)
// y las tablas de semana completa de Horarios.vue.

export const diasAM = ['LUNES', 'MARTES', 'MIÉRCOLES', 'JUEVES', 'VIERNES', 'SÁBADO'];
export const diasPM = ['LUNES', 'MARTES', 'MIÉRCOLES', 'JUEVES', 'VIERNES'];

// Una celda puede ser: null (vacía), string (una clase) o array (dos clases en el mismo bloque)
export const horarioAM = [
  { hora: '7:00 - 8:00', clases: ['Muay Thai Formativo', 'Muay Thai Formativo', 'Muay Thai Formativo', 'Muay Thai Formativo', 'Muay Thai Formativo', null] },
  { hora: '8:00 - 9:00', clases: ['Cross Training', 'Cross Training', 'Cross Training', 'Cross Training', 'Cross Training', null] },
  { hora: '10:00 - 11:00', clases: ['Cross Training', 'Cross Training', 'Cross Training', 'Cross Training', 'Cross Training', 'Muay Thai Formativo'] },
  { hora: '11:00 - 12:00', clases: ['Muay Thai Combat', 'Muay Thai Amateur', 'Muay Thai Combat', 'Muay Thai Amateur', 'Muay Thai Combat', ['Woman Muay Thai', 'Cross Training']] },
  { hora: '12:00 - 13:00', clases: ['Muay Thai Combat', 'Muay Thai Amateur', 'Muay Thai Combat', 'Muay Thai Amateur', 'Muay Thai Combat', 'Muay Thai Amateur'] },
];

export const horarioPM = [
  { hora: '17:30 - 18:30', clases: ['Muay Thai Formativo', 'Muay Thai Amateur', 'Muay Thai Formativo', 'Muay Thai Amateur', 'Muay Thai Formativo'] },
  { hora: '18:30 - 19:30', clases: [['Muay Thai Amateur', 'Cross Training'], 'Muay Thai Formativo', ['Muay Thai Amateur', 'Cross Training'], 'Muay Thai Formativo', ['Muay Thai Amateur', 'Cross Training']] },
  { hora: '19:30 - 20:30', clases: ['Muay Thai Formativo', ['Muay Thai Amateur', 'Cross Training'], 'Muay Thai Formativo', ['Muay Thai Amateur', 'Cross Training'], 'Muay Thai Combat'] },
  { hora: '20:30 - 22:00', clases: ['Muay Thai Combat', 'Grappling', 'Muay Thai Combat', 'Grappling', 'Grappling'] },
];

// Página de cada clase (los chips del horario llevan aquí)
export const rutasClases = {
  'Muay Thai Formativo': '/clases/muay-thai-formativo',
  'Muay Thai Amateur': '/clases/muay-thai-amateur',
  'Muay Thai Combat': '/clases/muay-thai-combat',
  'Woman Muay Thai': '/clases/muay-thai-women',
  'Cross Training': '/clases/cross-training',
  'Grappling': '/clases/brazilian-jiujitsu',
};

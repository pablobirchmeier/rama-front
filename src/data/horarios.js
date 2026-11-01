// Horarios oficiales 2026 (fuente: flyers @ramamuaythai, ver CLAUDE.md).
// Única fuente de verdad: la usan la vista por día (HorarioPorDia.vue, en Horarios),
// las tablas de semana completa de Horarios.vue y la barra de horarios de cada clase.

export const diasAM = ['LUNES', 'MARTES', 'MIÉRCOLES', 'JUEVES', 'VIERNES', 'SÁBADO'];
export const diasPM = ['LUNES', 'MARTES', 'MIÉRCOLES', 'JUEVES', 'VIERNES'];
export const diasLargos = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
export const diasCortos = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

// Una celda puede ser: null (vacía), string (una clase) o array (dos clases en el mismo bloque).
// Filas seguidas (fin de una = inicio de la otra) con la misma clase se muestran como UN bloque
// (ej. Combat 11:00 - 13:00 de lunes a viernes).
export const horarioAM = [
  { hora: '7:00 - 8:00', clases: ['Muay Thai Formativo', 'Muay Thai Formativo', 'Muay Thai Formativo', 'Muay Thai Formativo', 'Muay Thai Formativo', null] },
  { hora: '8:00 - 9:00', clases: ['Cross Training', 'Cross Training', 'Cross Training', 'Cross Training', null, null] },
  { hora: '10:00 - 11:00', clases: ['Cross Training', 'Cross Training', 'Cross Training', 'Cross Training', null, 'Muay Thai Formativo'] },
  { hora: '11:00 - 12:00', clases: ['Muay Thai Combat', 'Muay Thai Amateur', 'Muay Thai Combat', 'Muay Thai Amateur', 'Muay Thai Combat', ['Woman Muay Thai', 'Cross Training']] },
  { hora: '12:00 - 13:00', clases: ['Muay Thai Combat', 'Muay Thai Amateur', 'Muay Thai Combat', 'Muay Thai Amateur', 'Muay Thai Combat', 'Muay Thai Amateur'] },
];

export const horarioPM = [
  { hora: '17:30 - 18:30', clases: ['Muay Thai Formativo', 'Muay Thai Formativo', 'Muay Thai Formativo', 'Muay Thai Formativo', 'Muay Thai Formativo'] },
  { hora: '18:30 - 19:30', clases: [['Muay Thai Amateur', 'Cross Training'], ['Muay Thai Amateur', 'Cross Training'], ['Muay Thai Amateur', 'Cross Training'], ['Muay Thai Amateur', 'Cross Training'], 'Muay Thai Amateur'] },
  { hora: '19:30 - 20:30', clases: [['Muay Thai Formativo', 'Cross Training'], ['Muay Thai Formativo', 'Cross Training'], ['Muay Thai Formativo', 'Cross Training'], ['Muay Thai Formativo', 'Cross Training'], 'Muay Thai Combat'] },
  { hora: '20:30 - 22:00', clases: ['Muay Thai Combat', 'Muay Thai Amateur', 'Muay Thai Combat', 'Muay Thai Amateur', null] },
];

// Página de cada clase (los chips del horario llevan aquí)
export const rutasClases = {
  'Muay Thai Formativo': '/clases/muay-thai-formativo',
  'Muay Thai Amateur': '/clases/muay-thai-amateur',
  'Muay Thai Combat': '/clases/muay-thai-combat',
  'Woman Muay Thai': '/clases/muay-thai-women',
  'Cross Training': '/clases/cross-training',
};

// ---- Helpers ----

const clasesDe = (celda) => (Array.isArray(celda) ? celda : celda ? [celda] : []);
const mismoBloque = (a, b) => a.fin === b.inicio && a.clases.join('|') === b.clases.join('|');

/**
 * Bloques de un día (índice 0 = lunes) en una tabla, ya unidos: horas seguidas con la misma
 * clase quedan como un solo bloque. `soloClase` filtra a una clase (ej. 'Muay Thai Amateur').
 * Devuelve [{ inicio: '11:00', fin: '13:00', clases: ['Muay Thai Combat'] }, …]
 */
export function bloquesDelDia(tabla, dia, soloClase = null) {
  // Se unen las filas comparando la celda COMPLETA (sin filtrar): así "Amateur + Cross" a las 18:30
  // y "Formativo + Cross" a las 19:30 siguen siendo dos clases de Cross distintas.
  const bloques = [];
  tabla.forEach((fila) => {
    const clases = clasesDe(fila.clases[dia]);
    if (!clases.length) return;
    const [inicio, fin] = fila.hora.split(' - ');
    const actual = { inicio, fin, clases };
    const anterior = bloques[bloques.length - 1];
    if (anterior && mismoBloque(anterior, actual)) anterior.fin = fin;
    else bloques.push(actual);
  });
  if (!soloClase) return bloques;
  return bloques
    .filter((b) => b.clases.includes(soloClase))
    .map((b) => ({ ...b, clases: [soloClase] }));
}

/**
 * Tabla de semana completa con celdas unidas hacia abajo (rowspan) cuando una clase sigue en la
 * fila siguiente. Cada celda: { clases, rowspan } o { oculta: true } si la cubre la de arriba.
 */
export function tablaConBloques(tabla) {
  const filas = tabla.map((fila) => {
    const [inicio, fin] = fila.hora.split(' - ');
    return { hora: fila.hora, inicio, fin, celdas: fila.clases.map((c) => ({ clases: clasesDe(c), rowspan: 1 })) };
  });
  for (let f = filas.length - 1; f > 0; f--) {
    const arriba = filas[f - 1];
    const abajo = filas[f];
    if (arriba.fin !== abajo.inicio) continue;
    abajo.celdas.forEach((celda, d) => {
      const celdaArriba = arriba.celdas[d];
      if (celda.oculta || !celda.clases.length) return;
      if (celda.clases.join('|') !== celdaArriba.clases.join('|')) return;
      celdaArriba.rowspan += celda.rowspan;
      celda.oculta = true;
    });
  }
  return filas;
}

/**
 * Resumen de horarios de una clase, agrupando días con las mismas horas de inicio.
 * Ej.: [{ dias: 'Lun · Mié · Vie', horas: '18:30' }, { dias: 'Mar · Jue', horas: '11:00 · 18:30 · 20:30' }]
 */
export function resumenHorariosClase(clase) {
  const grupos = new Map();
  diasCortos.forEach((dia, i) => {
    const horas = [...bloquesDelDia(horarioAM, i, clase), ...bloquesDelDia(horarioPM, i, clase)]
      .map((b) => b.inicio)
      .join(' · ');
    if (!horas) return;
    if (!grupos.has(horas)) grupos.set(horas, []);
    grupos.get(horas).push(dia);
  });
  return [...grupos].map(([horas, dias]) => ({ dias: dias.join(' · '), horas }));
}

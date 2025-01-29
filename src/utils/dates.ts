export const daysOrderBase = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

export function getCurrentDayOrder() {
  const today = new Date().toLocaleDateString('es-MX', { weekday: 'long' });
  const capitalizedToday = today.charAt(0).toUpperCase() + today.slice(1);
  const todayIndex = daysOrderBase.indexOf(capitalizedToday);
  return [...daysOrderBase.slice(todayIndex), ...daysOrderBase.slice(0, todayIndex)];
}
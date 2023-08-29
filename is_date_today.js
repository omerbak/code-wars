function isToday(date) {
  const today = new Date();
  const isSameYear = date.getFullYear() === today.getFullYear();
  const isSameMonth = date.getMonth() === today.getMonth();
  const isSameDay = date.getDate() === today.getDate();
  return isSameYear && isSameMonth && isSameDay;
}

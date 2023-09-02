function humanReadable(seconds) {
  const hours = Math.floor(seconds / (60 * 60));
  const minutes = Math.floor((seconds % (60 * 60)) / 60);
  const secs = Math.floor((seconds % (60 * 60)) % 60);
  return `${String(hours).padStart(2, 0)}:${String(minutes).padStart(
    2,
    0
  )}:${String(secs).padStart(2, 0)}`;
}

function reverseLetter(str) {
  return str
    .replace(/[^A-Za-z]/g, "")
    .split("")
    .reverse()
    .join("");
}

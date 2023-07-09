function findMissingLetter(array) {
  let charStart = array[0].charCodeAt(0);
  for (let i = 1; i <= array.length; i++) {
    if (array[i].charCodeAt(0) !== charStart + i) {
      return String.fromCharCode(charStart + i);
    }
  }
  return null;
}

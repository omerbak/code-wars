function toCamelCase(str) {
  if (str.length <= 0) return "";
  let arr = str.split(/[_-]/);
  return arr
    .map((word, i) => {
      if (i !== 0) {
        return word[0].toUpperCase() + word.slice(1);
      } else {
        return word;
      }
    })
    .join("");
}

function reverse(str) {
  if (str.trim().length <= 0) return "";
  let arr = str.split(" ");
  return arr
    .map((word, ind) => {
      if (ind % 2 !== 0) {
        let reverse = word.split("").reverse().join("");
        return reverse;
      } else {
        return word;
      }
    })
    .join(" ");
}

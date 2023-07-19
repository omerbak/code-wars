function toWeirdCase(string) {
  let arr = string.split(" ");
  arr = arr.map((word) => toWeirdCaseWord(word));
  return arr.join(" ");
}

function toWeirdCaseWord(string) {
  let arr = string.split("");
  arr = arr.map((char, ind) =>
    ind % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
  );
  return arr.join("");
}

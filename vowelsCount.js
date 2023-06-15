function getCount(str) {
  let vowels = ["a", "e", "u", "o", "u", "i"];
  return str.split("").filter((letter) => vowels.includes(letter)).length;
}

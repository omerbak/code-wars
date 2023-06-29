function spinWords(string) {
  let strArr = string.split(" ");
  return strArr
    .map((word) =>
      word.length >= 5 ? word.split("").reverse().join("") : word
    )
    .join(" ");
}

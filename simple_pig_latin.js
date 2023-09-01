function pigIt(str) {
  return str
    .split(" ")
    .map((word) =>
      /^[^0-9a-zA-Z]$/.test(word)
        ? word
        : word.slice(1) + word.slice(0, 1) + "ay"
    )
    .join(" ");
}

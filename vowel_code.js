const vowelsVal = { a: "1", e: "2", i: "3", o: "4", u: "5" };

function encode(string) {
  return string
    .split("")
    .map((letter) =>
      Object.keys(vowelsVal).includes(letter.toLowerCase())
        ? vowelsVal[letter]
        : letter
    )
    .join("");
}

function decode(string) {
  let values = Object.values(vowelsVal);
  let keys = Object.keys(vowelsVal);
  let arr = string
    .split("")
    .map((letter) =>
      values.indexOf(letter) != -1 ? keys[values.indexOf(letter)] : letter
    );
  return arr.join("");
}

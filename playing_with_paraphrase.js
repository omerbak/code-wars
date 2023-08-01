function playPass(s, n) {
  let numRegex = /\d/;
  let charRegex = /[a-z]/;
  let isIndexEven;
  let result = s.split("").map((char, ind) => {
    isIndexEven = ind % 2 === 0;
    if (numRegex.test(char)) {
      return 9 - Number(char);
    } else if (charRegex.test(char.toLowerCase())) {
      let asciiNum = char.toLowerCase().charCodeAt(0);
      asciiNum += n;
      console.log("ascii", asciiNum);
      if (asciiNum > 122) {
        asciiNum = asciiNum - 122 + 96;
      }
      return isIndexEven
        ? String.fromCharCode(asciiNum).toUpperCase()
        : String.fromCharCode(asciiNum).toLowerCase();
    } else {
      return char;
    }
  });
  return result.reverse().join("");
}

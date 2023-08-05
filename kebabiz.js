function kebabize(str) {
  console.log(str);
  let result = [];
  str.split("").forEach((letter) => {
    if (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90) {
      if (result.length == 0) {
        result.push(letter.toLowerCase());
      } else {
        result.push("-", letter.toLowerCase());
      }
    } else if (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122) {
      result.push(letter.toLowerCase());
    }
  });
  return result.join("");
}

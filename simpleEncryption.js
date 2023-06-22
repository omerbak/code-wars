function encrypt(text, n) {
  if (!text || n <= 0) return text;
  let odds, evens;
  for (let i = 1; i <= n; i++) {
    odds = text
      .split("")
      .filter((num, ind) => ind % 2 !== 0)
      .join("");
    evens = text
      .split("")
      .filter((num, ind) => ind % 2 === 0)
      .join("");
    text = odds + evens;
  }
  return text;
}

function decrypt(encryptedText, n) {
  if (encryptedText === "" || n <= 0) return encryptedText;
  let odds,
    evens,
    arr = [];
  for (let i = 1; i <= n; i++) {
    odds = encryptedText
      .split("")
      .slice(0, Math.floor(encryptedText.length / 2));
    evens = encryptedText.split("").slice(Math.floor(encryptedText.length / 2));

    for (let j = 0; j < encryptedText.length; j++) {
      if (j % 2 === 0) {
        arr.push(evens.shift());
      } else {
        arr.push(odds.shift());
      }
    }
    encryptedText = arr.join("");
    arr = [];
  }
  return encryptedText;
}

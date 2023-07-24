function cleanString(s) {
  let arrStr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "#") {
      arrStr.push(s[i]);
    } else {
      if (arrStr.length > 0) {
        arrStr.pop();
      }
    }
  }
  return arrStr.join("");
}

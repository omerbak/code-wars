function isValidIP(str) {
  if (str.length <= 0) return false;
  let arr = str.split(".");
  if (arr.length !== 4) return false;
  return arr.every(
    (num) => +num >= 0 && +num <= 255 && String(+num).length === num.length
  );
}

function firstNonRepeatingLetter(s) {
  let sLower = s.toLowerCase();
  let firstIndx, lastIndx;
  for (let i = 0; i < sLower.length; i++) {
    firstIndx = sLower.indexOf(sLower[i]);
    lastIndx = sLower.lastIndexOf(sLower[i]);
    if (firstIndx === lastIndx) {
      return s[firstIndx];
    }
  }
  return "";
}

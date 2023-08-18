function sumConsecutives(s) {
  let result = [];
  let currentSum = s[0];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      currentSum += s[i];
    } else {
      result.push(currentSum);
      currentSum = s[i + 1];
    }
  }
  return result;
}

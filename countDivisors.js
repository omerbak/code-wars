function getDivisorsCnt(n) {
  if (n <= 0) return 0;
  let divsorsNum = 0;
  if (n % Math.sqrt(n) === 0) divsorsNum++;
  for (let i = 1; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      divsorsNum += 2;
    }
  }
  return divsorsNum;
}

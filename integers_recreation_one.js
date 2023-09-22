function listSquared(m, n) {
  let result = [];

  for (let i = m; i <= n; i++) {
    let divisors = [];
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        divisors.push(j);
      }
    }

    let divisorsSquaredSum = divisors.reduce((acc, curr) => acc + curr ** 2, 0);
    if (Math.sqrt(divisorsSquaredSum) % 1 === 0) {
      result.push([divisors[divisors.length - 1], divisorsSquaredSum]);
    }
  }
  return result;
}

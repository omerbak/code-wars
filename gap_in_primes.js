function gap(g, m, n) {
  function isPrime(num) {
    let max = Math.sqrt(num);
    for (let i = 2; i <= max; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  let currentPrimes = [];
  let currentLength, last, beforeLast;
  for (let i = m; i <= n; i++) {
    console.log("else");
    if (isPrime(i)) {
      cache[i] = true;
      currentPrimes.push(i);
      currentLength = currentPrimes.length;
      if (currentLength > 1) {
        last = currentPrimes[currentLength - 1];
        beforeLast = currentPrimes[currentLength - 2];
        if (last - beforeLast == g) {
          return [beforeLast, last];
        }
      }
    }
  }
  return null;
}

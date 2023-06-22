function primeFactors(n) {
  if (n <= 2) return [];
  let max = Math.floor(Math.sqrt(n));
  let facts = [];
  for (let i = 2; i <= max; i++) {
    if (n % i === 0) {
      facts.push(i);
      n = n / i;
      i = (Math.min(...facts) || 2) - 1;
    }
  }
  if (n > 2) facts.push(n);
  return facts;
}

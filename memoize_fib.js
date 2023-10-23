const fibonacci = (function () {
  let cache = { 0: 0, 1: 1 };
  return (n) => {
    if (n in cache) {
      return cache[n];
    }
    cache[n] = fibonacci(n - 1) + fibonacci(n - 2);
    return cache[n];
  };
})();

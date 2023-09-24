function removeNb(n) {
  let totalSum = (n * (n + 1)) / 2;
  let result = [];

  for (let i = 1; i < n; i++) {
    let b = (totalSum - i) / (i + 1);

    if (b === Math.floor(b) && b < n) {
      result.push([i, b]);
    }
  }
  return result;
}

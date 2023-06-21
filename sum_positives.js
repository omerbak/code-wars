const positiveSum = (arr) =>
  arr.reduce((acc, curr) => (curr >= 1 ? acc + curr : acc), 0);

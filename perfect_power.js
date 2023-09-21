const isPP = (n) => {
  const max = Math.floor(n / 2);

  for (let i = 2; i <= max; i++) {
    for (let j = 2; i ** j <= n; j++) {
      if (i ** j == n) {
        return [i, j];
      }
    }
  }

  return null;
};

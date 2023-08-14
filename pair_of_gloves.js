function numberOfPairs(gloves) {
  let drawer = gloves.reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 1;
    } else {
      acc[curr]++;
    }
    return acc;
  }, {});
  return Object.values(drawer).reduce(
    (acc, curr) => acc + Math.floor(curr / 2),
    0
  );
}

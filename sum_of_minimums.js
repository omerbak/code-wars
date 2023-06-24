const sumOfMinimums = (arr) =>
  arr.reduce((acc, curr) => acc + Math.min(...curr), 0);

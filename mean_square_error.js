var solution = function (firstArray, secondArray) {
  let squareValues = firstArray.map((num, i) => {
    return Math.abs((num - secondArray[i]) ** 2);
  });
  return (
    squareValues.reduce((acc, curr) => acc + curr, 0) / squareValues.length
  );
};

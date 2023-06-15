var maxSequence = function (arr) {
  arAllNegatives = arr.every((num) => num < 0);
  if (arAllNegatives || arr.length === 0) return 0;

  let maxSum = 0;
  let sum = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    for (let j = i; j <= arr.length - 1; j++) {
      sum = arr.slice(i, j + 1).reduce((curr, acc) => acc + curr, 0);
      if (sum > maxSum) {
        maxSum = sum;
      }
    }
  }
  return maxSum;
};
let arr = [5, 6, -5, 15, -12, 20, -15, 3, -7];
console.log(maxSequence(arr));

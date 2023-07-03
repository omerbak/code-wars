function sumTwoSmallestNumbers(numbers) {
  let sortedArr = numbers.sort((a, b) => a - b);
  return sortedArr[0] + sortedArr[1];
}

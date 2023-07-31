function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    let otherNumIndex = numbers.indexOf(target - numbers[i], i + 1);
    if (otherNumIndex !== -1) {
      return [i, otherNumIndex];
    }
  }
  return [];
}

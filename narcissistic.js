function narcissistic(value) {
  let numArr = String(value).split("").map(Number);
  let power = numArr.length;
  let sum = numArr.reduce((acc, curr) => acc + curr ** power, 0);
  return sum === value;
}

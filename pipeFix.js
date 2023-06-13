function pipeFix(numbers) {
  let min = Math.min(...numbers);
  let max = Math.max(...numbers);
  console.log(min);
  console.log(max);
  let result = [];
  for (let i = min; i <= max; i++) {
    result.push(i);
  }
  return result;
}

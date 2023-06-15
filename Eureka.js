function sumDigPow(a, b) {
  let result = [];
  for (let i = a; i <= b; i++) {
    if (isEureka(i)) {
      result.push(i);
    }
  }
  return result;
}

function isEureka(num) {
  let numArr = String(num)
    .split("")
    .map((num) => Number(num));
  let eurekaValue = numArr.reduce((acc, curr, i) => {
    return acc + Math.pow(curr, i + 1);
  }, 0);

  return num === eurekaValue;
}

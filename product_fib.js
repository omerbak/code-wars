function productFib(prod) {
  let fib = generateFib(prod);
  let currentProd;
  for (let i = 0; i < fib.length - 1; i++) {
    currentProd = fib[i] * fib[i + 1];
    if (currentProd == prod) {
      return [fib[i], fib[i + 1], true];
    }
    if (currentProd > prod) {
      return [fib[i], fib[i + 1], false];
    }
  }
}

function generateFib(num) {
  let resultArr = [0, 1];
  let n1 = 0;
  let n2 = 1;
  let nextNum = n1 + n2;
  while (nextNum < num) {
    resultArr.push(nextNum);
    n1 = n2;
    n2 = nextNum;
    nextNum = n1 + n2;
  }
  return resultArr;
}

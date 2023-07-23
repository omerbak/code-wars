function partsSums(ls) {
  let sumArr = [];
  let temp;
  for (let i = 0; i <= ls.length; i++) {
    if (sumArr.length === 0) {
      temp = ls.reduce((acc, curr) => acc + curr, 0);
      sumArr.push(temp);
    } else {
      temp = sumArr[sumArr.length - 1] - ls[i - 1];
      sumArr.push(temp);
    }
  }
  return sumArr;
}

function matrixAddition(a, b) {
  let matrixSum = [];
  for (let i = 0; i < a.length; i++) {
    let arr = a[i].map((num, ind) => Number(num) + Number(b[i][ind]));
    matrixSum.push(arr);
  }
  return matrixSum;
}

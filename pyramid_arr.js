function pyramid(n) {
  let pyramid = [];
  for (let i = 1; i <= n; i++) {
    let arr = new Array(i).fill(1);
    pyramid.push(arr);
  }
  return pyramid;
}

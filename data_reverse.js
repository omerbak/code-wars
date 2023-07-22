function dataReverse(data) {
  let max = data.length / 8;
  let arr = [];
  for (let i = 0; i < max; i++) {
    arr = [...data.splice(0, 8), ...arr];
  }
  return arr;
}

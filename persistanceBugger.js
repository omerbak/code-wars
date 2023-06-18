function persistence(num) {
  let times = 0;
  let numStr = String(num);
  while (numStr.length > 1) {
    numStr = numStr
      .split("")
      .map(Number)
      .reduce((acc, curr) => acc * curr)
      .toString();
    times++;
  }
  return times;
}

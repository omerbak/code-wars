function getDivisorsCnt(n) {
  let divisorsArr = [];
  for (let i = n; i > 0; i--) {
    if (n % i === 0) {
      divisorsArr.push(i);
    }
  }
  return divisorsArr.length;
}

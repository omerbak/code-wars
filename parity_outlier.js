function findOutlier(integers) {
  let odd = integers.filter((n) => n % 2 !== 0);
  if (odd.length === 1) {
    return odd[0];
  } else {
    let even = integers.filter((n) => n % 2 === 0);
    return even[0];
  }
}

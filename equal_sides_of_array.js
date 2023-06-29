function findEvenIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    let arr1 = arr.slice(0, i).reduce((acc, curr) => acc + curr, 0);
    let arr2 = arr.slice(i + 1).reduce((acc, curr) => acc + curr, 0);
    if (arr1 === arr2) {
      return i;
    }
  }
  return -1;
}

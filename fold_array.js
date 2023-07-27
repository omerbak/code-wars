function foldArray(array, runs) {
  if (array.length <= 1) {
    return array;
  } else {
    let foldArr;
    for (let i = 0; i < runs; i++) {
      foldArr = [];
      for (let j = 0; j < Math.floor(array.length / 2); j++) {
        let elem = array[j] + array[array.length - j - 1];
        foldArr.push(elem);
      }
      if (array.length % 2 !== 0) {
        foldArr.push(array[Math.floor(array.length / 2)]);
      }
      array = [...foldArr];
    }
    return foldArr;
  }
}

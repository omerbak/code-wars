function inArray(array1, array2) {
  let result = array1.filter((str) => {
    for (let i = 0; i < array2.length; i++) {
      if (array2[i].includes(str)) {
        return true;
      }
    }
    return false;
  });
  return result.sort();
}

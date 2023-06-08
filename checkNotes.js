function checkExam(array1, array2) {
  let score = array2.reduce((acc, curr, i) => {
    if (curr === array1[i]) {
      acc += 4;
    } else if (curr !== "") {
      acc--;
    }
    return acc;
  }, 0);

  return score > 0 ? score : 0;
}

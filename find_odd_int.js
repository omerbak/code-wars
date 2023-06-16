function findOdd(A) {
  let numCount;
  for (let i = 0; i < A.length; i++) {
    numCount = A.filter((item) => item === A[i]).length;
    if (numCount % 2 !== 0) {
      return A[i];
    }
  }

  return "nothing";
}

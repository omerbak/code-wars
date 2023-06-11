var isAnagram = function (test, original) {
  if (test.length !== original.length) return false;

  let originArr = original.toLowerCase().split("");
  let testArr = test.toLowerCase().split("");
  let letterIndex;

  for (let i = 0; i < test.length; i++) {
    if (!originArr.includes(testArr[i])) {
      return false;
    } else {
      letterIndex = originArr.indexOf(testArr[i]);
      originArr.splice(letterIndex, 1).join("");
    }
  }
  return true;
};

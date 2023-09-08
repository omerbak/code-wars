function orderWeight(strng) {
  let strngArr = strng.split(" ").sort((a, b) => {
    if (numSum(a) > numSum(b)) {
      return 1;
    } else if (numSum(a) == numSum(b)) {
      if (a > b) {
        return 1;
      } else {
        return -1;
      }
    } else {
      return -1;
    }
  });
  return strngArr.join(" ");
}

function numSum(numStr) {
  return numStr.split("").reduce((acc, curr) => {
    return Number(curr) + acc;
  }, 0);
}

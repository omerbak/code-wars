function validate(n) {
  let nStr = String(n);
  if (typeof n !== "number" || String(n).length > 16 || String(n).length <= 0)
    return false;
  let nArr = nStr.split("");
  if (nArr.length % 2 === 0) {
    nArr = nArr.map((ele, ind) =>
      ind % 2 === 0 ? Number(ele) * 2 : Number(ele)
    );
  } else {
    nArr = nArr.map((ele, ind) =>
      ind % 2 === 0 ? Number(ele) : Number(ele) * 2
    );
  }

  for (let i = 0; i < nArr.length; i++) {
    if (+nArr[i] >= 10) {
      let digitSum = nArr[i]
        .toString()
        .split("")
        .map((ele) => Number(ele))
        .reduce((acc, curr) => acc + curr, 0);
      nArr[i] = digitSum;
    }
  }
  let allSum = 0;
  for (let i = 0; i < nArr.length; i++) {
    allSum += nArr[i];
  }
  return allSum % 10 === 0;
}

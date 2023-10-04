function findUniq(arr) {
  let normalizedArr = arr.map((str) =>
    [...new Set(str.toLowerCase().split("").sort().join(""))].join("")
  );
  let normal;
  if (normalizedArr[0] == normalizedArr[1]) {
    normal = normalizedArr[0];
  } else {
    if (normalizedArr[0] == normalizedArr[2]) {
      return arr[1];
    } else {
      return arr[0];
    }
  }
  for (let i = 0; i < normalizedArr.length; i++) {
    if (normalizedArr[i] != normal) {
      return arr[i];
    }
  }
  return null;
}

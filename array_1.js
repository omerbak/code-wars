function upArray(arr) {
  let numStr = "";
  if (arr.length <= 0) return null;
  // check that each number is not negative or not a single digit integer
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 9 || arr[i] < 0) return null;
    numStr += arr[i];
  }
  let lengthBeforeCasting = numStr.length;
  numStr = BigInt(numStr);
  let lengthAfterCasting = String(numStr).length;
  numStr = String(numStr + BigInt(1));
  let zerosToAdd = lengthBeforeCasting - lengthAfterCasting;
  let result = numStr.split("").map((num) => +num);
  for (let i = 0; i < zerosToAdd; i++) {
    result.unshift(0);
  }
  return result;
}

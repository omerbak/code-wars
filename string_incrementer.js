function incrementString(strng) {
  let NumAsStr = strng.match(/[0-9]+$/gi); // this would return an arry that contain the number in the first index
  if (NumAsStr) {
    let number = Number(NumAsStr[0]) + 1;
    while (number.toString().length < NumAsStr[0].length) {
      number = "0" + number;
    }
    return strng.replace(/[0-9]+$/gi, "") + number;
  }
  return strng + 1;
}

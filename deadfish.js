// Return the output array, and ignore all non-op characters
function parse(data) {
  let value = 0;
  let arr = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i] === "i") {
      value++;
    } else if (data[i] === "d") {
      value--;
    } else if (data[i] === "s") {
      value = value ** 2;
    } else if (data[i] === "o") {
      arr.push(value);
    }
  }
  return arr;
}

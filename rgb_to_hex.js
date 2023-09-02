function rgb(r, g, b) {
  let hexR = decimalToHex(r).padStart(2, "0");
  let hexg = decimalToHex(g).padStart(2, "0");
  let hexb = decimalToHex(b).padStart(2, "0");
  return hexR + hexg + hexb;
}

function decimalToHex(num) {
  if (num > 255) num = 255;
  const hexNums = { 10: "A", 11: "B", 12: "C", 13: "D", 14: "E", 15: "F" };
  let remainders = [];
  let remainder;
  while (num > 0) {
    remainder = num % 16;
    num = Math.floor(num / 16);
    remainders.unshift(remainder);
  }
  return remainders.reduce(
    (acc, curr) => (curr > 9 ? acc + hexNums[curr] : acc + String(curr)),
    ""
  );
}

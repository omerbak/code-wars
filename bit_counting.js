var countBits = function (n) {
  let bin = n.toString(2);
  return bin.split("").filter((n) => n == 1).length;
};

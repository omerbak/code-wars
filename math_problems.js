Math.round = function (number) {
  let rest = number % 1;
  if (rest >= 0.5) {
    return parseInt(number) + 1;
  } else {
    return parseInt(number);
  }
};

Math.ceil = function (number) {
  let rest = number % 1;
  return rest > 0 ? parseInt(number) + 1 : parseInt(number);
};

Math.floor = function (number) {
  return parseInt(number);
};

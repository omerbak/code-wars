// TODO

Array.prototype.square = function () {
  return this.map((n) => n ** 2);
};
Array.prototype.cube = function () {
  return this.map((n) => n ** 3);
};
Array.prototype.average = function () {
  return this.reduce((acc, curr) => acc + curr, 0) / this.length;
};
Array.prototype.sum = function () {
  return this.reduce((acc, curr) => acc + curr, 0);
};
Array.prototype.even = function () {
  return this.filter((n) => n % 2 === 0);
};
Array.prototype.odd = function () {
  return this.filter((n) => n % 2 !== 0);
};

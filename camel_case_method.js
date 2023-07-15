String.prototype.camelCase = function () {
  if (this == "") return "";
  console.log(this);
  let arr = this.split(" ").map(
    (word) => word[0].toUpperCase() + word.slice(1).toLowerCase()
  );
  return arr.join("");
};

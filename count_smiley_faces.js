function countSmileys(arr) {
  if (arr.length <= 0) return 0;
  let regex = /^[:;][-~]?[D)]$/;
  return arr.filter((face) => regex.test(face)).length;
}

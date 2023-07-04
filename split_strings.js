function solution(str) {
  if (str.length <= 0) return [];
  if (str.length % 2 !== 0) {
    str += "_";
  }
  return str.match(/\w{2}/gi);
}

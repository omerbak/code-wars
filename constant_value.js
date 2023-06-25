function solve(s) {
  let arr = s.split(/[auioe]/gi).filter((str) => str !== "");
  let res = arr.map((str) => {
    return str
      .split("")
      .reduce((acc, curr) => acc + curr.toLowerCase().charCodeAt(0) - 96, 0);
  });
  return Math.max(...res);
}

function solve(s) {
  if (s === "") return "";
  let obj = s.split("").reduce(
    (acc, curr) => {
      if (curr === curr.toUpperCase()) {
        acc["up"]++;
      } else {
        acc["low"]++;
      }
      return acc;
    },
    { up: 0, low: 0 }
  );
  return obj["up"] > obj["low"] ? s.toUpperCase() : s.toLowerCase();
}

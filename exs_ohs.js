function XO(str) {
  let arr = str.split("").reduce(
    (acc, curr) => {
      if (curr.toLowerCase() == "x") {
        acc["x"]++;
      } else if (curr.toLowerCase() == "o") {
        acc["o"]++;
      }
      return acc;
    },
    { x: 0, o: 0 }
  );
  return arr["x"] === arr["o"];
}

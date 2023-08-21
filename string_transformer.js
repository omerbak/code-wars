function stringTransformer(str) {
  let arr = str.split(" ");
  let result = arr.map((word) =>
    word
      .split("")
      .map((char) =>
        char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()
      )
      .join("")
  );
  return result.reverse().join(" ");
}

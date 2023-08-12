const dup = (s) =>
  s.map((word) =>
    word
      .split("")
      .reduce(
        (acc, curr, ind, arr) => (curr !== arr[ind + 1] ? acc + curr : acc),
        ""
      )
  );

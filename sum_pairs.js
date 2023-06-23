function sumPairs(ints, s) {
  let res,
    pair,
    pairIndex,
    memo = {};
  for (let i = 0; i < ints.length; i++) {
    if (!memo[ints[i]]) {
      pair = s - ints[i];
      pairIndex = ints.indexOf(pair, i + 1);
      if (pairIndex !== -1) {
        if (!res) {
          res = { first: i, second: pairIndex };
        } else if (pairIndex < res["second"]) {
          res = { first: i, second: pairIndex };
        }
      }
      memo[ints[i]] = 1;
    }
  }
  return res ? [ints[res["first"]], ints[res["second"]]] : undefined;
}

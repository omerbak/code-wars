function findMultiples(integer, limit) {
  let i = 1,
    curr = integer,
    res = [];
  while (curr < limit) {
    curr = integer * i;
    if (curr <= limit) {
      res.push(curr);
    }
    i++;
  }
  return res;
}

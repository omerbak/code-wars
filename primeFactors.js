function primeFactors(n) {
  let facts = factors(n); // get all the facotrs of n
  let str = "";
  //calculate the occurrences of each factor
  let occurrences = facts.reduce(
    (acc, curr) =>
      acc[curr] ? { ...acc, [curr]: acc[curr] + 1 } : { ...acc, [curr]: 1 },
    {}
  );
  //loop through the keys of ocurrences object
  Object.keys(occurrences).forEach((item) => {
    if (occurrences[item] == 1) {
      str += `(${item})`;
    } else {
      str += `(${item}**${occurrences[item]})`;
    }
  });
  return str;
}

// takes a number (n) and return and array containing all the prime factors of n.
function factors(n) {
  let max = Math.floor(Math.sqrt(n));
  let res = [];
  for (let i = 2; i <= max; i++) {
    if (n % i === 0) {
      res.push(i);
      n /= i;
      max = Math.floor(Math.sqrt(n));
      i = (Math.min([...res]) || 2) - 1;
    }
  }
  res.push(n);
  return res;
}

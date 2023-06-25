function duplicateCount(text) {
  let occurrences = text.split("").reduce((acc, curr) => {
    if (acc[curr.toLowerCase()]) {
      acc[curr.toLowerCase()]++;
    } else {
      acc[curr.toLowerCase()] = 1;
    }
    return acc;
  }, {});

  let values = Object.values(occurrences);
  return values.filter((val) => val >= 2).length;
}

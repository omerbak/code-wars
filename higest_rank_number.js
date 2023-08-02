function highestRank(arr) {
  // get the occurrences for each element of the array
  let occurrences = arr.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
  //get the higest number of occurrences
  let values = Object.values(occurrences);
  let maxValue = Math.max(...values);
  let result = [];
  //get all the elements with occurrence equal to maxValue
  for (let item in occurrences) {
    if (occurrences[item] === maxValue) {
      result.push(item);
    }
  }
  // return the bigger number
  return Math.max(...result);
}

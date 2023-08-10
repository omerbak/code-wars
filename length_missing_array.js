function getLengthOfMissingArray(arrayOfArrays) {
  if (
    !arrayOfArrays ||
    arrayOfArrays.length === 0 ||
    arrayOfArrays.includes(null)
  )
    return 0;
  let sortedLengths = arrayOfArrays
    .sort((a, b) => a.length - b.length)
    .map((item) => item.length);
  if (sortedLengths.includes(0)) return 0;
  for (let i = 0; i < sortedLengths.length - 1; i++) {
    if (sortedLengths[i + 1] - sortedLengths[i] !== 1) {
      return sortedLengths[i] + 1;
    }
  }
  return 0;
}

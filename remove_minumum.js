function removeSmallest(numbers) {
  let numbersCopy = [...numbers];
  const indexSm = numbersCopy.indexOf(Math.min(...numbersCopy));
  numbersCopy.splice(indexSm, 1);
  return numbersCopy;
}

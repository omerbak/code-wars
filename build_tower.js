function towerBuilder(nFloors) {
  let arr = [];
  for (let i = 0; i < nFloors; i++) {
    let starsToAdd = i * 2 + 1;
    arr[i] = "*".repeat(starsToAdd);
    let spacesToAdd = nFloors * 2 - 1 - arr[i].length;
    arr[i] = " ".repeat(spacesToAdd / 2) + arr[i] + " ".repeat(spacesToAdd / 2);
  }
  return arr;
}

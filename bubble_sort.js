function bubbleSort(arr) {
  let swaped;
  do {
    swaped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
        swaped = true;
      }
    }
  } while (swaped);
  return arr;
}

let list = [10, 30, 3, 5, 1, 9, 0];
console.log(bubbleSort(list));

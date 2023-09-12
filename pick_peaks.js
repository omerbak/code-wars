function pickPeaks(arr) {
  let result = { pos: [], peaks: [] };

  let currentPeak,
    currentPosition,
    uTurn = false;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] > arr[i]) {
      uTurn = true;
      (currentPeak = arr[i + 1]), (currentPosition = i + 1);
    } else if (arr[i + 1] < arr[i]) {
      if (i !== 0 && uTurn) {
        result.peaks.push(currentPeak);
        result.pos.push(currentPosition);
        uTurn = false;
      }
    }
  }
  return result;
}

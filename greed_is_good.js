function score(dice) {
  let occurrences = dice.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});

  let points = 0;
  for (num in occurrences) {
    if (num == 1) {
      while (occurrences[1] > 0) {
        if (occurrences[1] >= 3) {
          points += 1000;
          occurrences[1] -= 3;
        } else {
          points += 100;
          occurrences[1] -= 1;
        }
      }
    } else if (num == 5) {
      while (occurrences[5] > 0) {
        if (occurrences[5] >= 3) {
          points += 500;
          occurrences[5] -= 3;
        } else {
          points += 50;
          occurrences[5] -= 1;
        }
      }
    } else if (num == 6) {
      if (occurrences[6] >= 3) {
        points += 600;
        occurrences[6] -= 3;
      }
    } else if (num == 4) {
      if (occurrences[4] >= 3) {
        points += 400;
        occurrences[4] -= 3;
      }
    } else if (num == 3) {
      if (occurrences[3] >= 3) {
        points += 300;
        occurrences[3] -= 3;
      }
    } else if (num == 2) {
      if (occurrences[2] >= 3) {
        points += 200;
        occurrences[2] -= 3;
      }
    }
  }
  return points;
}

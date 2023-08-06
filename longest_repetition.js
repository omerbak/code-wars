function longestRepetition(s) {
  if (s.length <= 0) return ["", 0];
  let arr = s.split("");
  let longestStreak = { [arr[0]]: 1 };
  let currentStreak = 1;
  arr.forEach((letter, ind, arr) => {
    if (letter === arr[ind + 1]) {
      currentStreak++;
    } else {
      if (currentStreak > Object.values(longestStreak)[0]) {
        longestStreak = { [letter]: currentStreak };
      }
      currentStreak = 1;
    }
  });
  return Object.entries(longestStreak)[0];
}

function tripledouble(num1, num2) {
  let tripledNumbers = [];
  let num1String = num1.toString();
  let num2String = num2.toString();

  for (let i = 0; i < num1String.length; i++) {
    if (
      num1String[i] == num1String[i + 1] &&
      num1String[i] == num1String[i + 2]
    ) {
      tripledNumbers.push(num1String[i]);
    }
  }

  tripledNumbers = [...new Set(tripledNumbers)];

  for (let i = 0; i < num2String.length; i++) {
    if (
      tripledNumbers.includes(num2String[i]) &&
      num2String[i] == num2String[i + 1]
    )
      return 1;
  }
  return 0;
}

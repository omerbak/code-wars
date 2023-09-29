function validISBN10(isbn) {
  let regexMatch = /^[0-9]{9}[0-9X]$/.test(isbn);
  if (!regexMatch) return false;
  let isbnArr = isbn.split("").map((el) => (el === "X" ? 10 : el));
  let result = isbnArr.reduce(
    (acc, curr, i) => acc + Number(curr) * (i + 1),
    0
  );
  return result % 11 === 0;
}

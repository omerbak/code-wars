function longestPalindrome(s) {
  if (s.length <= 0) return 0;
  let palindroms = [];
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      let subStr = s.slice(i, j);
      if (isPalindrom(subStr)) {
        palindroms.push(subStr);
      }
    }
  }
  return palindroms.reduce(
    (acc, curr) => (curr.length > acc ? curr.length : acc),
    0
  );
}

function isPalindrom(word) {
  return word.split("").reverse().join("") === word;
}

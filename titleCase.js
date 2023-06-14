function titleCase(title, minorWords) {
  if (title.length <= 0) return "";

  let minorsArr = minorWords
    ? minorWords.split(" ").map((word) => word.toLowerCase())
    : [];
  let titleArr = title.split(" ").map((word, i) => {
    if (i == 0 || !minorsArr.includes(word.toLowerCase())) {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    } else {
      return word.toLowerCase();
    }
  });
  return titleArr.join(" ");
}

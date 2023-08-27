function formatWords(words) {
  console.log(words);
  if (!words || words.length <= 0) return "";
  let filteredWords = words.filter((word) => word.length > 0);
  console.log(filteredWords);
  if (filteredWords.length > 2) {
    return (
      filteredWords.slice(0, filteredWords.length - 2).join(", ") +
      ", " +
      filteredWords.slice(filteredWords.length - 2).join(" and ")
    );
  } else if (filteredWords.length == 2) {
    return filteredWords.join(" and ");
  } else if (filteredWords.length == 1) {
    return filteredWords[0];
  } else {
    return "";
  }
}

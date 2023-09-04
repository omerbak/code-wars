function generateHashtag(str) {
  if (str.length <= 0) return false;
  let checkSpace = str.replace(/\s/g, "");
  if (checkSpace.length <= 0) return false;
  let strCapitlized = str
    .split(" ")
    .filter((word) => word !== "")
    .map((word) => word[0].toUpperCase() + word.slice(1));
  let result = "#" + strCapitlized.join("");
  if (result.length > 140) {
    return false;
  } else {
    return result;
  }
}

function toUnderscore(string) {
  if (typeof string === "number") return String(string);

  let start = 0,
    end;
  let result = [];

  for (let i = 0; i < string.length; i++) {
    if (/[A-Z]/.test(string[i])) {
      if (i != 0) {
        end = i;
        let current = string.slice(start, end);
        result.push(current.toLowerCase());
        start = i;
      }
    }
  }

  let current = string.slice(start);
  result.push(current.toLowerCase());

  return result.join("_");
}

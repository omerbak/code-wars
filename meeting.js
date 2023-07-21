function meeting(s) {
  return s
    .split(";")
    .map((name) => name.toUpperCase().split(":"))
    .sort((a, b) =>
      a[1].localeCompare(b[1]) === 0
        ? a[0].localeCompare(b[0])
        : a[1].localeCompare(b[1])
    )
    .map((name) => `(${name[1]}, ${name[0]})`)
    .join("");
}

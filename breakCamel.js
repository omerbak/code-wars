/* Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  "" */

const solution = (string) =>
  string
    .split("")
    .reduce(
      (acc, curr) =>
        curr === curr.toUpperCase() ? acc + ` ${curr}` : acc + curr,
      ""
    );

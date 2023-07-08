function validBraces(braces) {
  const opens = ["(", "{", "["];
  let arr = braces.split("");
  let stack = [];

  for (let i = 0; i < arr.length; i++) {
    if (opens.includes(arr[i])) {
      stack.push(arr[i]);
    } else {
      if (arr[i] === ")") {
        if (stack.pop() !== "(") {
          return false;
        }
      } else if (arr[i] === "}") {
        if (stack.pop() !== "{") {
          return false;
        }
      } else if (arr[i] === "]") {
        if (stack.pop() !== "[") {
          return false;
        }
      }
    }
  }
  return stack.length === 0;
}

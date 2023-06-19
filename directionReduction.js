function dirReduc(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (result.length > 0) {
      if (isOpposite(result[result.length - 1], arr[i])) {
        result.pop();
      } else {
        result.push(arr[i]);
      }
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

function isOpposite(dir1, dir2) {
  if (
    (dir1 === "SOUTH" && dir2 === "NORTH") ||
    (dir2 === "SOUTH" && dir1 === "NORTH")
  ) {
    return true;
  } else if (
    (dir1 === "EAST" && dir2 === "WEST") ||
    (dir2 === "EAST" && dir1 === "WEST")
  ) {
    return true;
  } else {
    return false;
  }
}

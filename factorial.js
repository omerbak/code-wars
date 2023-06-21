/*
function factorial(n){
  let fac = 1;
  while(n > 1){
    fac *= n;
    n--
  }
  return fac;
}
*/
// the recursion way

function factorial(n) {
  if (n < 0 || n > 12) {
    throw new Error("RangeError");
  }

  if (n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

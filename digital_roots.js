function digitalRoot(n) {
  let strN = String(n);
  let curr = 0;

  while (strN.length > 1) {
    for (let i = 0; i < strN.length; i++) {
      curr += Number(strN[i]);
    }
    strN = String(curr);
    curr = 0;
  }
  return Number(strN);
}

function int32ToIp(int32) {
  let numBase2 = int32.toString(2).padStart(32, "0"); //convert the number to base 2 of 32 bits
  let numBase2Arr = numBase2.match(/.{1,8}/g); // split eche 8 bits

  return numBase2Arr.map((ele) => parseInt(ele, 2)).join("."); // convert each 8 base2 bits to base10
}

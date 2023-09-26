function hexStringToRGB(hexString) {
  const result = hexString
    .replace("#", "")
    .match(/.{2}/g)
    .map((hex) => parseInt(hex, 16));
  return { r: result[0], g: result[1], b: result[2] };
}

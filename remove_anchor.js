function removeUrlAnchor(url) {
  let result = url;
  if (url.indexOf("#") != -1) {
    result = url.slice(0, url.indexOf("#"));
  }
  return result;
}

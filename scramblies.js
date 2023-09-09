function scramble(str1, str2) {
  let cache1 = {};
  let cache2 = {};
  for (let i = 0; i < str1.length; i++) {
    if (cache1[str1[i]]) {
      cache1[str1[i]]++;
    } else {
      cache1[str1[i]] = 1;
    }
  }
  for (let i = 0; i < str2.length; i++) {
    if (cache2[str2[i]]) {
      cache2[str2[i]]++;
    } else {
      cache2[str2[i]] = 1;
    }
  }
  for (num in cache2) {
    if (!cache1[num] || cache2[num] > cache1[num]) {
      return false;
    }
  }
  return true;
}

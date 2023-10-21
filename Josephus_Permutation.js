function josephus(items, k) {
  let result = [];
  let current = k;
  let max = items.length;
  if (max <= 0) return [];

  for (let i = 1; i <= max; i++) {
    while (current > items.length) {
      current = current - items.length;
      // current = current >= 0 ? current : 0 ;
    }

    result.push(...items.splice(current - 1, 1));
    current += k - 1;
  }
  return result;
}

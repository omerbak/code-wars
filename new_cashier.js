function getOrder(input) {
  let order = {
    burger: 0,
    fries: 0,
    chicken: 0,
    pizza: 0,
    sandwich: 0,
    onionrings: 0,
    milkshake: 0,
    coke: 0,
  };
  let start = 0;
  for (let i = 0; i < input.length + 1; i++) {
    let word = input.slice(start, i);
    if (Object.keys(order).includes(word)) {
      order[word]++;
      start = i;
    }
  }
  let result = "";
  Object.keys(order).forEach((item) => {
    result += (item[0].toUpperCase() + item.slice(1) + " ").repeat(order[item]);
  });
  return result.trim();
}

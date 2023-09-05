function cakes(recipe, available) {
  let times = [];
  for (let ing in recipe) {
    if (!available[ing] || available[ing] === 0) {
      return 0;
    } else {
      let ingTimes = Math.floor(available[ing] / recipe[ing]);
      times.push(ingTimes);
    }
  }
  return Math.min(...times);
}

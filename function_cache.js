function cache(func) {
  let cache = {};

  return function () {
    let name = JSON.stringify(arguments);

    if (cache.hasOwnProperty(name)) {
      return cache[name];
    } else {
      let result = func(...arguments);
      return (cache[name] = result);
    }
  };
}

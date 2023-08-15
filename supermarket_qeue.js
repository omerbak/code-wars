function queueTime(customers, n) {
  let times = 0;
  let currentCustomers;
  while (customers.length > 0) {
    if (n > customers.length) {
      n = customers.length;
    }
    currentCustomers = customers.splice(0, n);
    currentCustomers = currentCustomers.map((one) => one - 1);
    currentCustomers = currentCustomers.filter((one) => one !== 0);
    customers = [...currentCustomers, ...customers];
    times++;
  }
  return times;
}

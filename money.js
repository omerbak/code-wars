function calculateYears(principal, interest, tax, desired) {
  let currentSum = principal;
  let years = 0;
  let yearlyProfit;
  while (currentSum < desired) {
    yearlyProfit = currentSum * interest;
    yearlyProfit = yearlyProfit - yearlyProfit * tax; //after subtracting the tax
    currentSum += yearlyProfit;
    years++;
  }
  return years;
}

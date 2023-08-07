function nbMonths(
  startPriceOld,
  startPriceNew,
  savingperMonth,
  percentLossByMonth
) {
  let months = 0;
  let available = startPriceOld - startPriceNew;
  let saving = 0;
  while (available < 0) {
    months++;
    if (months % 2 === 0) {
      percentLossByMonth += 0.5;
    }
    startPriceOld *= (100 - percentLossByMonth) / 100;
    startPriceNew *= (100 - percentLossByMonth) / 100;
    saving += savingperMonth;
    available = startPriceOld - startPriceNew + saving;
  }

  return [months, Math.round(available)];
}

function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
    let months = 0;
    let priceOld = startPriceOld;
    let priceNew = startPriceNew;
    let currLossPercent = percentLossByMonth;
    let currSavings = 0;
    let netMoney = currSavings + priceOld - priceNew;
    
    while (netMoney < 0) {
      months++;
      if (months > 0 && months % 2 === 0) currLossPercent += 0.5;
      
      priceOld -= priceOld * (currLossPercent / 100);
      priceNew -= priceNew * (currLossPercent / 100);
      
      currSavings += savingperMonth;
      netMoney = currSavings + priceOld - priceNew;
    }
    return [months, Math.round(netMoney)];
  }
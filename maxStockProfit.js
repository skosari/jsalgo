// Our algorithm will determine what the max profit we could have made throughout the day
// [32, 46, 26, 38, 40, 48, 42]
//      buy@26     sell@48
// return -1 if there is no profit to be made that day

function maxStockProfit(priceArr) {
  var maxProfit = -1;
  var buyPrice = 0;
  var sellPrice = 0;
  var changeBuyPrice = true;
  for (var i = 0; i < priceArr.length; i++) {
    if (changeBuyPrice) buyPrice = priceArr[i];
    
    sellPrice = priceArr[i+1];

    if (sellPrice < buyPrice) {
      changeBuyPrice = true;
    }
    else {
      var tempProfit = sellPrice - buyPrice;
      if (tempProfit > maxProfit) maxProfit = tempProfit;
      changeBuyPrice = false;
    }
  }
  return maxProfit;
}

console.log(maxStockProfit([32, 46, 26, 38, 40, 48, 42]))
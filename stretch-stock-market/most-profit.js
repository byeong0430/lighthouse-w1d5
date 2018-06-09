Array.prototype.maxProfit = function(){
  // Start with a default value of -1
  let profit = -1;
  // There must be at least 2 data points to make any profit. Otherwise, return -1 (default profit);
  if(this.length < 2) return profit;
  let profitArray = [];

  // In order to maximise profit, buy low and then sell high
  this.forEach((buyPrice, index, original) => {
    // The current price is a buy price. All the other consecutive prices are sell prices.
    let availableSellPrices = original.slice().splice(index + 1, original.length);
    // Find the maximum sell price
    let laterMax = Math.max.apply(null, availableSellPrices);
    // profit = laterMax - buyPrice. If profit is greater than 0, there is a profit! Push that to profitArray
    profit = laterMax - buyPrice;
    if(profit > 0) profitArray.push(profit);
  });
  // Return the maximum profit
  return Math.max.apply(null, profitArray);
}
// [45, 24, 35, 31, 40, 38, 11]
let result = [45, 24, 35, 31, 40, 38, 11].maxProfit();
console.log(result);
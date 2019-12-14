/** 
Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Not 7-1 = 6, as selling price needs to be larger than buying price.

Example 2:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/

var maxProfit = function(prices) {
  // Keep running track of min price and max profit
  // Iterate through prices arr
    // If current price < min price, update min price
    // Else if current price - min price > max profit, update max profit
  // Return max profit

  let minPrice = Number.MAX_SAFE_INTEGER;
  let maxProfit = 0;

  for (let currentPrice = 0; currentPrice < prices.length; currentPrice++) {
    if (prices[currentPrice] < minPrice) {
      minPrice = prices[currentPrice];
    } else if (prices[currentPrice] - minPrice > maxProfit) {
      maxProfit = prices[currentPrice] - minPrice;
    }
  }

  return maxProfit;
};

// O(1) space - no additional dynamic space is used
// O(n) time - at most, iterate through the input arr once

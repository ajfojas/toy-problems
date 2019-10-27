/*
You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.

Example 1:
Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:
Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/

var climbStairs = function(n) {
  // Keep track of total number of distinct ways to climb to the top
  // Have a recursive function that intakes the number of steps remaining
    // Iterate through number of climbing options
    // Base case: return when number of steps remaining === 0
    // Recursive case: if steps remaining - climbing option >= 0, keep recursing
  // Return total distinct ways to climb

  let totalWays = 0;
  let climbOptions = [2, 1];

  let recurse = (remainingSteps) => {
    for (let i = 0; i < climbOptions.length; i++) {
      if (remainingSteps === 0) {
        totalWays++;
        return;
      }

      if (remainingSteps - climbOptions[i] >= 0) {
        recurse(remainingSteps - climbOptions[i]);
      }
    }
  };
  recurse(n);

  return totalWays;
};

// O(n) space
// O(2^n) time

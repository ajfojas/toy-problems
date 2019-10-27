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
  // You can reach the ith step in 2 different ways:
  // 1. Taking a step of 1 from i-1 step
  // 2. Taking a step of 2 from i-2 step
  // The total # ways to reach the ith step === # ways to reach i-1 step + # ways to reach i-2 step

  if (n === 1) {
    return 1;
  }

  let step = [];
  for (let i = 0; i <= 2; i++) {
    step[i] = i;
  }

  for (let i = 3; i <= n; i++) {
    step[i] = step[i-1] + step[i-2];
  }

  return step[n];
};

// O(n) space
// O(n) time

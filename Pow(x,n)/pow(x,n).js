/*
Implement pow(x, n), which calculates x raised to the power n (xn).

Example 1:

Input: 2.00000, 10
Output: 1024.00000
Example 2:

Input: 2.10000, 3
Output: 9.26100
Example 3:

Input: 2.00000, -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25
Note:

-100.0 < x < 100.0
n is a 32-bit signed integer, within the range [−231, 231 − 1]
*/

var myPow = function(x, n) {
  // If n === 0, return 1
  // If x === 0, return 0
  // Keep track of if n is (+) or (-)
  // Let n be a countdown
  // While n-1 > 0
    // Multiply x * base
    // n--
  // If n (+), return x
  // Else, return 1/x

  if (n === 0) return 1;
  if (x === 0) return 0;
  if (x === 1) return 1;
  if (x === -1) return n % 2 === 0 ? 1 : -1;

  const base = x;
  const positive = n >= 0 ? true : false;
  n = Math.abs(n);

  while (n - 1 > 0) {
    x = x * base;
    n--;
  }

  return positive ? x : 1 / x;
};

// O(1) space - no additional dynamic space is used
// O(n) time - while-loop iterates n times

/*
Implement int sqrt(int x).

Compute and return the square root of x, where x is guaranteed to be a non-negative integer.

Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

Example 1:
Input: 4
Output: 2

Example 2:
Input: 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.
*/

var mySqrt = function(x) {
  // For x >= 2, the square root is always smaller than x/2 and greater than 2:   2 <= sqrt(x) <= x/2
  // If x < 2, return x
  // Set left bound to 2, set right bound to x/2
  // While left <= right
    // Take num = (left + right) / 2, compute num * num
      // If > x, move decrement right bound by 1
      // If < x, move increment left bound by 1
      // If === x, return x
  // Return right
};

// O() space
// O() time

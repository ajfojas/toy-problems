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
  // Set left bound to 2, set right bound to Math.ceil(x/2)
  // While left <= right
    // Take num = left + (right - left) / 2, compute num * num
      // If > x, right = num - 1
      // If < x, left = num + 1
      // If === x, return num
  // Return right

  if (x < 2) {
    return x;
  }

  let left = 2;
  let right = Math.ceil(x/2);

  while (left <= right) {
    let num = Math.floor(left + (right - left) / 2);
    let num2 = num * num;
    if (num2 > x) {
      right = num - 1;
    } else if (num2 < x) {
      left = num + 1;
    } else {
      return num;
    }
  }

  return right;
};

// O(1) space
// O(log(n)) time

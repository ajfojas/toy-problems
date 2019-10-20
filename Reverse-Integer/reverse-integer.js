/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:
  Input: 123
  Output: 321

Example 2:
  Input: -123
  Output: -321

Example 3:
  Input: 120
  Output: 21

Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/

var reverse = function(x) {
  // Determine if number is (+) or (-)
  // Convert absolute value into a string
  // Split into array, reverse, and join
  // If original number was (-), add (-) to reversed string
  // Convert back into number
  // Determine if number is within range

  let negative = x < 0 ? true : false;

  let num = String(Math.abs(x));
  num = num.split("").reverse().join("");
  if (negative) {
    num = "-" + num;
  }
  num = Number(num);

  if (Math.abs(num) > Math.pow(2, 31) - 1) {
    return 0;
  }

  return num;
};

// O(n) space
// O(n) time

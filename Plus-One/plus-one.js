/*
Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

Example 1:

Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.

Example 2:

Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
*/

var plusOne = function(digits) {
  // Make a new results arr of size digits + 1
  // Keep track of digitsIdx, starting from the end
  // Keep track of resultsIdx, starting from end
  // Keep track of carry over, initially set to 0
  // Add 1 to last element of digits arr
  // Set last element of results arr to digits[last element] % 10
  // If digits[element] > 9
    // Carry over = 1
    // While there's a carry over && digitsIdx !== 0
      // Decrement digitsIdx--
      // Decrement resultsIdx--
      // Add carry over to digits[element]
      // results[element] = digits[element] % 10
      // If digits[element] < 10, carry over = 0
    // If digitsIdx === 0 && carry over, resultsIdx--, results[element] = 1
  // Return results arr
};

// O() space - 
// O() time - 

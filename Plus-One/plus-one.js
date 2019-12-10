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
  // Keep track of carry over
  // Add 1 to last element of digits arr
  // Set last element of results arr to digits[digitsIdx] % 10
  // While digitsIdx !== 0
    // Determine if there's a carry over
    // Decrement digitsIdx--
    // Decrement resultsIdx--
    // Add carry over amount to digits[digitsIdx]
    // Set current element of results arr to digits[digitsIdx] % 10
  // Decrement resultsIdx--
  // Set first element of results arr to current carry over amount
  // Return results arr

  let results = Array(digits.length + 1);
  let digitsIdx = digits.length - 1;
  let resultsIdx = results.length - 1;
  let carry;

  digits[digitsIdx]++;
  results[resultsIdx] = digits[digitsIdx] % 10;

  while (digitsIdx !== 0) {
    carry = digits[digitsIdx] > 9 ? 1 : 0;
    digitsIdx--;
    resultsIdx--;
    digits[digitsIdx] += carry;
    results[resultsIdx] = digits[digitsIdx] % 10;
  }

  resultsIdx--;
  results[resultsIdx] = digits[digitsIdx] > 9 ? 1 : 0;

  return results[0] === 0 ? results.slice(1) : results;
};

// O(n) space - create a new results array with size of input array + 1
// O(n) time - at most, iterate through input array once

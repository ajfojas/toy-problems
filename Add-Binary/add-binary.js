/*
Given two binary strings, return their sum (also a binary string).

The input strings are both non-empty and contains only characters 1 or 0.

Example 1:
Input: a = "11", b = "1"
Output: "100"

Example 2:
Input: a = "1010", b = "1011"
Output: "10101"
*/

var addBinary = function(a, b) {
  // Keep track of output with empty string
  // Determine longest string length + 1
  // Iterate longest length in reverse
    // Add both digits at ith element
    // Check for carry over, add 1 if true
    // If sum > 1, subtract by 2, carry over = true
    // Else carry over = false
    // Output = sum + output
  // Return output
};

// O(n) space
// O(n) time

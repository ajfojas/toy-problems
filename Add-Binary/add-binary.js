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

  let output = '';
  let str1 = a.split('').reverse().join('') + '0';
  let str2 = b.split('').reverse().join('') + '0';
  let strlen = str1.length >= str2.length ? str1.length : str2.length;
  let carryOver = false;

  for (let i = 0; i < strlen; i++) {
    let sum = Number(str1[i] || 0) + Number(str2[i] || 0);
    if (carryOver === true) {
      sum++;
    }
    if (sum > 1) {
      sum = sum - 2;
      carryOver = true;
    } else {
      carryOver = false;
    }
    output = sum + output;
  }
  if (output[0] === '0') {
    return output.substring(1);
  }
  return output;
};

// O(n) space
// O(n) time

/*
The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.

Note:
0 ≤ x, y < 231.

Example:

Input: x = 1, y = 4

Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different.
*/

var hammingDistance = function(x, y) {
  // Convert both inputs to binary as strings
  // Keep track of # differences
  // Iterate through the longer string
    // If either index is null, break
    // If difference between inputs at current index, increment counter
  // Add amount of leftover digits of longer string to counter
  // Return counter

  let xString = x.toString(2).split('').reverse().join('');
  let yString = y.toString(2).split('').reverse().join('');
  let differences = 0;
  let longerLength
  if (xString.length >= yString.length) {
    longerLength = xString.length;
  } else {
    longerLength = yString.length;
  }

  for (let digit = 0; digit < longerLength; digit++) {
    if (xString[digit] === '1' && yString[digit] !== '1' || yString[digit] === '1' && xString[digit] !== '1') differences++;
  }

  return differences;
};

// O(x + y) space - string conversion takes x + y space
// O(x + y) time - converting to strings take x + y time

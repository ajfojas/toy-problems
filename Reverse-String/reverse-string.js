/*
Write a function that reverses a string. The input string is given as an array of characters char[].

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

You may assume all the characters consist of printable ascii characters.

Example 1:

Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Example 2:

Input: ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
*/

var reverseString = function(s) {
  // Have a left pointer and a right pointer
  // While L < R
    // Swap L and R elements
    // L++
    // R--
  // Return s

  let L = 0;
  let R = s.length - 1;

  while (L < R) {
    swap(L, R, s);
    L++;
    R--;
  }

  return s;
};

let swap = (idx1, idx2, arr) => {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
};

// O(1) space - no additional dynamic space is used
// O(n) time - at most, touch each element once

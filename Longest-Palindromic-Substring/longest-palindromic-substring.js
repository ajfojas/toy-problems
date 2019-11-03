/*
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:
Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.

Example 2:
Input: "cbbd"
Output: "bb"
*/

var longestPalindrome = function(s) {
  // There are 2n -1 possible palindrome centers (each char and between each char)
  // Account for empty string and null edge cases
  // Keep track of start and end location of longest palindrome
  // Iterate through string
    // Determine the longest palindrome from each substring by expanding from the center char or between current char and next char
      // Return the length of it
    // If length > (end - start), update start and end
  // Return s.substring(Math.ceil(start), end + 1)

  if (s.length <= 0 || s === null) {
    return '';
  }

  let start = 0;
  let end = 0;

  for (let i = 0; i < s.length; i++) {
    let len1 = expand(s, i, i);
    let len2 = expand(s, i, i + 1);
    let len = Math.max(len1, len2);
    if (len > (end - start)) {
      start = i - (len - 1) / 2;
      end = i + (len / 2);
    }
  }

  return s.substring(Math.ceil(start), end + 1)
};

let expand = (string, left, right) => {
  let L = left;
  let R = right;

  while (L >= 0 && R < string.length && string[L] === string[R]) {
    L--;
    R++;
  }

  return R - L - 1;
};

// O(1) space - additional space does not change dynamically
// O(n^2) time - for each element iteration, there can be expansion across, at most, the rest of the chars

/*
Given a string, find the length of the longest substring without repeating characters.

Example 1:
Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

var lengthOfLongestSubstring = function(s) {
  // Have a pointer start on the left
  // Keep track of longest length with int
  // Keep track of current length with int
  // Keep track of chars seen with set
  // Iterate through s
    // If char is not in set, add char in set, increment current length++
    // Else, clear set, set current iteration to pointer++
    // If current length > longest length, longest length = current length, reset current length
  // Return longest length

  let startChar = 0;
  let longestLength = 0;
  let currentLength = 0;
  let charsSeen = new Set();

  for (let i = 0; i < s.length; i++) {
    if (!charsSeen.has(s[i])) {
      charsSeen.add(s[i]);
      currentLength++;
    } else {
      charsSeen.clear();
      i = startChar++;
      currentLength = 0;
    }
    if (currentLength > longestLength) {
      longestLength = currentLength;
    }
  }

  return longestLength;
};

// O(n) space - could store each char in set
// O(n^2) time - could have a really long unique string that is then repeated right after

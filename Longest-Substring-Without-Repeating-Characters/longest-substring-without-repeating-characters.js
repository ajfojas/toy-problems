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
  // Keep track of chars seen with set
  // Keep track of longest length
  // Keep track of sliding window
  // While window is within s.length
    // If char at rWindow is not in set, add char in set, increment rWindow, update longest length if needed
    // Else, delete char at lWindow
  // Return longest length

  let charsSeen = new Set();
  let longestLength = 0;
  let lWindow = 0;
  let rWindow = 0;

  while (lWindow < s.length && rWindow < s.length) {
    if (!charsSeen.has(s[rWindow])) {
      charsSeen.add(s[rWindow++]);
      longestLength = Math.max(longestLength, rWindow - lWindow);
    } else {
      charsSeen.delete(s[lWindow++]);
    }
  }

  return longestLength;
};

// O(n) space - could add all chars of s in set
// O(n) time - could iterate through all chars in s at most twice

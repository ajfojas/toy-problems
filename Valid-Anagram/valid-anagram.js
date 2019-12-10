/*
Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true

Example 2:

Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?
*/

var isAnagram = function(s, t) {
  // Anagrams have the same amount of letters
  // Iterate through s
    // Store char counts of s in obj
  // Iterate through t
    // If char exists in s obj, decrement counter
      // If counter < 0, return false
    // Else, return false
  // Return true

  if (s.length !== t.length) return false;

  let sCharCount = {};

  for (let i = 0; i < s.length; i++) {
    sCharCount[s[i]] = sCharCount[s[i]] ? sCharCount[s[i]] + 1 : 1;
  }

  for (let i = 0; i < t.length; i++) {
    if (sCharCount[t[i]]) {
      sCharCount[t[i]]--;
      if (sCharCount[t[i]] < 0) return false;
    } else {
      return false;
    }
  }

  return true;
};

// O(n) space - at most, store each char of first input in object
// O(n + m) time - at most, iterate through both inputs once separately

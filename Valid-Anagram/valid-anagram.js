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
  // Store char counts of s & t in objs
  // Compare if stringified objs look the same
  // Return true or false

  let sCharCount = {};
  let tCharCount = {};

  for (let i = 0; i < s.length; i++) {
    sCharCount[s[i]] = sCharCount[s[i]] ? sCharCount[s[i]] + 1 : 1;
  }

  for (let i = 0; i < t.length; i++) {
    tCharCount[t[i]] = tCharCount[t[i]] ? tCharCount[t[i]] + 1 : 1;
  }

  sCharCount = Object.entries(sCharCount).sort();
  tCharCount = Object.entries(tCharCount).sort();

  return JSON.stringify(sCharCount) === JSON.stringify(tCharCount);
};

// O(n + m) space - at most, store each char of both inputs in objects
// O(n + m) time - at most, iterate through both inputs 3x separately

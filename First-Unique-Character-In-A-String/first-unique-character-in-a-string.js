/*
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.
*/

var firstUniqChar = function(s) {
  // Have a obj that stores char/index as key and count as value
  // Iterate through s and store char/count in obj
  // Iterate through s again and return index of 1st non-repeating char
  // If it doesn't exist, return -1

  let charCounts = {};

  for (let i = 0; i < s.length; i++) {
    charCounts[s[i]] = charCounts[s[i]] ? charCounts[s[i]] + 1 : 1;
  }

  for (let i = 0; i < s.length; i++) {
    if (charCounts[s[i]] === 1) return i;
  }

  return -1;
};

// O(n) space - at most, store each element in obj
// O(n) time - at most, iterate through input string twice separately

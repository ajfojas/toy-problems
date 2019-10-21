/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.
*/

var longestCommonPrefix = function(strs) {
  // If input array is empty, return ""
  // Create a storage string
  // Iterate through the length of the 1st string (length doesn't matter because the common prefix can only be as long as the shortest string)
  // For each string, check if the 1st char is the same as the 1st string's 1st char
  // If all strings share the common char, add the char to the storage string
  // Repeat until there is no common char
  // Return storage string

  if (strs.length === 0) {
    return '';
  }

  let commonPrefix = '';
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 0; j < strs.length; j++) {
      if (strs[0][i] !== strs[j][i]) {
        return commonPrefix;
      }
    }
    commonPrefix += strs[0][i];
  }

  return commonPrefix;
};

// O(n) space
// O(n*m) time, where n is the # strings and m is the length of each string

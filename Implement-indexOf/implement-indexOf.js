/*
Implement indexOf().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2

Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1
Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().
*/

var strStr = function(haystack, needle) {
  // Keep track of target index
  // Iterate through haystack
    // Set needleIdx to 0
    // If haystack[element] === needle[needleIdx]
      // Set target index to current iteration
      // Set haystackIdx to current iteration
      // While haystackIdx < haystack.length && needleIdx < needle.length
        // Increment haystackIdx++
        // Increment needleIdx++
        // If haystack[haystackIdx] !== needle[needleIdx], break
        // If needleIdx === needle.length - 1, return target index
  // Return -1

  if (needle.length === 0) return 0;

  let targetIdx;
  
  for (let i = 0; i < haystack.length; i++) {
    let needleIdx = 0;

    if (haystack[i] === needle[needleIdx]) {
      targetIdx = i;
      haystackIdx = i;

      while (haystackIdx < haystack.length && needleIdx < needle.length) {
        if (haystack[haystackIdx] !== needle[needleIdx]) break;
        if (needleIdx === needle.length - 1) return targetIdx;
        haystackIdx++;
        needleIdx++;
      }
    }
  }

  return -1;
};

// O(1) space - no additional dynamic space is used
// O(n) time - at most, iterate through haystack once

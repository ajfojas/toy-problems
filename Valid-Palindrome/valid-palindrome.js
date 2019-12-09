/*
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true

Example 2:

Input: "race a car"
Output: false
*/

var isPalindrome = function(s) {
  // Handle empty string being valid palindrome
  // Remove nonalphanumeric characters from s and split it
  // Have L pointer and R pointer
  // While L < R
    // Compare L and R
    // Return false if not the same
  // Return true if while-loop completes

  if (s.length === 0) return true;

  s = s.split(/[.,;:@#$%^&*?!'"`\(\)\/ -]/).join('').split('');
  let L = 0;
  let R = s.length - 1;

  while (L < R) {
    if (s[L].toLowerCase() !== s[R].toLowerCase()) return false;
    L++;
    R--;
  }

  return true;
};

// O(1) space - no additional dynamic space is used
// O(n) time - at most, iterate through input 4x separately

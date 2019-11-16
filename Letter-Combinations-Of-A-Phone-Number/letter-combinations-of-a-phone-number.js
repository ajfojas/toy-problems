/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

1: ---  2: abc  3: def
4: ghi  5: jkl  6: mno
7: pqrs 8: tuv  9: wxyz
   ***  0: ---     ###

Example:

Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
Note:

Although the above answer is in lexicographical order, your answer could be in any order you want.
*/

var letterCombinations = function(digits) {
  // Have an object of digits to letters
  // Have an output arr
  // Have a recursive function that takes in an empty string and index of digits parameter
    // Iterate through digit's letters
      // If currently built string length === digits.length, push it to output arr, return
      // Call recursive function with each letter added to currently built string and incremented index
  // Return output
};

// O() space - 
// O() time - 

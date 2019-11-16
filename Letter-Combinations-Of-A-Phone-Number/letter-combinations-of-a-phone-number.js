/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

1: ---  2: abc  3: def
4: ghi  5: jkl  6: mno
7: pqrs 8: tuv  9: wxyz
_: ***  0: ---  _: ###

Example:
Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

Note:
Although the above answer is in lexicographical order, your answer could be in any order you want.
*/

var letterCombinations = function(digits) {
  // Have an output arr
  // Have an object of digits to letters
  // Have a recursive function that takes in an empty string and index of digits parameter
    // If currently built string length === digits.length, push it to output arr, return
    // Iterate through digit's letters
      // Call recursive function with each letter added to currently built string and incremented index
  // Return output
  
  let output = [];

  if (digits.length === 0) {
    return output;
  }

  let digitsToLetters = {
    0: '',
    1: '',
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  };

  let recurse = (string, idx) => {
    if (string.length === digits.length) {
      output.push(string);
      return;
    }

    let digit = digits[idx];
    for (let i = 0; i < digitsToLetters[digit].length; i++) {
      recurse(string + digitsToLetters[digit][i], idx + 1);
    }
  };
  recurse('', 0);

  return output;
};

// O(3^n * 4^m) space - must keep 3^n * 4^m solutions
// O(3^n * 4^m) time - n is the #digits in the input that map to 3 letters (2, 3, 4, 5, 6, 8) and m is the #digits in the input that map to 4 letters (7, 9), and n+m is the total #digits in the input

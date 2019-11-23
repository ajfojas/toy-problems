/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
*/

var generateParenthesis = function(n) {
  // Store all answers in a results arr
  // Have a recursive decision tree that intakes a str and balance count
    // Iterate through '()'
      // If str.length === 2n && balance count === 0, push str into arr, return
      // If str.length === 2n && balance count !== 0, return
      // Call recursive func on (str + iteration[i], i === 0 ? count+1 : count-1)
  // Kick off recursive func w/ ''
  // Return results arr
};

// O() space - 
// O() time - 

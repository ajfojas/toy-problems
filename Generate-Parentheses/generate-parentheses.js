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
      // If balance count < 0 || str.length === 2n && balance count !== 0, return
      // Call recursive func on (str + iteration[i], i === 0 ? count+1 : count-1)
  // Kick off recursive func w/ ''
  // Return results arr

  let results = [];
  let options = '()'
  let recurse = (str, balance) => {
    for (let i = 0; i < options.length; i++) {
      if (str.length === 2*n && balance === 0) {
        results.push(str);
        return;
      } else if (balance < 0 || str.length === 2*n && balance !== 0) {
        return;
      }

      recurse(str + options[i], i === 0 ? balance + 1 : balance - 1);
    }
  };
  recurse('', 0);

  return results;
};

// O(n) space - at most, the call stack will be 2n tall
// O(2^n) time - there are only 2 options ['(' and ')'] and each path goes down 2n times

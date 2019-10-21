/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:
Input: "()"
Output: true

Example 2:
Input: "()[]{}"
Output: true

Example 3:
Input: "(]"
Output: false

Example 4:
Input: "([)]"
Output: false

Example 5:
Input: "{[]}"
Output: true
*/

var isValid = function(s) {
  // Create a stack of open parentheses
  // Iterate through input
  // Push open parentheses into stack
  // Pop closed parentheses off stack only if it matches the complement of the top of the stack
    // Else return false
  // If able to iterate though the input and stack is empty, return true

  let openParenthesesStack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      openParenthesesStack.push(s[i]);
    } else {
      if (s[i] === ')') {
        if (openParenthesesStack[openParenthesesStack.length - 1] === '(') {
          openParenthesesStack.pop();
        } else {
          return false;
        }
      }
      else if (s[i] === ']') {
        if (openParenthesesStack[openParenthesesStack.length - 1] === '[') {
          openParenthesesStack.pop();
        } else {
          return false;
        }
      }
      else if (s[i] === '}') {
        if (openParenthesesStack[openParenthesesStack.length - 1] === '{') {
          openParenthesesStack.pop();
        } else {
          return false;
        }
      }
    }
  }
  if (openParenthesesStack.length === 0) {
    return true;
  } else {
    return false;
  }
};

// O(n) space
// O(n) time

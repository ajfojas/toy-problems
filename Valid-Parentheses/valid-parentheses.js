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
  // Keep track of round(), square[], and curly{} bracket numbers
  // Increment respective counts when open brackets are encountered
  // Decrement respective counts when close brackets are encountered
  // If any count drops below 0, return false
  // If able to iterate through the input and all counts are 0, return true

  let round = 0;
  let square = 0;
  let curly = 0;
  let open;
  let close = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      round++;
      open = s[i];
      close.push(')');
    } else if (s[i] === ')') {
      if (s[i] !== close[close.length - 1]) {
        return false;
      }
      close.pop();
      round--;
    }

    else if (s[i] === '[') {
      square++;
      open = s[i];
      close.push(']');
    } else if (s[i] === ']') {
      if (s[i] !== close[close.length - 1]) {
        return false;
      }
      close.pop();
      square--;
    }

    else if (s[i] === '{') {
      curly++;
      open = s[i];
      close.push('}');
    } else if (s[i] === '}') {
      if (s[i] !== close[close.length - 1]) {
        return false;
      }
      close.pop();
      curly--;
    }

    if (round < 0 || square < 0 || curly < 0) {
      return false;
    }
  }
  if (round === 0 && square === 0 && curly === 0) {
    return true;
  } else {
    return false;
  }
};

// O(1) space
// O(n) time

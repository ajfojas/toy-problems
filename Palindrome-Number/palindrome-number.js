/*
Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example 1:

Input: 121
Output: true
Example 2:

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
Follow up:

Coud you solve it without converting the integer to a string?
*/

var isPalindrome = function(x) {
// Without converting to a string
  // If x is (-), return false
  // Create a storage array
  // Repeat until x === 0
    // Mod x by 10
    // Push value into array
    // Divide x by 10
  // Have a pointer start at the beginning of the array
  // Have a pointer start at the end of the array
  // While start pointer index !== end pointer index
    // If start pointer === end pointer, return true
    // Else move both pointers 1 index towards the middle
  // Return false since no matches found

  if (x < 0) {
    return false;
  }
  if (x === 0) {
    return true;
  }

  let digitStorage = [];
  while (x !== 0) {
    let digit = x % 10;
    digitStorage.push(digit);
    x = Math.floor(x / 10);
  }

  let LpointerIndex = 0;
  let RpointerIndex = digitStorage.length - 1;
  let Lpointer = digitStorage[LpointerIndex];
  let Rpointer = digitStorage[RpointerIndex];
  while (LpointerIndex <= RpointerIndex) {
    if (Lpointer !== Rpointer) {
      return false;
    }
    LpointerIndex++;
    RpointerIndex--;
    Lpointer = digitStorage[LpointerIndex];
    Rpointer = digitStorage[RpointerIndex];
  }
  return true;
};

// O(n) space
// O(n) time

/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);

Example 1:
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"

Example 2:
Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:

P     I    N
A   L S  I G
Y A   H R
P     I
*/

var convert = function(s, numRows) {
  // Create groupings arr of numRows elements filled with empty str
  // Keep track of which idx to put the current char in (int)
  // Keep track of if incrementing or decrementing (bool)
  // Iterate through s
    // Push current char in appropriate index of groupings arr
    // Increment/decrement idx depending on bool
  // return groupings arr.join('')

  if (numRows <= 1) {
    return s;
  }

  let groupings = Array(numRows).fill('');
  let idx = 0;
  let incr = true;

  for (let i = 0; i < s.length; i++) {
    if (idx === groupings.length - 1) {
      incr = false;
    } else if (idx === 0) {
      incr = true;
    }

    groupings[idx] += s[i];

    idx = incr ? idx+1 : idx-1;
  }

  return groupings.join('');
};

// O() space - 
// O() time - 

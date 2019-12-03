/*
Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

A partially filled sudoku can be valid.

The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

Example 1:

Input:
[
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: true
Example 2:

Input:
[
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being 
modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
The given board contain only digits 1-9 and the character '.'.
The given board size is always 9x9.
*/

var isValidSudoku = function(board) {
  // Have a checker func that intakes an arr with length 9
    // Create an empty set
    // For each element
      // If element is ".", continue
      // If element is not in set, add it to set
      // Else if element is already in set, return false
    // Return true
  // Take each row and check it thru the checker func
  // Take each column and check it thru the checker func
  // Take each 3x3 sub-grid and check it thru the checker func
  // If all 3 above func calls return true, return true
  // Else, return false

  // Check each row's validity
  for (let row = 0; row < board.length; row++) {
    if (!valid(board[row])) return false;
  }

  // Check each column's validity
  for (let row = 0; row < board.length; row++) {
    let arr = [];
    for (let col = 0; col < board[row].length; col++) {
      arr.push(board[col][row]);
    }
    if (!valid(arr)) return false;
  }

  // Check each 3x3 sub-grid's validity
  for (let row = 0; row < board.length; row += 3) {
    for (let col = 0; col < board[row].length; col += 3) {
      let row1 = [board[row][col], board[row][col + 1], board[row][col + 2]];
      let row2 = [board[row + 1][col], board[row + 1][col + 1], board[row + 1][col + 2]];
      let row3 = [board[row + 2][col], board[row + 2][col + 1], board[row + 2][col + 2]];
      if (!valid(row1.concat(row2, row3))) return false;
    }
  }

  return true;
};

let valid = (arr) => {
  let set = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ".") continue;
    if (!set.has(arr[i])) {
      set.add(arr[i]);
    } else if (set.has(arr[i])) {
      return false;
    }
  }
  return true;
}

// O(1) space - assuming a board is always 9x9, the same amount of space will always be used
// O(n^3) time - at most, a single check will iterate thru each element on the grid and check each arr of length 9 for validity

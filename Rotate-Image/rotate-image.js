/*
You are given an n x n 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).

Note:

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

Example 1:

Given input matrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

rotate the input matrix in-place such that it becomes:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]

Example 2:

Given input matrix =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
], 

rotate the input matrix in-place such that it becomes:
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]
*/
var rotate = function(matrix) {
  // Rotate layer by layer
    // Iterate through each element of each layer
      // Store top border element in temp variable
      // Put left bordered element in top bordered element
      // Put bottom bordered element in left bordered element
      // Put right bordered element in bottom bordered element
      // Put top bordered element in right bordered element
  // Return matrix

  for (let layer = 0; layer < matrix.length / 2; layer++) {
    for (let idx = layer; idx < matrix[layer].length - 1 - layer; idx++) {
      // Store Top
      let temp = matrix[layer][idx];

      // Top becomes Left
      matrix[layer][idx] = matrix[matrix.length - 1 - idx][layer];

      // Left becomes Bottom
      matrix[matrix.length - 1 - idx][layer] = matrix[matrix.length - 1 - layer][matrix.length - 1 - idx];

      // Bottom becomes Right
      matrix[matrix.length - 1 - layer][matrix.length - 1 - idx] = matrix[idx][matrix.length - 1 - layer];
      
      // Right becomes Temp
      matrix[idx][matrix.length - 1 - layer] = temp;
    }
  }

  return matrix;
};

// O(1) space - rotate in place, no additional dynamic space is used
// O(n^2) time - for every layer, rotate each idx

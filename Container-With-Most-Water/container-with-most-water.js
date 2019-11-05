/*
Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.


10|
9 |
8 |      |                   |
7 |      |                   |       |
6 |      |   |               |       |
5 |      |   |       |       |       |
4 |      |   |       |   |   |       |
3 |      |   |       |   |   |   |   |
2 |      |   |   |   |   |   |   |   |
1 |__|___|___|___|___|___|___|___|___|__
  0  1   2   3   4   5   6   7   8   9
   [ 1 , 8 , 6 , 2 , 5 , 4 , 8 , 3 , 7 ]

The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

Example:
Input: [1,8,6,2,5,4,8,3,7]
Output: 49
*/

var maxArea = function(height) {
  // Keep track of max area called output
  // Have a pointer start at the left of the arr
  // Have a pointer start at the right of the arr
  // While left !== right
    // Determine current area (min(height[left], height[right]) * (right - left))
    // If current area > max area, update output
    // If height[left] < height[right], increment left++
    // Else, decrement right--
  // Return max area output

  let output = 0;
  let left = 0;
  let right = height.length - 1;

  while (left !== right) {
    output = Math.max(output, Math.min(height[left], height[right]) * (right - left));
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return output;
};

// O(1) space - no additional dynamic space used
// O(n) time - iterate through the heights array only once

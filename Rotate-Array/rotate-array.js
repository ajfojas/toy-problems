/*
Given an array, rotate the array to the right by k steps, where k is non-negative.

Example 1:

Input: [1,2,3,4,5,6,7] and k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Example 2:

Input: [-1,-100,3,99] and k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
Note:

Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
Could you do it in-place with O(1) extra space?
*/

var rotate = function(nums, k) {
  // Mod k by nums.length to get min # rotations
  // Reverse the input arr
  // Reverse start to k - 1
  // Reverse k to end

  k = k % nums.length;
  reverse(0, nums.length - 1, nums);
  reverse(0, k - 1, nums);
  reverse(k, nums.length - 1, nums);
  return nums;
};

let reverse = (start, end, arr) => {
  while (start <= end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
};

// O(1) space - no additional dynamic space is used
// O(n) time - at most, iterate through the entirety of input arr twice separately

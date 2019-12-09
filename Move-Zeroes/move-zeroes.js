/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/

var moveZeroes = function(nums) {
  // Have one pointer looking for 0s
  // Have one pointer looking for non-0s
  // While zeroPtr !== undefined && nonZeroPtr !== undefined
    // While zeroPtr !== 0, zeroPtr++
    // While nonZeroPtr === 0, nonZeroPtr++
    // Swap elements
  // Return nums

  let zero = 0;
  let nonZero = 1;

  while (zero < nums.length && nonZero < nums.length) {
    while (nums[zero] !== 0 && zero < nonZero) zero++;
    while (nums[nonZero] === 0 && nonZero < nums.length) nonZero++;
    if (zero < nums.length && nonZero < nums.length) swap(zero, nonZero, nums);
    zero++;
    nonZero++;
  }

  return nums;
};

let swap = (idx1, idx2, arr) => {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
};

// O(1) space - no additional dynamic space is used
// O(n) time - at most, iterate through input arr once in total

/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
*/

var maxSubArray = function(nums) {
  // Keep track of current sum, which resets to 0 every time running total < 0
  // Keep track of largest sum
  // Iterate through nums array
    // If current sum + element > 0, add element to current sum
      // If current sum > largest sum, update largest sum
    // Else, reset current sum to 0
  // Return largest sum
};

// O() space
// O() time

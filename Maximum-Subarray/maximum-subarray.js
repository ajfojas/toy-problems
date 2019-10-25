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
  // Keep track of current sum and largest sum
  // Iterate through nums array
    // If current sum + element > element, current sum = current sum + element
    // Else, current sum = element
    // If current sum > largest sum, update largest sum
  // Return largest sum

  let currentSum = nums[0];
  let largestSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    if (currentSum > largestSum) {
      largestSum = currentSum;
    }
  }

  return largestSum;
};

// O() space
// O() time

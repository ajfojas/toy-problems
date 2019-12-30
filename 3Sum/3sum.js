/*
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

Example:

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/

var threeSum = function(nums) {
  // Have a results array
  // Iterate through nums array
    // Do the 2Sum problem with nums.slice(i) and target is nums[i] * -1
    // Create an object to store complements
    // Iterate through nums.slice(i)
      // If complement already exists in object, push([target * -1, complement[nums.slice(i)[j]], j]) into results array
      // Else, complement[target - nums.slice(i)[j]] = nums.slice(i)[j]
  // Return results array
};

// O() space - 
// O() time - 

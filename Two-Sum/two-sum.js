/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

var twoSum = function(nums, target) {
  // Iterate through the nums array and store the complement of each element (key = complement, value = index)
  // If the complement already exists in storage, then you have both of the indices of the values that add up to the target

  let complements = {};

  for (let i = 0; i < nums.length; i++) {
    if (complements[nums[i]] >= 0) {
      return [complements[nums[i]], i];
    }

    complements[target - nums[i]] = i;
  }
  return null;
};

// O(n) space
// O(n) time

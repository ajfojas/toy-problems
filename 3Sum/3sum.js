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
  // Sort nums in ascending order
  // Iterate through nums array, skipping any duplicates, current index is the 1st num
    // 2nd num is index immediately after 1st num
    // 3rd num is last index
    // While 2nd index < 3rd index
      // If sum of 3 nums === 0
       // Push all 3 nums into results array
       // Increment 2nd index++, skipping any duplicates
       // Decrement 3rd index--, skipping any duplicates
    // Else if sum > 0, decrement 3rd index, skipping any duplicates
    // Else, increment 2nd index, skipping any duplicates
  // Return results array

  let results = [];
  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    while (i > 0 && nums[i] === nums[i - 1]) i++;

    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        results.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        while (nums[j] === nums[j - 1]) j++;
        while (nums[k] === nums[k + 1]) k--;
      } else if (sum > 0) {
        k--;
        while (nums[k] === nums[k + 1]) k--;
      } else {
        j++;
        while (nums[j] === nums[j - 1]) j++;
      }
    }
  }

  return results;
};

// O(n) space - results array stores triplets of elements
// O(n^2) time - separate while-loops nested within a for-loop

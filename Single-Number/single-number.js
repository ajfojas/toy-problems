/*
Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1

Example 2:

Input: [4,1,2,1,2]
Output: 4
*/

var singleNumber = function(nums) {
  // Have a set to store elements seen
  // Iterate though nums arr
    // If element is in set, delete it
    // Else, add it
  // Return only element in set

  let set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      set.delete(nums[i]);
    } else {
      set.add(nums[i]);
    }
  }

  return Array.from(set)[0];
};

// O(n) space - at most, add each element to set
// O(n) time - at most, iterate through input arr once

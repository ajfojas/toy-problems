/*
Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

Example 1:

Input: [1,2,3,1]
Output: true

Example 2:

Input: [1,2,3,4]
Output: false

Example 3:

Input: [1,1,1,3,3,4,3,2,4,2]
Output: true
*/

var containsDuplicate = function(nums) {
  // Have an obj to store elements seen
  // Iterate through nums arr
    // If current element is already in obj, return true
    // Else, add current element in obj
  // Return false

  let store = {};

  for (let i = 0; i < nums.length; i++) {
    if (store[nums[i]] !== undefined) {
      return true;
    } else {
      store[nums[i]] = nums[i];
    }
  }

  return false;
};

// O(n) space - at most, store each element in store
// O(n) time - at most, iterate through input arr once

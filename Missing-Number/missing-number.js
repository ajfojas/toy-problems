/*
Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

Example 1:
Input: [3,0,1]
Output: 2

Example 2:
Input: [9,6,4,2,3,5,7,0,1]
Output: 8

Note:
Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?
*/

var missingNumber = function(nums) {
  // I can optimize either for:
  // 1. O(n * log(n)) time and O(1) space by sorting the array first
  // 2. O(n)          time and O(n) space by using a set and deleting entries with values I encounter
  // I think optimizing for time would be better from a UX point of view

  let unseen = new Set();
  for (let number = 0; number <= nums.length; number++) {
    unseen.add(number);
  }
  for (let index = 0; index < nums.length; index++) {
    unseen.delete(nums[index]);
  }
  return unseen.values().next().value;
};

// O(n) space - at most, add each integer up to nums.length to a set
// O(n) time - at most, iterate through nums.length twice separately

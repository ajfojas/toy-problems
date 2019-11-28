/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
*/

var search = function(nums, target) {
  // Have a left and right pointer
  // While left <= right
    // Have/update a mid pointer
    // If nums[mid] === target, return mid
    // If nums[mid] >= nums[left]
      // If target >= nums[left] && target < nums[mid], right = mid - 1
      // Else, left = mid + 1
    // Else
      // If target > nums[mid] && target <= nums[right], left = mid + 1
      // Else, right = mid - 1
  // Return -1

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] >= nums[left]) {
      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
};

// O(1) space - no additional dynamic space is used
// O(log n) time - constantly halving the input arr

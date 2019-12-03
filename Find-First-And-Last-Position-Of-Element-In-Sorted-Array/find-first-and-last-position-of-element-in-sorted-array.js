/*
Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
*/

var searchRange = function(nums, target) {
  // Binary search for starting position
    // Return index if found or -1 if not found
  // Binary search for ending position
    // Return index if found or -1 if not found
  // Return [starting, ending]

  let start = binaryStart(nums, target);
  let end = binaryEnd(nums, target);
  return [start, end];
};

let binaryStart = (arr, target) => {
  let L = 0;
  let R = arr.length - 1;

  while (L <= R) {
    let mid = Math.floor((L + R) / 2);
    if (arr[mid] === target) {
      if (arr[mid - 1] !== target) {
        return mid;
      } else {
        // Start target is further to the left
        R = mid - 1;
      }
    } else if (target > arr[mid]) {
      // Start target is to the right
      L = mid + 1;
    } else {
      // Start target is to the left
      R = mid - 1;
    }
  }

  return -1;
};

let binaryEnd = (arr, target) => {
  let L = 0;
  let R = arr.length - 1;

  while (L <= R) {
    let mid = Math.floor((L + R) / 2);
    if (arr[mid] === target) {
      if (arr[mid + 1] !== target) {
        return mid;
      } else {
        // End target is further to the right
        L = mid + 1;
      }
    } else if (target < arr[mid]) {
      // End target is to the left
      R = mid - 1;
    } else {
      // End target is to the right
      L = mid + 1;
    }
  }

  return -1;
};

// O(1) space - only constant space is used
// O(log(n)) time - at most, do binary search twice separately

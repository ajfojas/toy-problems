/*
Given two arrays, write a function to compute their intersection.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]

Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Note:

Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.
Follow up:

What if the given array is already sorted? How would you optimize your algorithm?
What if nums1's size is small compared to nums2's size? Which algorithm is better?
What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
*/

var intersect = function(nums1, nums2) {
  // Have a results arr
  // Have a map that stores the elements as keys and the counts as values
  // Iterate through smaller arr
    // Add each element to map/update count
  // Iterate though larger arr
    // If element is in map && count > 0, push element into results arr, count--
  // Return results arr

  let results = [];
  let map = new Map();
  let smaller = nums1.length <= nums2.length ? nums1 : nums2;
  let larger = smaller === nums1 ? nums2 : nums1;

  for (let i = 0; i < smaller.length; i++) {
    if (map.has(smaller[i])) {
      map.set(smaller[i], map.get(smaller[i]) + 1);
    } else {
      map.set(smaller[i], 1);
    }
  }

  for (let i = 0; i < larger.length; i++) {
    if (map.has(larger[i]) && map.get(larger[i]) > 0) {
      results.push(larger[i]);
      map.set(larger[i], map.get(larger[i]) - 1);
    }
  }

  return results;
};

// O(n) space - at most, store each element in smaller arr in map and results arr
// O(n + m) time - at most, iterate through both input arrays separately

/*
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:

The number of elements initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
Example:
Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]
*/

var merge = function(nums1, m, nums2, n) {
  // Have one pointer start at the right of nums1
  // Have one pointer start at m
  // Have one pointer start at n
  // While n >= 0
    // If nums2[n] >= nums1[m], swap nums2[n] with nums1[pointer], n--
    // Else, swap nums1[m] with nums1[pointer], m--
    // Pointer--
  // Return nums1
};

// O() space
// O() time

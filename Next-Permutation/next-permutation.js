/*
Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

The replacement must be in-place and use only constant extra memory.

Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.

1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1
*/

var nextPermutation = function(nums) {
  // Iterate through nums
    // If nums[i+1] > nums[i], break
    // If i = nums.length-1, return nums.sort()
  // Find 1st decr element from right to left
  // Find next larger element from current idx to right
  // Swap
  // Reverse subarray from 1st decr element idx to right
  // Return nums
};

// O() space - 
// O() time - 

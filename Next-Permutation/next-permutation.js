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
  // Find 1st decr element from right to left
    // If i === 0, return nums.sort
  // Find next larger element from current idx to right
  // Swap
  // Reverse subarray from 1st decr element idx to right
  // Return nums

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      for (let j = nums.length - 1; j >= i; j--) {
        if (nums[j] > nums[i]) {
          swap(i, j, nums);
          reverse(i + 1, nums.length - 1, nums);
          return nums;
        }
      }
      break;
    }
    if (i === 0) return nums.sort((a,b) => a - b);
  }
};

let swap = (el1, el2, arr) => {
  let temp = arr[el1];
  arr[el1] = arr[el2];
  arr[el2] = temp;
  return arr;
};

let reverse = (i, j, arr) => {
  while (i < j) {
    swap(i, j, arr);
    i++;
    j--;
  }
  return arr;
}

// O(1) space - no additional dynamic space is used
// O(n) time - at most, iterate through input twice

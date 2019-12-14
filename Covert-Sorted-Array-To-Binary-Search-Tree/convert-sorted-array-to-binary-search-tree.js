/*
Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

Example:

Given the sorted array: [-10,-3,0,5,9],

One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5
*/

// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var sortedArrayToBST = function(nums) {
  // Every node comes from the mid of the arr passed in
  // If input is null, return
  // Root is mid of input arr
  // Left is mid of arr.slice(start, mid - 1)
  // Right is mid of arr.slice(mid + 1, end)

  if (nums.length == 0) return null;

  let start = 0;
  let end = nums.length - 1;
  let mid = Math.floor((start + end) / 2);

  let node = new TreeNode(nums[mid]);
  node.left = sortedArrayToBST(nums.slice(0, mid));
  node.right = sortedArrayToBST(nums.slice(mid + 1));

  return node;
};

// O(n) space - n to keep output, log(n) for recursion stack
// O(n) time - visit each node exactly once

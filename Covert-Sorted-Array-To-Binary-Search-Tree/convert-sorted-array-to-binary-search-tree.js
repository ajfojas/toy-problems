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
  // Convert to upside down V shape
  // Floor'd mid element is the root node
  // Elements to the left of mid become left childs
  // Elements to the right of mid become right childs
  // Return root

  if (nums.length === 0) return;

  let l = 0;
  let r = nums.length - 1;
  let mid = Math.floor((l + r ) / 2);
  let root = new TreeNode(nums[mid]);

  let treeTraversal = root;
  l = mid - 1;
  while (nums[l] !== undefined) {
    treeTraversal.left = new TreeNode(nums[l]);
    l--;
    treeTraversal = treeTraversal.left;
  }
  
  treeTraversal = root;
  r = mid + 1;
  while (nums[r] !== undefined) {
    treeTraversal.right = new TreeNode(nums[r]);
    r++;
    treeTraversal = treeTraversal.right;
  }

  return root;
};

// O() space - 
// O() time - 

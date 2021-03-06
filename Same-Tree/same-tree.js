/*
Given two binary trees, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

Example 1:
Input:     1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

Output: true

Example 2:
Input:     1         1
          /           \
         2             2

        [1,2],     [1,null,2]

Output: false

Example 3:
Input:     1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]

Output: false
*/

// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

var isSameTree = function(p, q) {
  // If nodes exist and both node.val are equal, recursively call isSameTree on both left and right nodes
  // Else if both nodes === null, return true
  // Else, return true
  
  if (p === null && q === null) {
    return true;
  } else if (p !== null && q !== null && p.val === q.val) {
    return (isSameTree(p.left, q.left) && isSameTree(p.right, q.right));
  } else {
    return false;
  }
};

// O(n) space, recursion call stack can be at most n
// O(n) time, visiting each node once

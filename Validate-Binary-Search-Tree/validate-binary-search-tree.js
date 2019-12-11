/*
Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.

Example 1:

    2
   / \
  1   3

Input: [2,1,3]
Output: true

Example 2:

    5
   / \
  1   4
     / \
    3   6

Input: [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
*/

// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var isValidBST = function(root) {
  // Have a recursive function that intakes a node, lower limit, and upper limit
    // If root === null, return true
    // If left !== null || left >= root, return false
    // If right !== null || right <= root, return false
    // If (!recurse(left, lower, node.val)) return false
    // If (!recurse(right, node.val, uper)) return false
    // Return true
  // Return recursion on root input, null, and null

  let recurse = (node, lower, upper) => {
    if (node === null) return true;
    if (lower !== null && lower >= node.val) return false;
    if (upper !== null && upper <= node.val) return false;
    return recurse(node.left, lower, node.val) && recurse(node.right, node.val, upper);
  };

  return recurse(root, null, null);
};

// O(n) space - n/2 ~= n recursive calls
// O(n) time - pure tree traversal is n operations

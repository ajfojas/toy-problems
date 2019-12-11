/*
Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]
*/

// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var levelOrder = function(root) {
  // Have a results arr
  // Have a recursive func that intakes a node and a level
    // If node === null, return
    // Add node val to results arr index corresponding to level
    // Recurse on left and right child
  // Kick off recursion with root and 0
  // Return results
};

// O() space - 
// O() time - 

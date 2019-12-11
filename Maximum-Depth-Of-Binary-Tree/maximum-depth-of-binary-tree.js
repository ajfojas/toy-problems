/*
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7

return its depth = 3.
*/

// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var maxDepth = function(root) {
  // Have a max depth tracker
  // Recurse through the entire tree, incrementing the counter on each call
  // Return counter

  let max = 0;

  let dive = (node, depth) => {
    if (node === null) return;
    if (depth > max) max = depth;
    dive(node.left, depth + 1);
    dive(node.right, depth + 1);
  }
  if (root) dive(root, max + 1);

  return max;
};

// O(n) space - n/2 == n recursive calls
// O(n) time - pure tree traversal is n operations

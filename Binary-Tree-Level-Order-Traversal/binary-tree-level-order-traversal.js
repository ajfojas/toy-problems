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
  // Keep track of results
  // Build a queue with all nodes
  // Keep track of levels
  // Keep track of countdown
  // While queue is not empty
    // Create a level arr
    // Countdown = Math.pow(2, level)
    // While countdown > 0
      // countdown--
      // If queue[0] !== null, level.push(queue.shift())
  // Return results
};

// O() space - 
// O() time - 

/*
Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
 

But the following [1,2,2,null,3,null,3] is not:

    1
   / \
  2   2
   \   \
   3    3
 

Note:
Bonus points if you could solve it both recursively and iteratively.
*/

// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var isSymmetric = function(root) {
  // Push all nodes breadth first into an arr
  // For each level, put pointers on the start and end and compare each value while going towards the middle
  // If values are ever not equal, return false
  // Else, return true
};

// O() space - 
// O() time - 

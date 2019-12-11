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

// Recursive
var isSymmetric = function(root) {
  // Mirror image
  // Roots should have same value
  // 1st root's left should equal 2nd root's right and vice versa

  return mirror(root, root);
};

let mirror = (tree1, tree2) => {
  if (tree1 === null && tree2 === null) return true;
  if (tree1 === null || tree2 === null) return false;
  return (tree1.val === tree2.val) && mirror(tree1.left, tree2.right) && mirror(tree1.right, tree2.left);
};

// Iterative
var isSymmetric = function(root) {
  // Have a queue
  // Add root twice
  // While queue is not empty
    // tree1 = queue.shift()
    // tree2 = queue.shift()
    // If tree1 === null && tree2 === null, continue
    // If tree1 === null || tree2 === null, return false
    // If tree1.val !== tree2.val, return false
    // Add tree1.left to queue
    // Add tree2.right to queue
    // Add tree1.right to queue
    // Add tree2.left to queue
  // Return true
};

// O(n) space - n/2 call stacks ~= n call stacks
// O(n) time - pure tree traversal is O(n)

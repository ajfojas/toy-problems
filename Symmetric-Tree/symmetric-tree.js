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

// O(n) space - n/2 call stacks ~= n call stacks
// O(n) time - pure tree traversal is O(n)

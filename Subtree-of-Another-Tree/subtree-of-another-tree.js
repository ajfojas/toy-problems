/*
Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.

Example 1:
Given tree s:

     3
    / \
   4   5
  / \
 1   2

Given tree t:
   4 
  / \
 1   2

Return true, because t has the same structure and node values with a subtree of s.

Example 2:
Given tree s:

     3
    / \
   4   5
  / \
 1   2
    /
   0

Given tree t:
   4
  / \
 1   2

Return false.
*/

// Definition for a binary tree node
let TreeNode = (val, left, right) => {
  this.val = val;
  this.left = left;
  this.right = right;
}

var isSubtree = function(s, t) {
  // Build a string of all nodes in tree s
  // Build a string of all nodes in tree t
  // Determine if tree t is a substring of tree s

  let buildStr = (node) => {
    if (node === null) {
      return 'null';
    } else {
      return '#' + node.val + ' ' + buildStr(node.left) + ' ' + buildStr(node.right);
    }
  };

  let strS = buildStr(s);
  let strT = buildStr(t);

  return strS.indexOf(strT) >= 0;
};

// O(n) space
// O(n^2 + m^2 + n*m) time

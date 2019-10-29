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
  // Do breadth-first search in s for a node value that equals t node value
  // Do depth-first search in both s and t to check for equality
  // Return true if all nodes have equal values
  // Return false if not

  let output = false;
  
  let queue = [];
  queue.push(s);

  let DFaccess = true;
  let DFrecurse = (node1, node2) => {
    if (node1 === null && node2 === null) {
      return;
    }
    if (DFaccess) {
      if (node1 === null || node2 === null) {
        output = false;
        DFaccess = false;
        return;
      }
      if (node1.val === node2.val) {
        output = true;
      } else {
        output = false;
        DFaccess = false;
        return;
      }
      DFrecurse(node1.left, node2.left);
      DFrecurse(node1.right, node2.right);
    }
  }

  let BFrecurse = (node) => {
    if (node) {
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }

    let workingNode = queue.shift();
    if (workingNode && workingNode.val === t.val) {
      DFaccess = true;
      DFrecurse(workingNode, t);
    }

    if (output === false) {
      BFrecurse(queue[0]);
    }
  };
  
  BFrecurse(queue[0]);

  return output;
};

// O() space
// O() time

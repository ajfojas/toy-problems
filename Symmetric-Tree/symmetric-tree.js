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

  let bfNodes = bfTraverse(root);

  let level = 0
  let L = 0;
  let Lmove = 0;
  while (Lmove < bfNodes.length) {
    let R = Lmove + Math.pow(2, level) - 1;
    let Rmove = Lmove + Math.pow(2, level) - 1;
    if ((R - L + 1) % 2 !== 0 && L !== 0) return false;
    while (Lmove < Rmove) {
      if (bfNodes[Lmove] === null && bfNodes[Rmove] !== null || bfNodes[Lmove] !== null && bfNodes[Rmove] === null || bfNodes[Lmove] !== null && bfNodes[Rmove] !== null && bfNodes[Lmove].val !== bfNodes[Rmove].val) return false;
      Lmove++;
      Rmove--;
    }
    level++;
    L = R + 1;
    Lmove = R + 1;
  }
  return true;
};

let bfTraverse = root => {
  let queue = [root];
  let bfNodes = [root];
  while (queue.length > 0) {
    let node = queue.shift();
    if (node) {
      queue.push(node.left);
      bfNodes.push(node.left);
      queue.push(node.right);
      bfNodes.push(node.right);
    }
  }
  return bfNodes;
};

// O() space - 
// O() time - 

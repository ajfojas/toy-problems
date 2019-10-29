/*
Given a sorted linked list, delete all duplicates such that each element appear only once.

Example 1:
Input: 1->1->2
Output: 1->2

Example 2:
Input: 1->1->2->3->3
Output: 1->2->3
*/

//Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

var deleteDuplicates = function(head) {
  // Keep track of current node
  // While current node and next node !== null
    // If next node's value === current node's value, next node === next node.next
    // Else current node = next node
  // Return head

  let currentNode = head;

  while (currentNode !== null && currentNode.next !== null) {
    if (currentNode.next.val === currentNode.val) {
      currentNode.next = currentNode.next.next;
    } else {
      currentNode = currentNode.next;
    }
  }

  return head;
};

// O(n) space
// O(1) time

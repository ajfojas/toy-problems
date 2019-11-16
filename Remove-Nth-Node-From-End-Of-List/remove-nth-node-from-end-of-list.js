/*
Given a linked list, remove the n-th node from the end of list and return its head.

Example:

Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:

Given n will always be valid.

Follow up:

Could you do this in one pass?
*/

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var removeNthFromEnd = function(head, n) {
  // Iterate through LL to count #nodes
  // Subtract n from count called countdown
  // While countdown > 0, traverse LL
    // If countdown === 1, move node.next to node.next.next, set node.next.next to null
    // Decrement countdown--
  // Return head
};

// O() space - 
// O() time - 

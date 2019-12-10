/*
Reverse a singly linked list.

Example:
Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL

Follow up:
A linked list can be reversed either iteratively or recursively. Could you implement both?
*/

// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

var reverseList = function(head) {
// Iterative:
  // Set A ptr to null
  // Head is already set to 1st node
  // Set B ptr to head.next
  // While B !== null
    // Set head.next to A ptr
    // Set A ptr to head
    // Set head to B ptr
    // Set B ptr to B.next
  // Return head
};

// O() space - 
// O() time - 

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
  // Set prev ptr to null
  // While head !== null
    // Set next ptr to head.next
    // Set head.next to prev ptr
    // Set prev ptr to head
    // Set head to next ptr
  // Return prev
  
  let prev = null;
  while (head !== null) {
    let next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
};

// O(1) space - no additional dynamic space is used
// O(n) time - at most, iterate through the entire LL

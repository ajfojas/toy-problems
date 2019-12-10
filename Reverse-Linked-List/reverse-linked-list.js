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

var reverseList = function(head) {
// Recursive:
  // Return me a reversed list
  // I'll add myself
  // I'll return the head you gave me
  
  if (head === null || head.next === null) return head;

  let prev = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return prev;
};

// Iterative O(1) space - no additional dynamic space is used
// Recursive O(n) space - call stack will be the same size as LL
// O(n) time - at most, iterate through the entire LL

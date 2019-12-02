/*
Given a linked list, swap every two adjacent nodes and return its head.

You may not modify the values in the list's nodes, only nodes itself may be changed. 

Example:

Given 1->2->3->4, you should return the list as 2->1->4->3.
*/

// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

var swapPairs = function(head) {
  // If !head.next, return head
  // Create a dummy node before head node
  // Have A ptr @ dummy node
  // Have B ptr @ dummy node.next
  // Have C ptr @ dummy node.next.next
  // While C.next && C.next.next
    // A.next = C
    // B.next = C.next
    // C.next = B
    // A = A.next.next
    // B = B.next
    // C = C.next.next.next
  // Return dummy node.next

  if (!head || !head.next) return head;

  let dummy = new ListNode('dummy');
  dummy.next = head;
  let Aptr = dummy;
  let Bptr = dummy.next;
  let Cptr = dummy.next.next;

  while (true) {
    Aptr.next = Cptr;
    Bptr.next = Cptr.next;
    Cptr.next = Bptr;
    if (!Bptr.next || !Bptr.next.next) break;
    Aptr = Aptr.next.next;
    Bptr = Bptr.next;
    Cptr = Cptr.next.next.next;
  }

  return dummy.next;
};

// O(1) space - only constant space is used
// O(n) time - at most, iterate through the LL once

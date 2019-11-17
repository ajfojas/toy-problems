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
  // Create a dummy node before the head of the LL
  // Have 2 pointers, 1st starting at the beginning and the 2nd starting at n nodes ahead
  // While 2nd pointer !== null
    // Move both pointers to node.next
  // 1st pointer.next = 1st pointer.next.next
  // Return dummy.next

  let dummy = new ListNode(0);
  dummy.next = head;
  let firstPointer = dummy;
  let secondPointer = dummy;
  for (let i = 0; i <= n; i++) {
    secondPointer = secondPointer.next;
  }
  while (secondPointer !== null) {
    firstPointer = firstPointer.next;
    secondPointer = secondPointer.next;
  }
  firstPointer.next = firstPointer.next.next;
  return dummy.next;
};

// O(1) space - no additional dynamic space is used
// O(n) time - at most, iterate through LL once

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
  // Subtract n from count
  // While count > 0, traverse LL
    // If count === 1, move node.next to node.next.next, set node.next.next to null
    // Decrement count--
  // Return head

  if (head === null) {
    return head;
  }

  let traverse = head;
  let count = 0;
  while (traverse !== null) {
    count++;
    traverse = traverse.next;
  }
  count -= n;
  traverse = head;
  traverseNext = head.next;
  if (count === 0) {
    head = head.next;
  }
  while (count > 0) {
    if (count === 1) {
      traverse.next = traverseNext.next;
      traverseNext.next = null;
    }
    traverse = traverse.next;
    traverseNext = traverseNext.next;
    count--;
  }
  return head;
};

// O(1) space - no additional dynamic space is used
// O(n) time - at most, iterate through LL twice

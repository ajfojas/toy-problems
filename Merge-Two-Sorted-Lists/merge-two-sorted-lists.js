/*
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
*/

var mergeTwoLists = function(l1, l2) {

  let head = {
    val: null,
    next: null
  };

  let anchor = head;

  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      anchor.next = l1;
      l1 = l1.next;
    } else {
      anchor.next = l2;
      l2 = l2.next;
    }
    anchor = anchor.next;
  }

  anchor.next = l1 === null ? l2 : l1;

  return head.next;
};

// O(1) space
// O(n + m) time

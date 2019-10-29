/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/

// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

var addTwoNumbers = function(l1, l2) {
  // Use l1 and l2 to traverse their respective lists
  // Keep track of carryover, initialized to false
  // Keep track of current new node
  // Create new list head from l1 and l2 heads
  // Move l1 and l2 to their next nodes
  // While l1 !== null || l2 !== null
    // Sum both elements
    // Add carryover if needed, carryover = false
    // If sum >= 10, subtract sum by 10, carryover = true
    // Create a new node with sum as value property
    // Current new node.next = newly made node
    // Current node = current node.next
  // Return head of new list

  let carryover = false;

  let l3Head = new ListNode('head');
  let l3 = l3Head;

  while (l1 !== null || l2 !== null || carryover) {
    let sum = 0;
    if (l1) {
      sum += l1.val;
    }
    if (l2) {
      sum += l2.val;
    }

    if (carryover) {
      sum++;
      carryover = false;
    }

    if (sum >= 10) {
      sum -= 10;
      carryover = true;
    }

    let newNode = new ListNode(sum);
    l3.next = newNode;
    l3 = l3.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  return l3Head.next;
};

// O(n) space
// O(n) time

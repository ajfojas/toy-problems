/*
Given a singly linked list, determine if it is a palindrome.

Example 1:

Input: 1->2
Output: false
Example 2:

Input: 1->2->2->1
Output: true
Follow up:
Could you do it in O(n) time and O(1) space?
*/

// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

var isPalindrome = function(head) {
  // Edge case of empty input
  if (head === null || head.next === null) return true;
  
  // 1. Find the end of the 1st half
  let mid = head;
  let fast = head;
  while (fast.next !== null && fast.next.next !== null) {
    mid = mid.next;
    fast = fast.next.next;
  }
  
  // 2. Reverse the 2nd half
  reverse(mid);
  
  // 3. Determine whether or not there is a palindrome
  let palindrome = true;
  let firstHalf = head;
  let secondHalf = mid.next;
  while (secondHalf !== null) {
    if (firstHalf.val !== secondHalf.val) {
      palindrome = false;
      break;
    }
    firstHalf = firstHalf.next;
    secondHalf = secondHalf.next;
  }
  
  // 4. Restore the list
  reverse(mid);
  
  // 5. Return the result
  return palindrome;
};

let reverse = mid => {
  let prev = null;
  let curr = mid.next;
  while (curr !== null) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  mid.next = prev;
}

// O(1) space - no additional dynamic space is used
// O(n) time - at most, iterate through the LL 4x separately

/*
A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

Return a deep copy of the list.

Example 1:
Input:
{"$id":"1","next":{"$id":"2","next":null,"random":{"$ref":"2"},"val":2},"random":{"$ref":"2"},"val":1}

Explanation:
Node 1's value is 1, both of its next and random pointer points to Node 2.
Node 2's value is 2, its next pointer points to null and its random pointer points to itself.
*/

// Definition for a Node
let Node = (val, next, random) => {
  this.val = val;
  this.next = next;
  this.random = random;
};

var copyRandomList = function(head) {
  // Iterate over the given list, creating new nodes via the random pointer or the next pointer
  // Keep track of which nodes we've visited by storing them in a map
  // Only create new nodes that do not yet exist in the store
  // Return head of new list
};

// O() space
// O() time

/*
Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.
*/

var groupAnagrams = function(strs) {
  // Two strings are anagrams if and only if their sorted strings are equal
  // Create a map where key = sorted str & val = strings from input

  let map = new Map();
  strs.forEach(str => {
    let sortedStr = str.split('').sort().join('');
    let group = map.get(sortedStr) || [];
    group.push(str);
    map.set(sortedStr, group)
  });
  return Array.from(map.values());
};

// O(n*k) space - where n is the length of the input array and k is the max length of a string in the input array
// O(n*k(log(k))) time - for each string in input array, we sort it in k*log(k) time

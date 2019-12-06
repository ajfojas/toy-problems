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
  // Have a results arr
  // Have a set for anagrams seen
  // Iterate through strs arr
    // Have an anagrams arr
    // If element is not in set
      // Find all anagrams of element
        // If an anagram is included in strs, push it to anagrams arr, add it to set, return 
    // Push anagrams arr to results arr
  // Return results arr

  let results = [];
  let set = new Set();

  let anagrams = [];
  let findAnagrams = (str, options, ans) => {
    if (ans.length === str.length) {
      if (strs.includes(ans)) {
        for (let i = 0; i < strs.length; i++) {
          if (strs[i] === ans && !set.has(strs[i])) anagrams.push(ans);
        }
        set.add(ans);
      }
      return;
    }
    for (let i = 0; i < options.length; i++) {
      findAnagrams(str, options.slice(0, i).concat(options.slice(i + 1)), ans + options[i]);
    }
  };

  for (let i = 0; i < strs.length; i++) {
    anagrams = [];
    if (!set.has(strs[i])) {
      findAnagrams(strs[i], strs[i], '');
    }
    if (anagrams.length > 0) results.push(anagrams);
  }

  return results;
};

// O() space - 
// O() time - 

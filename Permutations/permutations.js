/*
Given a collection of distinct integers, return all possible permutations.

Example:

Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
*/

var permute = function(nums) {
  // Have a results arr that stores answers
  // Create a recursive func that intakes an arr of options and a developing answer
    // If ans.length === nums.length, push ans into results arr, return
    // For each option
      // Add that option to the developing ans
      // Recurse with options.slice(0, i).concat(options(i+1)) and developing ans
  // Kick off recursion with nums arr and empty arr
  // Return results arr
};

// O() space - 
// O() time - 

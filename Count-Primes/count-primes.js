/*
Count the number of prime numbers less than a non-negative number, n.

Example:

Input: 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
*/

var countPrimes = function(n) {
  // Create an array of size n
  // Iterate through array, starting at index 2, ending at sqrt(n)
    // If array[i] !== true, iterate through all multiples of i
      // Set array[i * j] to true
  // Count and return all primes

  let nonPrimes = Array(n);
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (nonPrimes[i] !== true) {
      for (let j = i; j * i < n; j++) {
        nonPrimes[i * j] = true;
      }
    }
  }

  let primesCount = 0;
  for (let i = 2; i < n; i++) {
    if (nonPrimes[i] !== true) primesCount++;
  }

  return primesCount;
};

// O(n) space - create an array of size n
// O(n * log(log(n))) time - the first for-loop is the dominant term with a nested for-loop

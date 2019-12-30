/*
Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

Example:

n = 15,

Return:
[
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
]
*/

var fizzBuzz = function(n) {
  // Create output array
  // Iterate from 1 to n inclusive
    // For multiples of 3 && 5, push 'FizzBuzz'
    // For multiples of 3, push 'Fizz'
    // For multiples of 5, push 'Buzz'
    // For everything else, push the current iteration value
  // Return output

  let output = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      output.push('FizzBuzz');
    } else if (i % 3 === 0) {
      output.push('Fizz');
    } else if (i % 5 === 0) {
      output.push('Buzz');
    } else {
      output.push(String(i));
    }
  }
  return output;
};

// O(n) space - an element will be pushed into the output array
// O(n) time - at most, iterate n times

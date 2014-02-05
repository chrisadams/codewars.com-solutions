/* 

This is the solution I came up with for the kata 'Array diff':
http://www.codewars.com/dojo/katas/523f5d21c841566fde000009

Description:

Your goal in this kata is to implement an array_diff function,
which subtracts one array from another.

It should remove all values from array a, which are present in array b.

array_diff([1,2], [1]) // [2]
If a value is present in array b, all of its occurrences must be removed from array a.

array_diff([1,2,2], [2]) // [1]

*/

function array_diff(a, b) {
  return a.filter(function(elem) {
    return (b.indexOf(elem) == -1) ? true : false;
  });
}
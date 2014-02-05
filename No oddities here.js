/* 

This is the solution I came up with for the kata 'No oddities here':
http://www.codewars.com/dojo/katas/51fd6bc82bc150b28e0000ce

Description:

Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.

function noOdds( values )

*/

function noOdds( values ){
  return values.filter(function(num) { if (num % 2 == 0) return true; else return false; });
}
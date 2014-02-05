/* 

This is the solution I came up with for the kata 'Reverse words':
http://www.codewars.com/dojo/katas/5259b20d6021e9e14c0010d4

Description:

Write a reverseWords function that accepts a string a parameter,
and reverses each word in the string.

Example:

reverseWords("This is an example!"); // returns  "sihT si na !elpmaxe"

*/

function reverseWords(str) {
  return str.split(' ').map(function(word) {
    return word.split('').reverse().join('');
  }).join(" ");
}
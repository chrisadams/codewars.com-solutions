/* 

This is the solution I came up with for the kata 'Search in multidimensional array':
http://www.codewars.com/dojo/katas/52840d2b27e9c932ff0016ae

Description:

Write a function named "locate" that gets an array and value and returns true if specified value exist in a multidimentional array.

Example:

locate(['a','b',['c','d',['e']]],'e'); // should return true
locate(['a','b',['c','d',['e']]],'a'); // should return true
locate(['a','b',['c','d',['e']]],'f'); // should return false

*/

var locate = function (arr, value) {
  var result = false;
  arr.forEach( function(elem) {
    if (elem === value) {
      result = true;
    }
    else if (typeof elem == 'object') {
      result = (locate(elem,value) || result);
    }
  });
  return result;
};

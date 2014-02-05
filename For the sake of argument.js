/* Description:

Write a function named numbers that returns true if all the parameters it is passed are numbers. Otherwise, the function should return false. The function should accept any number of parameters.

Example usage:

numbers(1, 4, 3, 2, 5); // true
numbers(1, "a", 3); // false

*/

function numbers() {
  var args = Array.prototype.slice.call(arguments);
  return args.reduce(function(stillTrue, elem) {
    return stillTrue && ((parseFloat(elem) && isFinite(elem)) || isNaN(elem)) && (typeof elem != "string");
  }, true);
};
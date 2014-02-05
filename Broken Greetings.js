/* 

This is the solution I came up with for the kata 'Broken Greetings':
http://www.codewars.com/dojo/katas/50654ddff44f800200000001

Description:

Correct this code, so that the greet function returns the expected value.

*/

function Person(name){
  this.name = name;
}

Person.prototype.greet = function(otherName){
  return "Hi " + otherName + ", my name is " + this.name;
}
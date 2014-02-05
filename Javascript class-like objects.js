/*

This is the solution I came up with for the kata 'Javascript class-like objects':
http://www.codewars.com/dojo/katas/513e1e47c600c93cef000001/

Description:

For this exercise you should create a JavaScript class like object called "Animal" that takes in "name" and "type" arguments. It should have a toString method that returns a human readable string indicating the argument information passed in.

The following is an example of how the final code would be used and what the expected return values should be:

var dog = new Animal('Max', 'dog');
dog.toString(); // should return 'Max is a dog'
dog.type; // should == 'dog'
dog.name; // should == 'Max'

*/

function Animal(name, type) {
  this.name = name;
  this.type = type;
}

Animal.prototype.toString = function() {
  return this.name + " is a " + this.type; 
};
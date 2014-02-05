/* 

This is the solution I came up with for the kata 'Adjacent pairs in a string':
http://www.codewars.com/dojo/katas/5245a9138ca049e9a10007b8

Description:

Supplied with a single string, return the number of all adjacent pairs in that string.

The words within the string are separated by whitespace.

The function should be case-insensitive (i.e., the input string "orange OrAnGe" is a match).

Some example input/output:

//returns 0
countAdjacentPairs('') 

// returns 1
countAdjacentPairs('cat dog dog') 

// returns 1 (The first pair has been matched, and will be ignored from then on).
countAdjacentPairs('dog dog dog') 

// returns 2
countAdjacentPairs('cat cat dog dog cat')

*/

function countAdjacentPairs(searchString) {
  elements = searchString.split(' ');
  numPairs = 0;
  while (elements.length > 1) {
    if (elements[0].toLowerCase() === elements[1].toLowerCase()) {
      numPairs++;
      elements = elements.slice(2);
    }
    else {
      elements = elements.slice(1);
    }
  }
  return numPairs;
}
/* 

This is the solution I came up with for the kata 'Arrays similar':
http://www.codewars.com/dojo/katas/51e704f2d8dbace389000279

Description:

Write a function that determines whether the passed in arrays are similar.
Similar means they contain the same elements, and the same number of
occurrences of elements.

var arr1 = [1, 2, 2, 3, 4],
    arr2 = [2, 1, 2, 4, 3],
    arr3 = [1, 2, 3, 4],
    arr4 = [1, 2, 3, "4"]

arraysSimilar(arr1, arr2); // Should equal true
arraysSimilar(arr2, arr3); // Should equal false
arraysSimilar(arr3, arr4); // Should equal false

*/

function arraysSimilar(arr1, arr2) {
  arr1 = arr1.sort();
  arr2 = arr2.sort();
  var same = true;
  if (arr1.length != arr2.length) {
    same = false;
  }
  arr1.forEach(function(elem,index) {
    if (elem != arr2[index] || typeof elem != typeof arr2[index]) {
      same = false;
    }
  });
  if (same) {
    return true;
  }
  else {
    return false;
  }
}
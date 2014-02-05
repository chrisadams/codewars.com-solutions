/* 

This is the solution I came up with for the kata 'Remove anchor from URL':
http://www.codewars.com/dojo/katas/51f2b4448cadf20ed0000386

Description:

Complete the function/method so that it returns the url with anything after
the anchor (#) removed.

Examples:

// returns 'www.codewars.com'
removeUrlAnchor('www.codewars.com#about')

// returns 'www.codewars.com?page=1' 
removeUrlAnchor('www.codewars.com?page=1')

*/

function removeUrlAnchor(url){
  return url.split('#')[0];
}
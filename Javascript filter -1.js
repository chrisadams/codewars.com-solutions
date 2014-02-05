/* 

This is the solution I came up with for the kata 'Javascript filter -1':
http://www.codewars.com/dojo/katas/525d9b1a037b7a9da7000905

Description:

While developing a website, you detect that some of the members have troubles logging in. Searching through the code you find that all logins ending with a "_" make problems. So you want to write a function that takes an array of pairs of login-names and e-mails, and outputs an array of all login-name, e-mails-pairs from the login-names that end with "_".

If you have the input-array:

[ [ "foo", "foo@foo.com" ], [ "bar_", "bar@bar.com" ] ]
it should output

[ [ "bar_", "bar@bar.com" ] ]
You have to use the filter-method of Javascript, which returns each element of the array for which the filter-method returns true.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

*/

function searchNames( logins ){
  return logins.filter(function(login) { if (login[0].slice(-1) == '_') return true; else return false; });
}
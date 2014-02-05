/* 

This is the solution I came up with for the kata 'Sort arrays - 2':
http://www.codewars.com/dojo/katas/51f41fe7e8f176e70d0002b9

Description:

Simple sort, but this time sort regardless of upper / lower case. So the input of

[ "Hello", "there", "I'm", "fine"]
is translated to

["fine", "Hello", "I'm", "there" ]

*/

sortme = function( names ) {
	return names.sort(function(a, b) {
		if (a.toLowerCase() < b.toLowerCase() ) {
			return -1;
		}
		if (a.toLowerCase() > b.toLowerCase() )
		{
			return 1;
		}
		return 0;
	});
}
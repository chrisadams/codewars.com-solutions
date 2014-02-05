/* 

This is the solution I came up with for the kata 'Return substring instance count':
http://www.codewars.com/dojo/katas/5168b125faced29f66000005

Description:

Complete the solution so that it returns the number of times the search_text is found within the full_text.

Usage example:

solution('aa_bb_cc_dd_bb_e', 'bb') # should return 2 since bb shows up twice
solution('aaabbbcccc', 'bbb') # should return 1

*/

function solution(fullText, searchText){
  if (fullText.split(searchText).length == 0) {
    return 0;
  }
  return fullText.split(searchText).length - 1;  
}
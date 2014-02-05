
# This is the solution I came up with for the kata 'Return substring instance count - 2':
# http://www.codewars.com/dojo/katas/52190daefe9c702a460003dd

# Description:

# Complete the solution so that it returns the number of times the search_text
# is found within the full_text.

# search_substr( fullText, searchText, allowOverlap = true )
# so that overlapping solutions are (not) counted. If the searchText is empty,
# it should return "0". Usage examples:

# search_substr('aa_bb_cc_dd_bb_e', 'bb') # should return 2 since bb shows up twice
# search_substr('aaabbbcccc', 'bbb') # should return 1
# search_substr( 'aaa', 'aa' ) # should return 2
# search_substr( 'aaa', '' ) # should return 0
# search_substr( 'aaa', 'aa', false ) # should return 1

def search_substr( fullText, searchText, allowOverlap = true )
  count = 0
  while (fullText != "" && searchText != "" && fullText.length >= searchText.length)
    if (fullText[0,searchText.length] == searchText)
      count = count+1
    end
    fullText = fullText[(allowOverlap ? 1 : searchText.length),fullText.length]
  end
  count
end
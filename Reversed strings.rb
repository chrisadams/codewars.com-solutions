
# This is the solution I came up with for the kata 'Reversed strings':
# http://www.codewars.com/dojo/katas/5168bb5dfe9a00b126000018

# Description:

# Complete the solution so that it reverses the string value passed into it.

# solution('world') # returns 'dlrow'

def solution(str)
  if str.length > 0
  	str.split('').reduce { |current, newChar| newChar+current }
  else
  	return ''
  end
end
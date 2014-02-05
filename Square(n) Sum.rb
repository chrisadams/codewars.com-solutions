
# This is the solution I came up with for the kata 'Square(n) Sum':
# http://www.codewars.com/dojo/katas/515e271a311df0350d00000f

# Description:

# Complete the squareSum method so that it squares each number passed
# into it and then sums the results together.

# For example:

# squareSum([1,2, 2]) # should return 9

def squareSum(numbers)
  return numbers.map{ |x| x*x }.reduce(:+)
end
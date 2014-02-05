
# This is the solution I came up with for the kata 'Multiples of 3 and 5':
# http://www.codewars.com/dojo/katas/514b92a657cdc65150000006

# Description:

# If we list all the natural numbers below 10 that are multiples of 3 or 5,
# we get 3, 5, 6 and 9. The sum of these multiples is 23.

# Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the
# number passed in.

# Courtesy of ProjectEuler.net

def solution(number)
 return (0...number).select{ |x| ((x % 3 == 0) || (x % 5 == 0))}.reduce(:+)
end
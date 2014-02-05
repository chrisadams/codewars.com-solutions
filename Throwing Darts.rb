
# This is the solution I came up with for the kata 'Throwing Darts':
# http://www.codewars.com/dojo/katas/525dfedb5b62f6954d000006/

# Description:

# You've just recently been hired to calculate scores for a Dart Board game! 

# Scoring specifications:
# 0 points - radius above 10
# 5 points - radius between 5 and 10 inclusive
# 10 points - radius less than 5

# If all radiuses are less than 5, award 100 BONUS POINTS!

# Write a function that accepts an array of radiuses (can be integers and/or floats), 
# and returns a total score using the above specification.
# An empty array should return 0.

# Examples:
# scoreThrows( [1, 5, 11] ) => returns 15 
# scoreThrows( [15, 20, 30] ) => returns 0 
# scoreThrows( [1, 2, 3, 4] ) => returns 140

def scoreThrows(radiuses)
  if (radiuses.all? { |x| x < 5 } && radiuses.length > 0)
    bonus = 100
  else
    bonus = 0
  end
  score = (radiuses.count { |x| x < 5 } * 10) + (radiuses.count { |x| x >= 5 && x <= 10 } * 5) 
  return bonus + score;
end
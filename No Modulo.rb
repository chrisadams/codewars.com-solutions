
# This is the solution I came up with for the kata 'No Modulo':
# http://www.codewars.com/dojo/katas/521fd22c15fe6ad91d0001f0

# Description:

# Your goal is to write the solution method, which should return
# the result of applying the 'modulo 16' operation to any given positive integer.

# Example usage:

# solution(4)  # => 4
# solution(16) # => 0
# solution(18) # => 2
# Note: The following methods have been disabled

# Fixnum#+
# Fixnum#-
# Fixnum#*
# Fixnum#/
# Fixnum#%
# Fixnum#modulo
# Fixnum#divmod

# return the result of n % 16
def solution(n)
  array = Array.new
  (1..n).each do
    array.push(0)
  end
  while (array.length >= 16)
    (1..16).each do
      array.pop
    end  
  end
  array.length
end
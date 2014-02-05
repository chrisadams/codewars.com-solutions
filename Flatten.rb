
# This is the solution I came up with for the kata 'Flatten':
# http://www.codewars.com/dojo/katas/5250a89b1625e5decd000413

# Description:

# Write a function that flattens an Array of Array objects into a flat Array.
# Your function must only do one level of flattening.

# flatten [1,2,3] # => [1,2,3]
# flatten [[1,2,3],["a","b","c"],[1,2,3]]  # => [1,2,3,"a","b","c",1,2,3]
# flatten [[[1,2,3]]] # => [[1,2,3]]

def flatten(array)
  new_array = Array.new
  array.each do |elem|
    if elem.kind_of?(Array)
      elem.each do |array_elem|
        new_array.push(array_elem)
      end
    else
      new_array.push(elem)
    end
  end
  new_array
end
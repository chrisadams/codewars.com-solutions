# This is the solution I came up with for the kata 'Does array x contain all values within array y?':
# http://www.codewars.com/dojo/katas/5143cc9694a24abcd2000001

# Description:

# We want to extend the array class so that it provides a contains_all? method.
# This method will always assume that an array is passed in and will return true if all
# values within the passed in array are present within the current array.

# For example:

# items = [1, 2, 3, 4, 5, 6, 7, 8, 9]

# items.contains_all?([1, 2, 3]) # should == true
# items.contains_all?([1, 5, 13]) # should == false because 13 is not within the items array

class Array
  def contains_all?(other_array)
    other_array.each do |elem|
      if !self.include?(elem)
        return false
      end
    end
    return true
  end
end

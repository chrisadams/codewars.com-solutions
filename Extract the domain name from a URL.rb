
# This is the solution I came up with for the kata 'Extract the domain name from a URL':
# http://www.codewars.com/dojo/katas/514a024011ea4fb54200004b

# Description:

# Write a function that when given a URL as a string,
# parses out just the domain name and returns it as a string. For example:

# domain_name("http://github.com/carbonfive/raygun") == "github" 
# domain_name("http://www.zombie-bites.com") == "zombie-bites"
# domain_name("https://www.cnet.com") == "cnet"

def domain_name(url)
  url.gsub("www.","").split("//")[1].split("/")[0].split('.')[0]
end
You have develop a application that basically reduce the length of string .

the logic behind that is you can remove zero or more than zero consecutive characters from string and replace with the

no of characters removed .

You are testing your application you have two strings str1 and str2 . check whether str2 is valid reduced string of str1 if yes return True else return False.



Example 1:

Input:

 str1 = "SHARPENER"

str2 = "S3P3R"

Output: True

Explanation: We can clearly see that T is a valid compressed string for S.



Example 2:

Input:

str1 = "DFS"

str2 = "D1D"

Output : 0

Explanation: T is not a valid compressed string.

// A function that checks if str2 is a valid reduced string of str1
str1 = "DFS"

str2 = "D1D"



function isValidReducedString(str1, str2) {
  // Initialize an index for str2
  let index = 0;
  // Loop through each character of str1
  for (let i = 0; i < str1.length; i++) {
    let count = 1;
    while (i + 1 < str1.length && str1[i] === str1[i + 1]) {
      count++;
      i++;
    }
    
    if (count.toString() === str2[index]) {
      index++;
    } else {
      // Otherwise, return false
      return false;
    }
  }
  
  return index === str2.length;
}
 console.log(isValidReducedString(str1, str2));
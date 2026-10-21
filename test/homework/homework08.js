/* Task 1 
Requirement:
 Write a function named hasLowerCase() which takes a string argument 
 and returns true if there is a lowercase letter and false if it there isn’t. 
Examples:
 hasLowerCase("")            -> false
 hasLowerCase("JAVASCRIPT")  -> false
 hasLowerCase("hello")       -> true
 hasLowerCase("125$")        -> false
 hasLowerCase("   a   ")     -> true
*/
console.log("--- Task 1 ---" + ('-'.repeat(100)));

/* Task 2
Requirement:
 Write a function named noZero() which takes an array of numbers as argument 
 and returns the array back with all zeros removed.
Examples:
 noZero([1])           -> [1]
 noZero([1, 1, 10]​)    -> [1, 1, 10]​
 noZero([0, 1, 10])    -> [1, 10]
 noZero([0, 0, 0])     -> []
 noZero([10, 100, 0])  -> [10, 100]
*/
console.log('\n--- Task 2 ---' + ('-'.repeat(100)));

/* Task 3
Requirement:
 Write a function named numberAndSquare() which takes an array of numbers as argument
 and returns a multidimensional array with all numbers squared. 
Examples:
 numberAndSquare([1, 2, 3])     -> [[1, 1], [2, 4], [3, 9]]
 numberAndSquare([0, 3, -6])    -> [[0, 0], [3, 9], [-6, 36]]
 numberAndSquare([1, 4])        -> [[1,1], [4, 16]]
 numberAndSquare([0, 0, 0])     -> [[0, 0], [0, 0], [0, 0]]
 numberAndSquare([0, 1, -10])   -> [[0, 0], [1, 1], [-10, 100]]
*/
console.log('\n--- Task 3 ---' + ('-'.repeat(100)));

/* Task 4
Requirement:
 Write a function named containsValue() which takes a string array and a string as arguments and 
 returns a boolean value. Search the string variable inside of the array and return true if it exists 
 in the array. If it doesn’t exist, return false. ​
 NOTE: Assume that array size is at least 1.​
 NOTE: The method is case-sensitive.
Examples:
 containsValue(["abc", "foo", "javascript"], "hello")                -> false
 containsValue(["abc", "def", "123"], "Abc")                         -> false
 containsValue(["abc", "def", "123", "Javascript", "Hello"], "123")  -> true
*/
console.log('\n--- Task 4 ---' + ('-'.repeat(100)));


/* Task 5
Requirement:
 Write a function named reverseSentence() which takes a string as argument and returns 
 the words in reverse order.​ If there is no enough words reverse, return "There is not enough words!".
Examples:
 reverseSentence("Hello")               -> "There is not enough words!"
 reverseSentence("Javascript is fun")   -> "Fun is javascript"
 reverseSentence("This is a sentence")  -> "Sentence a is this"
*/
console.log('\n--- Task 5 ---' + ('-'.repeat(100)));



/* Task 6
Requirement:
 Write a function named removeStringSpecialsDigits() which takes a string as argument 
 and return a string without the special characters or digits.
Examples:
 removeStringSpecialsDigits("123Javascript #%$is fun")  -> "Javascript is fun" 
 removeStringSpecialsDigits("Cypress")                  -> "Cypress"
 removeStringSpecialsDigits("Automation123#$%")         -> "Automation"
*/
console.log('\n--- Task 6 ---' + ('-'.repeat(100)));



/* Task 7
Requirement:
 Write a function named removeArraySpecialsDigits() which takes a string array as argument and 
 return back without the special characters or digits.
Examples:
 removeArraySpecialsDigits(["123Javascript", "#$%is", "fun"])   -> ["Javascript", "is", "fun"]
 removeArraySpecialsDigits(["Cypress", "123$%", "###"])         -> ["Cypress", "", ""]
 removeArraySpecialsDigits(["Automation", "123#$%tool"])        -> ["Automation", "tool"]

*/
console.log('\n--- Task 7 ---' + ('-'.repeat(100)));



/* Task 8
Requirement:
 Write a function named getCommons() which takes two string arrays as arguments and 
 returns all the common words.
Examples:
 getCommons( ["Javascript", "is", "fun"], ["abc", "xyz", "123"] )           -> []
 getCommons( ["Javascript", "is", "fun"], ["Javascript", "C#", "Python"] )  -> ["Javascript"]
 getCommons( ["Javascript", "C#", "C#"], ["Python", "C#", "C++"] )          -> ["C#"]
*/
console.log('\n--- Task 8 ---' + ('-'.repeat(100)));



/* Task 9
Requirement:
 Write a function named noXInVariables() which takes an array as argument and return 
 an array that all the x or X removed from the elements. 
 NOTE: If the element is existing of x or X letters only, then completely remove 
 the element.
Examples:
 noXInVariables(["abc", 123, "#$%"])        -> ["abc", 123, "#$%"]
 noXInVariables(["xyz", 123, "#$%"])        -> ["yz", 123, "#$%"]
 noXInVariables(["x", 123, "#$%"])          -> [123, "#$%"]
 noXInVariables(["xyXyxy", "Xx", "ABC"])    -> ["yyy", "ABC"]

*/
console.log('\n--- Task 9 ---' + ('-'.repeat(100)));


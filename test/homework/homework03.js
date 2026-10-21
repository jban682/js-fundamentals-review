//HOMEWORK 3: JS FUNCTION - IF ELSE STATEMENTS

/**
TASK 1
Requirement:
Write a program that generates 3 random numbers between 1 to 100 (q and 100 are included)

Print true if the average of the random numbers is greater or equals 50.
Print false if the average of the random numbers is less than 50.

Test data 1:
20, 70, 25

Expected output 1:
false

Test data 2: 65, 80, 90
Expected output 2:
true
**/


/**
TASK 2
Requirement:
Write a program that generates 3 random numbers between 1 to 3 (1 and 3 are included)

-if all numbers are different, then print "NO MATCH"
-if any of those 2 numbers are equal, then print "DOUBLE MATCH"
-if all 3 numbers are equal, then print "TRIPLE MATCH"

Test data 1: 3, 3, 3
Expected output: TRIPLE MATCH

Test data 2: 1, 3, 3
Expected output: DOUBLE MATCH

Test data 3: 1, 2, 3
Expected output: NO MATCH

Test data 4: 1, 1, 2
Expected output: DOUBLE MATCH

**/


/**
TASK 3
Requirement:
Write a function named as hasA() which takes a string word as an argument and returns true if given string has a character "a" or "A", and false otherwise when invoked.

NOTE: Assume you will not be given an empty word.

Examples:
hasA("Tech")	-> false
hasA("Global")	-> false
hasA("")	-> false
hasA("Apple")	-> false
**/

/**
TASK 4
Requirement:
Write a function named as doubleOrTrippleWord() which takes a string word as an argument and returns the given word back tripled if the string length is even or doubled if the string length is odd when invoked.

Examples:
doubleOrTrippleWord("Tech")	-> "TechTechTech"
doubleOrTrippleWord("Apple")	-> "AppleApple"
doubleOrTrippleWord("")		-> ""
doubleOrTrippleWord(" ")	-> "  "
doubleOrTrippleWord("1")	-> "11"
doubleOrTrippleWord("22")	-> "222222"
**/

/**
TASK 5
Requirement:
Write  a function named as firstWord() which takes a string word as an argument and returns the first word back from the given string when invoked.

NOTE: Return empty string if the given string does not have any word.

Examples:
firstWord("Hello World")	-> "Hello"
firstWord("I like JavaScript")	-> "I"
firstWord("Hello")		-> "Hello"
firstWord("")			-> ""
firstWord("   ")		-> ""
**/

/**
TASK 6
Requirement:
Write  a function named as lastWord() which takes a string word as an argument and returns the first word back from the given string when invoked.

NOTE: Return empty string if the given string does not have any word.

Examples:
firstWord("Hello World")	-> "World"
firstWord("I like JavaScript")	-> "JavaScript"
firstWord("Hello")		-> "Hello"
firstWord("")			-> ""
firstWord("   ")		-> ""
**/

/**
TASK 7
Requirement:
Write  a function named as firstlastWord() which takes a string word as an argument and returns the first word back from the given string when invoked.

NOTE: Return empty string if the given string does not have any word.

Examples:
firstlastWord("Hello World")		-> "HelloWorld"
firstlastWord("I like JavaScript")	-> "IJavaScript"
firstlastWord("Hello")			-> "HelloHello"
firstlastWord("")			-> ""
firstlastWord("   ")			-> ""
**/

/**
TASK 8
Requirement:
Write  a function named as startVowel() which takes a string word as an argument and returns true if given string starts with a vowel, and false otherwise when invoked.

NOTE: Vowel letters: a, e, i ,o, u, A, E, I, O, U

Examples:
startVowel("Hello")	-> false
startVowel("Apple")	-> true
startVowel("orange")	-> true
startVowel("")		-> false
startVowel("   ")	-> false
startVowel("123")	-> false
**/

/**
TASK 9
Requirement:
Write  a function named as swap4() which takes a string word as an argument and returns the string back with its first and last 4 characters swapped when invoked.

NOTE: Return empty string if the given string does not have 8 or more characters.

Examples:
swap4("abc")		-> ""
swap4("JavaScript")	-> "riptScJava"
swap4("TechGlobal")	-> "obalGlTech"
swap4("")		-> ""
swap4("  ")		-> ""
swap4("Apple")		-> ""
**/

/**
TASK 10
Requirement:
Write  a function named as swapFirstLastWord() which takes a string word as an argument and returns the string back with its first and last 4 words swapped when invoked.

NOTE: Return empty string if the given string does not have 2 or more words.

Examples:
swapFirstLastWord("Hello World")	-> "World Hellow"
swapFirstLastWord("I like JaveScript")	-> "JavaScript like I"
swapFirstLastWord("foo bar foo bar")	-> "bar bar foo foo"
swapFirstLastWord("")			-> ""
swapFirstLastWord(" ")			-> ""
swapFirstLastWord("Hello")		-> ""
swapFirstLastWord("Hello    ")		-> ""
**/
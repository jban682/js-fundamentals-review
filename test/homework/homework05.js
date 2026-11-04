//HOMEWORK 5 ON-WARDS: PRACTICES

/* TASK 1 - array methods 
Requirement:
 Write a function named countPos() which takes an array of numbers as an argument 
 and returns how many elements are positive​ when invoked.
Examples:
 countPos([-45, 0, 0, 34, 5, 67])       -> 3
 countPos([-23, -4, 0, 2, 5, 90, 123])  -> 4
 countPos([0, -1, -2, -3])              -> 0
*/
console.log('\n--- TASK 1 ---')

function countPos(array) {
    const positive = array.filter(function (number) {
        return number > 0
    })

    return positive.length
}

console.log(countPos([-45, 0, 0, 34, 5, 67]))
console.log(countPos([-23, -4, 0, 2, 5, 90, 123]))
console.log(countPos([0, -1, -2, -3]))

/* TASK 2  - array methods 
Requirement:
 Write a function named countA() which takes a string argument and returns how many 'A' 
 or 'a' there are in the given string when invoked.
NOTE: 
 Ignore case sensitivity. 
Examples:
 countA("TechGlobal is a QA bootcamp")      -> 4
 countA("QA stands for Quality Assurance")  -> 5
 countA("Cypress")                          -> 0
*/

console.log('\n--- TASK 2 ---')
//clever and showing off approach
/*function countA(string){
   return string.toLowerCase().split("a").length - 1    
}*/

function countA(string) {
    let count = 0
    let words = string.toLowerCase().split("")

    words.forEach(char => {
        if (char.includes('a')) {
            count++
        }
    })
    return count
}

console.log(countA("TechGlobal is a QA bootcamp"))
console.log(countA("QA stands for Quality Assurance"))
console.log(countA("Cypress"))

/* TASK 3
Requirement: array - methods
 Write a function named as countVowels() which takes a string word as an argument and 
 returns the count of the vowel letters when invoked.
NOTE: 
 Vowel letters are A,E, O, U, I, a, e, o, u, i
Examples:
 countVowels("Hello")             -> 2
 countVowels("Hello World")       -> 3
 countVowels("JavaScript is fun") -> 5
 countVowels("")                  -> 0
*/

console.log('\n--- TASK 3 ---')
function countVowels(string) {
    const vowels = 'aieou'
    let count = 0
    let words = string.toLowerCase().split("")

    words.forEach(char => {
        if (vowels.includes(char)) {
            count++
        }
    })
    return count
}

console.log(countVowels("Hello"))
console.log(countVowels("Hello World"))
console.log(countVowels("JavaScript is fun"))
console.log(countVowels(""))

/* TASK 4 array method - reduce 
Requirement: 
 Write a function named as countConsonants() which takes a string word as an argument 
 and returns the count of the consonant letters when invoked.
NOTE: 
 A letter that is not vowel is considered as a consonant letter.
Examples:
 countConsonants("Hello")               -> 3
 countConsonants("Hello World")         -> 8 ??  it should be 7 if it's just the consonants 
 countConsonants("JavaScript is fun")   -> 12 ??  it should be 10, not counting the space 
 countConsonants("")                    -> 0
*/

console.log('\n--- TASK 4 -- GET BACK TO THIS-')
function countConsonants(string) {
    let words = string.trim().split("")
    console.log(words)

    //words.reduce()
}

console.log(countConsonants("Hello"))


/* TASK 5 - string method
Requirement: 
 Write a function named countWords() which takes a string argument and returns 
 the total count of words in the given string when invoked.
NOTE: 
 Be careful about the extra whitespaces before and after the string.
Examples:
 countWords("     Javascript is fun       ")             -> 3
 countWords("Cypress is an UI automation tool.    ")     -> 6 
 countWords("1 2 3 4")                                   -> 4
*/
console.log('\n--- TASK 5 ---')

function countWords(string) {
    let count = 0
    let words = string.trim().split(" ")

    words.forEach(word => {
        count++
    })
    return count
}

console.log(countWords("     Javascript is fun       "))
console.log(countWords("Cypress is an UI automation tool.    "))
console.log(countWords("1 2 3 4"))

/* TASK 6
Requirement:
 Write a function named as factorial() which takes a number as an argument and returns the factorial of the number when invoked.
NOTE: 
 Mathematically, the factorial of a non-negative integer n is defined as:
 n! = n × (n-1) × (n-2) × ... × 2 × 1
 Assume you will not be given a negative number.
Examples:
 factorial(5) 		-> 120
 factorial(4)		-> 24
 factorial(0)		-> 1
 factorial(1)		-> 1
*/

console.log('\n--- TASK 6 ---')

//function factorial(number){}

/* TASK 7 - array method reverse, spread, join
Requirement: 
 Write a function named as isPalindrome() which takes a string word as an argument and 
 returns true if the word is palindrome or returns false otherwise when invoked.
NOTE: 
 Palindrome: It is a word that is read the same backward as forward
 Examples: kayak, civic, madam
NOTE: 
 your function should ignore case sensitivity
Examples:
 isPalindrome("Hello")       -> false
 isPalindrome("Kayak")       -> true 
 isPalindrome("civic")       -> true
 isPalindrome("abba")        -> true
 isPalindrome("ab  a")       -> false
 isPalindrome("123454321")   -> true
 isPalindrome("A")           -> true
 isPalindrome("")            -> true
*/

console.log('\n--- TASK 7 ---')
function isPalindrome(string) {
    let word1 = string.toLowerCase()
    let word2 = word1.split("").reverse().join("")
    if (word1 === word2) {
        return true
    } else {
        return false
    }
}

console.log(isPalindrome("Hello"))
console.log(isPalindrome("Kayak"))
console.log(isPalindrome("civic"))
console.log(isPalindrome("abba"))
console.log(isPalindrome("ab  a"))
console.log(isPalindrome("123454321"))
console.log(isPalindrome("A"))
console.log(isPalindrome(""))

/* TASK 8 array reduce method 
Requirement: 
 Write a function named as countMultipleWords() which takes an array as an argument and 
 returns the count of the elements that has multiple words when invoked.
NOTE: 
 Be careful about the extra whitespaces before and after the array element.
Examples:
 countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ])        -> 1
 countMultipleWords([ "foo", "bar", "foobar", "     foobar   " ])        -> 0
 countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ])  -> 4
 countMultipleWords([ ])                                                 -> 0
*/

console.log('\n--- TASK 8 ---')
//function countMultipleWords(array){}

/* TASK 9
Requirement: 
 Write a function named as count3OrLess() which takes a string word as an argument and 
 returns the count of the words that has 3 characters or less when invoked.
Examples:
 count3OrLess("Hello")               -> 0
 count3OrLess("Hi John")             -> 1
 count3OrLess("JavaScript is fun")   -> 2
 count3OrLess("My name is John Doe") -> 3
 count3OrLess("")                    -> 0
*/

console.log('\n--- TASK 9 ---')
function count3OrLess(string) {
    let wordCount = string.trim().split(" ")

    const countCharEachWord = wordCount.filter(function(word){
        return word.length > 0 && word.length <= 3
    })

    return countCharEachWord.length
}
console.log(count3OrLess("Hello"))
console.log(count3OrLess("Hi John"))
console.log(count3OrLess("JavaScript is fun"))
console.log(count3OrLess("My name is John Doe"))
console.log(count3OrLess(""))

/* TASK 10
Requirement:
 Write a function named as isPrime() which takes a number as an argument and 
 returns true if the number is prime or returns false otherwise when invoked.
NOTE: 
 Mathematically, Prime number is a number that can be divided only by itself and 1. 
 It cannot be divided by any other number. The smallest prime number is 2 and 2 is the only even prime number.
Examples: 
 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31…
NOTE: 
 The smallest prime number is 2 and there is no negative prime numbers.
Examples:
 isPrime(5)   -> true
 isPrime(2)   -> true
 isPrime(29)  -> true
 isPrime(-5)  -> false
 isPrime(0)   -> false
 isPrime(1)   -> false
*/
console.log('\n--- TASK 10 ---')
function isPrime(number){
    if(number <= 1){
       return false
    }

    for(let i = 2; i < number; i++){
        if(number % i === 0){
            return false
        }
    }
    return true
}

console.log(isPrime(5))
console.log(isPrime(2))
console.log(isPrime(29))
console.log(isPrime(-5))
console.log(isPrime(0))
console.log(isPrime(1))
console.log(isPrime(6))

/* TASK 11
Requirement:
 Write a function named add() which takes two array of numbers as argument 
 and returns a new array with sum of given arrays elements.
NOTE: 
 Be careful about the array sizes as they could be different.
Examples:
 add([3, 0, 0, 7, 5, 10], [6, 3, 2]​)                   -> [9, 3, 2, 7, 5, 10]
 add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34])  -> [16, 11, 9,  3, 2, 7, 5, 10, 34]​
 add([-5, 6, -3, 11], [5, -6, 3, -11])                 -> [0, 0, 0, 0]
*/

console.log('\n--- TASK 11 ---')

/* TASK 12
Requirement: 
 Write a function named as removeExtraSpaces() which takes a string word 
 as an argument and returns the string back with all extra spaces removed when invoked.
Examples:
 removeExtraSpaces("Hello")                              -> "Hello" 
 removeExtraSpaces("      Hello    World     ")          -> "Hello World" 
 removeExtraSpaces("     JavaScript is          fun")    -> "JavaScript is fun”
 removeExtraSpaces("")                                   -> "" 
*/

console.log('\n--- TASK 12 ---')

removeExtraSpaces = (string) => string.trim().split(/\s+/).join(" ")

console.log("Hello")
console.log(removeExtraSpaces("      Hello    World     "))
console.log(removeExtraSpaces("     JavaScript is          fun"))
console.log(removeExtraSpaces(""))

/* TASK 13
Requirement: 
 Write a function named findClosestTo10() which takes an array of numbers as 
 argument and returns the closest element to 10 from the given array.
NOTE: 
 Assume that length of array is always more than zero.
NOTE: 
 Ignore the 10 itself.
NOTE: 
 If there are more than one numbers are close equally, return the smaller number.
Examples:
 findClosestTo10([10, -13, 5, 70, 15, 57]​)  -> 5
 findClosestTo10([10, -13, 8, 12, 15, -20]) -> 8
 findClosestTo10([0, -1, -2])               -> 0
*/

console.log('\n--- TASK 13 ---')
function findClosesTo10(array){


}


/* TASK 14
Requirement: 
 Write a function named as isEmailValid() which takes a string email as an argument 
 and returns true if the email is valid or returns false otherwise when invoked.
NOTE: 
 A VALID EMAIL:
 should NOT have any space. 
 should not have more than one “@” character.  
 should be in the given format <2+chars>@<2+chars>.<2+chars> meaning
 There should be at least characters before @ character.
 There should be at least 2 characters between @ and . Characters.
 There should be at least 2 characters after the . character.
Examples:
 isEmailValid("")                   -> false
 isEmailValid("@gmail.com")         -> false
 isEmailValid("johndoe@yahoo")      -> false
 isEmailValid("johndoe@.com")       -> false
 isEmailValid("a@outlook.com")      -> false
 isEmailValid("johndoe@a.com")      -> false
 isEmailValid("johndoe@@gmail.com") -> false
 isEmailValid("johndoe@gmail.com")  -> true
*/

console.log('\n--- TASK 14 ---')


/* TASK 15
Requirement: 
 Write a function named as isPasswordValid() which takes a string email as 
 an argument and returns true if the password is valid or returns false otherwise when invoked.
NOTE: A VALID PASSWORD:
 should have length of 8 to 16 (both inclusive).
 should have at least 1 digit, 1 uppercase, 1 lowercase and 1 special char.
 should NOT have any space.
Examples:
 isPasswordValid("")                  -> false
 isPasswordValid("abcd")              -> false
 isPasswordValid("abcd1234")          -> false
 isPasswordValid("Abcd1234")          -> false
 isPasswordValid("Chicago12345US!#$%")-> false
 isPasswordValid("Abcd1234$")         -> true
 isPasswordValid("Chicago123$")       -> true
 isPasswordValid("Test1234#")         -> true
*/

console.log('\n--- TASK 15 ---')

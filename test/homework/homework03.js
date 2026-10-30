//HOMEWORK 3: JS FUNCTION - IF ELSE STATEMENTS

/**
TASK 1
Requirement:
Write a program that generates 3 random numbers between 1 to 100 (1 and 100 are included)

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
console.log("\n\n--------- TASK 1 ---------")
let testdata1 = Math.ceil(Math.random() * 100)
let testdata2 = Math.ceil(Math.random() * 100)
let testdata3 = Math.ceil(Math.random() * 100)

if ((testdata1 + testdata2 + testdata3 / 3) >= 50) {
    console.log(`Test data: ${testdata1}, ${testdata2}, ${testdata3}`)
    console.log("true")
} else {
    console.log(`Test data: ${testdata1}, ${testdata2}, ${testdata3}`)
    console.log("false")
}

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
console.log("\n\n--------- TASK 2 ---------")
let randomNum01 = Math.ceil(Math.random() * 3)
let randomNum02 = Math.ceil(Math.random() * 3)
let randomNum03 = Math.ceil(Math.random() * 3)

console.log(`Test data:`, randomNum01, randomNum02, randomNum03)

if (randomNum01 === randomNum02 && randomNum02 === randomNum03) {
    console.log(`TRIPLE MATCH`)
} else if (randomNum01 === randomNum02 || randomNum02 === randomNum03 || randomNum01 === randomNum03) {
    console.log(`DOUBLE MATCH`)
} else {
    console.log(`NO MATCH`)
}

/**
TASK 3
Requirement:
Write a function named as hasA() which takes a string word as an argument and returns true if given string has a character "a" or "A", and false otherwise when invoked.

NOTE: Assume you will not be given an empty word.

Examples:
hasA("Tech")	-> false
hasA("Global")	-> true
hasA("")	-> false
hasA("Apple")	-> true
**/
console.log("\n\n--------- TASK 3 ---------")
function hasA(word) {
    if (word.toLowerCase().includes('a')) {
        return true
    } else {
        return false
    }
}

console.log(hasA("Tech"))
console.log(hasA("Global"))
console.log(hasA(""))
console.log(hasA("Apple"))
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
console.log("\n\n--------- TASK 4 ---------")

function doubleOrTrippleWord(word) {
    if (word.lenght % 2 === 0) {
        return word.repeat(3)
    } else {
        return word.repeat(2)
    }
}

//const doubleOrTrippleWord0 = (word) => word.lenght % 2 === 0 ? word.repeat(3) : word.repeat(2) 

console.log(doubleOrTrippleWord("Tech"))
console.log(doubleOrTrippleWord("Apple"))
console.log(doubleOrTrippleWord(""))
console.log(doubleOrTrippleWord("  "))
console.log(doubleOrTrippleWord("1"))
console.log(doubleOrTrippleWord("22"))

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
console.log("\n\n--------- TASK 5 ---------")
const firstWord = (word) => word.trim().split(" ")[0]

console.log(firstWord("Hello World"))
console.log(firstWord("I like JavaScript"))
console.log(firstWord("Hello"))
console.log(firstWord(""))
console.log(firstWord("   "))

/**
TASK 6
Requirement:
Write  a function named as lastWord() which takes a string word as an argument and returns the first word back from the given string when invoked.

NOTE: Return empty string if the given string does not have any word.

Examples:
lastWord("Hello World")	-> "World"
lastWord("I like JavaScript")	-> "JavaScript"
lastWord("Hello")		-> "Hello"
lastWord("")			-> ""
lastWord("   ")		-> ""
**/
console.log("\n\n--------- TASK 6 ---------")
function lastWord(word) {
    let trimmedWord = word.trim().split(" ")

    return trimmedWord[trimmedWord.length - 1]
}

console.log(lastWord("Hello World"))
console.log(lastWord("I like JavaScript"))
console.log(lastWord("Hello"))
console.log(lastWord(""))
console.log(lastWord("   "))

/**
TASK 7
Requirement:
Write  a function named as firstlastWord() which takes a string word as an argument and returns the first word and last word back from the given string when invoked.

NOTE: Return empty string if the given string does not have any word.

Examples:
firstlastWord("Hello World")		-> "HelloWorld"
firstlastWord("I like JavaScript")	-> "IJavaScript"
firstlastWord("Hello")			-> "HelloHello"
firstlastWord("")			-> ""
firstlastWord("   ")			-> ""
**/
console.log("\n\n--------- TASK 7 ---------")
const firstLastWord = function (word) {
    let wordArray = word.trim().split(" ")
    let firstWord = wordArray[0]
    let lastWord = wordArray.at(-1)

    return [firstWord, lastWord].join("") //OR
    //return `${firstWord}${lastWord}`
}
console.log(firstLastWord("Hello World"))
console.log(firstLastWord("I like JavaScript"))
console.log(firstLastWord("Hello"))
console.log(firstLastWord(""))
console.log(firstLastWord("   "))


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

console.log("\n\n--------- TASK 8 ---------")
function startVowel(word) {
    let wordTestData = word.trim().toLowerCase().charAt(0)
    let vowelsChar = ['a', 'e', 'i', 'o', 'u']

   if (vowelsChar.includes(wordTestData)) {
        return true
    } else {
        return false
    }
}

console.log(startVowel("Hello"))
console.log(startVowel("I like JaveScript"))
console.log(startVowel("Apple"))
console.log(startVowel("orange"))
console.log(startVowel(""))
console.log(startVowel("   "))
console.log(startVowel("123"))

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
console.log("\n\n--------- TASK 9 ---------")
function swap4(word) {
    let trimTestData = word.trim()

    if (word.length >= 8) {
        let first4char = trimTestData.slice(0, 4)
        let last4char = trimTestData.slice(trimTestData.length - 4)
        let middleChar = trimTestData.slice(4, trimTestData.length - 4)

        return `${last4char}${middleChar}${first4char}`
    } else {
        return ""
    }
}
console.log(swap4("abc"))
console.log(swap4("JavaScript"))
console.log(swap4("TechGlobal"))
console.log(swap4(""))
console.log(swap4("  "))
console.log(swap4("Apple"))

/**
TASK 10
Requirement:
Write  a function named as swapFirstLastWord() which takes a string word as an argument and returns the string back with its first and last 4 words swapped when invoked.

NOTE: Return empty string if the given string does not have 2 or more words.

Examples:
swapFirstLastWord("Hello World")	-> "World Hello"
swapFirstLastWord("I like JaveScript")	-> "JavaScript like I"
swapFirstLastWord("foo bar foo bar")	-> "bar bar foo foo"
swapFirstLastWord("")			-> ""
swapFirstLastWord(" ")			-> ""
swapFirstLastWord("Hello")		-> ""
swapFirstLastWord("Hello    ")		-> ""
**/
console.log("\n\n--------- TASK 10 ---------")
function swapFirstLastWord(word) {
    let trim = word.trim().split(" ")
    let firstWord1 = trim[0]
    let middleWord = trim.slice(1, -1).join(" ")
    let lastWord1 = trim[trim.length - 1]

    if(trim.length >= 2){
        return `${lastWord1} ${middleWord} ${firstWord1}`
    }else{
        return ""
    }
}

console.log(swapFirstLastWord("Hello World"))
console.log(swapFirstLastWord("I like JavaScript"))
console.log(swapFirstLastWord("foo bar foo bar"))
console.log(swapFirstLastWord(""))
console.log(swapFirstLastWord(" "))
console.log(swapFirstLastWord("Hello"))
console.log(swapFirstLastWord("Hello  "))


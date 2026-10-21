//Homework 01: JS Output - Escape Sequences - Data Types - Operators

console.log("\n\n--------- TASK 1 ---------")

//Task 1: display text in separate console.log
console.log('I start to practice "JavaScript" today, and I like it.')
console.log('The secret of getting ahead is getting started.')
console.log(`"Don't limit yourself."`)
console.log(`Invest in your dreams.  Grind now. Shine later.`)
console.log(`It's not the load that breaks you down, it's the way you carry it.`)
console.log(`The hard days are what make you stronger.`)
console.log(`You can waste your lives drawing lines. Or you can live your life crossing them.`)

//Task 2: Display statement in one console.log
console.log("\n\n--------- TASK 2 ---------")

console.log(`\t JavaScript is high-level programming language primarily used to build web applications. It is not limited to the web; it can also be used for the backend development with technologies like Node.js. \n \n

\tIt is open source and has a huge community support, which means there are plenty of resources and support available for learning. It uses a syntax like other programming languages and easy to learn.`)


/**
TASK 3 
Requirement:
Write a program that stores below information with proper data types and output all variables with separate console.log() statements.

myAge
myFavoriteNumber
myHeight
myWeight
myFavoriteLetter
**/
console.log("\n\n--------- TASK 3 ---------")

let myAge = 28;
let myFavoriteNumber = 4;
let myHeight = 5.0;
let myWeight = 150;
let myFavoriteLetter = 'A';

console.log("My age is: ", myAge);
console.log("My favorite number is: ", myFavoriteNumber);
console.log("My height is: ", myHeight);
console.log("My weight is: ", myWeight);
console.log("My favorite letter is: ", myFavoriteLetter);

/**
TASK 4 
Requirement:
Create 2 variables called as num1, num2 and store values of 25, 35 in these variables, respectively. Then, output the sum of the numbers with a proper message as given below.

Test Data:
25, 35

Expected output:
The sum of the numbers = 60
**/
console.log("\n\n--------- TASK 4 ---------")

const num1 = 25;
const num2 = 35;
console.log("The sum of the numbers = ", (num1 + num2));

/**
TASK 5
Requirement:
Create 2 variables called as n1, n2 and store values of 5,7 in these variables, respectively. Then, output the product of the numbers with a proper message as given below.

Test Data:
5, 7

Expected output:
The product of the numbers = 35

**/
console.log("\n\n--------- TASK 5 ---------")

const n1 = 5;
const n2 = 7;
console.log("The product of the numbers = ", (n1 * n2));

/**
TASK 6
Requirement:
Create 2 variables called as number1, number2 and store values of 24, 10 in these variables, respectively. Then,output the sum (addition), multiplication, subtraction, division and remainder of these numbers with a proper message as given below.

Test Data: 24, 10

Expected output:
The sum of the numbers is = 3
The product of the numbers is = 240
The subtraction of the numbers is = 14
The division of the numbers is = 2.4
The remainder of the numbers is = 4
**/
console.log("\n\n--------- TASK 6 ---------")

const number1 = 24;
const number2 = 10;
console.log("The sum of the numbers is = ", (number1 + number2));
console.log("The product of the numbers is = ", (number1 * number2));
console.log("The subtraction of the numbers is = ", (number1 - number2));
console.log("The division of the numbers is = ", (number1 / number2));
console.log("The remainder of the numbers is = ", (number1 % number2));


/**
TASK 7
Requirement:
Create 2 variable called as i1, i2 and store values of 7, 11 in these variables, respectively. Then, output the average of the numbers

Test Data:
7, 11

Expected output:
The average of the numbers is: 9
**/
console.log("\n\n--------- TASK 7 ---------")
const i1 = 7;
const i2 = 11;
let numAverage = (i1 + i2) / 2;
console.log("The average of the numbers is: ", numAverage)


/**
TASK 8
Requirement:
Create 5 variables called as a1, a2, a3, a4, a5 and store values of 6, 10, 12, 15, 17 in these variables, respectively. Then, output the average of the numbers.

Test data:
6, 10, 12, 15, 17

Expected output:
The average of the numbers is: 12
**/
console.log("\n\n--------- TASK 8 ---------")

let a1 = 6, a2 = 10, a3 = 12, a4 = 15, a5 = 17;
let averageOf5 = (a1 + a2 + a3 + a4 + a5) / 5;
console.log("The average of the numbers is:", averageOf5);

/**
TASK 9
Requirement:
Create 3 variables called as b1, b2, b3 and store values of 5, 6, 10 in these variables, respectively. Then, output the square of each number entered by user.

NOTE: Square of number means number multiplied with itself

Test Data:
5, 6, 10

Expected output:
The 5 multiplied with 5 is = 25
The 6 multiplied with 6 is = 36
The 10 multiplied with 10 is = 100

**/
console.log("\n\n--------- TASK 9 ---------")

/**
TASK 10
Requirement:
Create a variable called as side to be assumed as one side of the square and store value of 7 in that variable. Then, output the area and perimeter for that square.

NOTE: are of s square = side * side
perimeter of a square - 4* side

Test Data: 7

Expected output:
The perimeter of the square = 28
The area of the square = 49
**/
console.log("\n\n--------- TASK 10 ---------")


/**
TASK 11
Requirement:
Write a program that stores below information with proper data types and output all variables with ONLY one console.log() statement.

favBook = JS algorithms & Data Structures
favColor =Blue
favNumber = 7

Expected output:
The favorite book is JS algorithms & Data Structures
The favorite color is Blue
The favorite number is 7
**/
console.log("\n\n--------- TASK 11 ---------")


/**
TASK 12
Requirement:
Write a program that stores below information with proper data types and output all variables with ONLY one console.log() statement.

firstName = John
lastName = Doe
age - 45
emailAddress = johndoe@ gmail.com
phoneNumber = (123) 123 1234
address = 123 St Chicago IL 12345

Expected output: (it should exactly be same as below paragraph)

	User who joined this program is John Doe. John's age is 45. John's email address is johndoe@gmail.com, phone number is (123) 123 1234, and the address is 123 St Chicago IL 12345.
**/
console.log("\n\n--------- TASK 12 ---------")

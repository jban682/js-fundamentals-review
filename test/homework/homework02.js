//Homework 2: Numbers, Math, Strings

/**
TASK 1
Requirement:
Convert given Strings below to number data types and find their sum, product, division, subtraction, remainder and exponentiation.

let str1 = "5", str2 = "2";

Expected results:
The sum of 5 and 7 is = 7
The product of 5  and 2 is = 10 
The division of 5 and 2 is = 2.5
The subtraction of 5 and 2 is = 3
The remainder of 5 and 2 is = 1
The exponentiation of 5 and 2 is = 25
**/
console.log("\n\n--------- TASK 1 ---------")
let str1 = "5", str2 = "2";

console.log(`The sum of the ${str1} and ${str2} is = ${Number(str1) + Number(str2)}`)
console.log(`The product of the ${str1} and ${str2} is = ${Number(str1) * Number(str2)}`)
console.log(`The division of the ${str1} and ${str2} is = ${Number(str1) / Number(str2)}`)
console.log(`The subtraction of the ${str1} and ${str2} is = ${Number(str1) - Number(str2)}`)
console.log(`The remainder of the ${str1} and ${str2} is = ${Number(str1) % Number(str2)}`)
console.log(`The exponentiation of the ${str1} and ${str2} is = ${Math.pow(Number(str1), Number(str2))}`)

/**
TASK 2
Requirement:
Convert given String below to number data types and find the greatest and smallest values and find the average and absolute difference of them.

let s1 = "200", s2 = "-50";

Expected results:
The greatest values is = 200
The smallest value is = -50
The average is = 75
The absolute difference is = 250
**/
console.log("\n\n--------- TASK 2 ---------")
let s1 = "200", s2 = "-50";

console.log(`The greatest values is = ${Math.max(Number(s1), Number(s2))}`)
console.log(`The smallest value is = ${Math.min(Number(s1), Number(s2))}`)
console.log(`The avearage is = ${(Number(s1) + Number(s2)) / 2}`)
console.log(`The absolute difference is = ${Math.abs(Number(s1) - Number(s2))}`)

/**
TASK 3
Requirement:
Write a program that generates 2 random numbers between 1 and 50 (both 1 and 50 are included). Then, find the absolute difference of those numbers.

Test Data:
5, 27

Expected result:
The absolute difference between numbers is = 22
**/
console.log("\n\n--------- TASK 3 ---------")
let randomNum1 = Math.ceil(Math.random() * 50)
let randomNum2 = Math.ceil(Math.random() * 50)
let absDifference = Math.abs(randomNum1 - randomNum2)
console.log(`Test Data: ${randomNum1}, ${randomNum2}`)
console.log(`The absolute difference between numbers is = ${absDifference}`)

//OR [1 liner way to do it]
console.log(`The absolute difference between numbers is = ${Math.abs(Math.ceil(Math.random() * 50) - Math.ceil(Math.random() * 50))}`)

/**
TASK 4
Requirement:
Write a program that generates 5 random numbers between 1 and 50 (both 1 and 50 are included). Then, find the max and min of these numbers.

Test Data:
3, 15, 45, 20, 25

Expected output:
The max value = 45
The min value = 3
**/
console.log("\n\n--------- TASK 4 ---------")
let randomNumber1 = Math.ceil(Math.random() * 50)
let randomNumber2 = Math.ceil(Math.random() * 50)
let randomNumber3 = Math.ceil(Math.random() * 50)
let randomNumber4 = Math.ceil(Math.random() * 50)
let randomNumber5 = Math.ceil(Math.random() * 50)

console.log(`Test Data: ${randomNumber1}, ${randomNumber2}, ${randomNumber3}, ${randomNumber4}, ${randomNumber5}`)

console.log(`The max value = ${(Math.max(randomNumber1, randomNumber2, randomNumber3, randomNumber4, randomNumber5))}`)
console.log(`The min value = ${(Math.min(randomNumber1, randomNumber2, randomNumber3, randomNumber4, randomNumber5))}`)

/**
TASK 5
Requirement:
Write a program that generates 3 random numbers between 50 and 100 both included.

First print the numbers
Then, find the sum of these numbers

Test Data:
55, 67, 90

Expected output:
The number 1 = 55
The number 2 = 67
The number 3 = 90
The sum of numbers is = 212
**/
console.log("\n\n--------- TASK 5 ---------")
let testData01 = Math.floor(Math.random() * (51) + 50)
let testData02 = Math.floor(Math.random() * (51) + 50)
let testData03 = Math.floor(Math.random() * (51) + 50)

console.log(`The number 1 = ${testData01} \nThe number 2 =  ${testData02} \nThen number 3 = ${testData03}`)
console.log(`The sum of numbers is = ${testData01 + testData02 + testData03}`)

/**
TASK 6
Requirement:
Write a program that generates 3 random numbers between 1 and 100 (1 and 100 are included) and find if all the numbers are more than 25.

Print true if all numbers are greater than 25.
Print false if any of the number is less than or equals 25.
**/
console.log("\n\n--------- TASK 6 ---------")

for (let i = 1; i <= 3; i++){
    let randomNum = Math.ceil(Math.random() * 100)
    console.log(`Test data${i} = ${randomNum}`)

    if (randomNum > 25){
        console.log(`true`)
    }else{
        console.log(`false`)}
}

/**
TASK 7
Requirement:
Assume you are given a name let name = "David";
1. Print out the length of the name
2. Find the first character in the name and print it
3. Find the last character in the name and print it
4. Find the first 3 characters in the name and print them
5. Find the last 3 characters in the name and print them

Expected output:
The length of the name is = 5
The first character in the name is = D
The last character in the name is = d
The first 3 characters in the name are = Dav
The last 3 characters in the name are = vid
**/
console.log("\n\n--------- TASK 7 ---------")
let name = "David"

console.log('The length of the name is =', name.length)
console.log('The first character in the name is =', name.charAt(0))
console.log('The last character in the name is =', name.charAt(name.length - 1))
console.log('The first 3 characters in the name are =', name.substring(0, 3))
console.log('The last 3 characters in the name are =', name.substring(name.length - 3, name.length))
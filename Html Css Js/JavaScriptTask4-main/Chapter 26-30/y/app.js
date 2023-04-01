// MATH METHODS
// ************
// Chapter 26-30
// *************

// 1
//*
let psInteger = prompt("Enter positive integer number");
let number = Number(psInteger);
let roundOff = Math.round(number);
let floor = Math.floor(number);
let ceil = Math.ceil(number);
document.write("Number: " + number + "<br>");
document.write("Round of value: " + roundOff + "<br>");
document.write("Floor Value: " + floor + "<br>");
document.write("Ceil Value: " + ceil + "<br><br>");

// 2
// *
let NgInteger = prompt("Enter negative floating point number");
let number1 = Number(NgInteger);
let roundOff1 = Math.round(number1);
let floor1 = Math.floor(number1);
let ceil1 = Math.ceil(number1);
document.write("Number: " + number1 + "<br>");
document.write("Round of value: " + roundOff1 + "<br>");
document.write("Floor Value: " + floor1 + "<br>");
document.write("Ceil Value: " + ceil1 + "<br><br>");

// 3
// *
let abs1 = +prompt("Enter a number we convert it into an absolute value");
let userAbs = Math.abs(abs1);
document.write("The absolute value of " + abs1 + " is " + userAbs + "<br><br>");

// 4
// *
let random = Math.ceil(Math.random() * 6);
document.write("Random dice value: " + random + "<br><br>");

// 5
// *
let toss =  Math.ceil(Math.random() * 2);
let tossValue = toss === 2? "Heads" : "Tails";
document.write(toss + "<br>" + "Ranom coin value: " + tossValue + "<br><br>");

// 6
// *
let hundred = Math.ceil(Math.random() * 100);
document.write("Rnadom number between 1 to 100: " + hundred + "<br><br>");

// 7
// *
let weight = prompt("Enter your weight in kilograms");
document.write("The weight of user is " + weight + "<br><br>");

// 8
// *
let guess = Math.ceil(Math.random() * 10);
let userGuessNo = prompt("Guess the secret number from 1 to 10");
let answer = Number(userGuessNo) === guess? "congratulate" : "Try again!";
alert(answer);

// END
// ***
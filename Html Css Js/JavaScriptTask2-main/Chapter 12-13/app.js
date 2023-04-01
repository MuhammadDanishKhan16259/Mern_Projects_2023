// Chapter 12-13
// *************
// IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS 
// ******************************************************

// 1
// *

// takes a character from user




// 2
// *

let userInput1 = +prompt("Enter first number");
let userInput2 = +prompt("Enter Second number");

if(userInput1 > userInput2){
    alert(userInput1 + " First number is larger");
}
else if(userInput2 > userInput1){
    alert(userInput2 + " Second number is larger");
}
else if(userInput1 == userInput2){
    alert("Both numbers are equal");
}
else{
    alert("Enter number not string and special character");
}

// 3
// *
let valueCheck = +prompt("enter any number");
if(valueCheck % 2 == 0){
    alert("Positive");
}
else if(valueCheck % 2 != 0){
    alert("Negative")
}
else{
    alert("Enter number");
}
// ****************************

// 4
// *
let userValue = prompt("Enter any character not special character");
if(userValue == "a" || userValue == "e" || userValue == "i" || userValue == "o" || userValue == "u"){
    alert(userValue + " is vowel");
}else if(userValue == "A" || userValue == "E" || userValue == "I" || userValue == "O" ||userValue == "U"){
    alert("The enter value is vowel");
}
else{
    alert(userValue + " is not vowel");
}
// ****************************

// 5
// *
let user_password = prompt("Enter Password");
let user_password1 = prompt("Enter again same password");
console.log(user_password1);
if(user_password === user_password1){
    alert("Correct! The password you entered matches the original password");
}
else if(user_password !== user_password1){
    alert("Incorrect password");
}
// ****************************

// 6
// *
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
}
else{
    greeting = "Good evening";
}
// ****************************

// 7
// *
let time = prompt("Enter current Time");
if(time >= 0000 && time < 1200){
    alert("Good morning!");
}
else if(time >= 1200 && time <= 1700){
    alert("Good afternoon!");
}
else if(time >= 1700 && time < 2100){
    alert("Good evening!");
}
else if(time >= 2100 && time <= 2359){
    alert("Good night!");
}
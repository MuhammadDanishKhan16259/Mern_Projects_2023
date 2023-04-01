// Chapter 6-11
// ***********
// USER INPUT & CONDITIONAL STATEMENT
// **********************************

// 1
// *
// **********************************
// Take the input for user
let cityName = prompt("Enter your city name","Karachi");
// Using ternary operator for condition
let condition = (cityName === "Karachi" || cityName === "karachi")? alert("Welcome to city of lights") : alert("Welcome to city " + cityName);
// **********************************

// 2
// *
// **********************************
// Take the input for user
let user_Gender = prompt("Enter your Gender");
// Using if statement for condition
if(user_Gender == "Male" || user_Gender == "male"){
    alert("Good Morning Sir");
}
else if(user_Gender === "Female" || user_Gender === "female"){
    alert("Good Morning Ma’am");
}
else{
    alert("Good Morning");
}
// **********************************

// 3
// *
// **********************************
// Take the input for user
let traffic_Signal = prompt("Input the color of road traffic signal 🚦");
// Using switch statement for condition
switch(true){
    case (traffic_Signal === "Red" || traffic_Signal === "red"):
        alert("🚦 Must Stop");
        break;
    case(traffic_Signal === "Yellow" || traffic_Signal === "yellow"):
        alert("🚦 Ready to move");
        break;
    case(traffic_Signal === "Green" || traffic_Signal === "green"):
        alert("🚦 Move now");
        break;
    default:
        alert("Enter correct color");
}
// **********************************

// 4
// *
// **********************************
// Take the input for user
let remaining_Fuel = prompt("Enter remaining fuel in car (give an answer in liters)");
// using ternary operator for condition
let ternaryOperator = remaining_Fuel < 0.25? "Please refill the fuel in your car" : "Thanks";
alert(ternaryOperator);
// **********************************

// 5
// *
// **********************************
var a = 4;
if(++a === 5){
    alert("given condition for variable a is true");
}
var b = 82;
if(b++ === 83){
    alert("given condition for variable b is true"); 
}
var c = 12;
if (c++ === 13){
    alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
}
if (++c < 14){
    alert("condition 3 is true");
}
if(c === 14){
    alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    alert("The cost equals");
}
if (true){
    alert("True");
}
if (false){
    alert("False");
}
// **********************************

// 6
// *
// **********************************
// Marks Sheet
document.write("<h1>Marks Sheet</h1>");
// take the input from the user
let subj1 = +prompt("Enter first subject no: ");
let subj2 = +prompt("Enter second subject no: ");
let subj3 = +prompt("Enter third subject no: ");

// Sum of the number of three subject
let sum_All_Subject = subj1 + subj2 + subj3;
let percentage = (sum_All_Subject * 100) / 300;

// Print value in document
// ***********************
document.write("Total marks: 300" + "<br>");
document.write("Marks obtained: " + sum_All_Subject + "<br>");
document.write("Percentage: " + percentage + "<br>");
// ***********************

if(percentage >= 80){
    document.write("Grade: A-one" + "<br>");
    document.write("Remarks: Excellent" + "<br>");
}
else if(percentage >= 70){
    document.write("Grade: A" + "<br>");
    document.write("Remarks: Good" + "<br>");
}
else if(percentage >= 60){
    document.write("Grade: B" + "<br>");
    document.write("Remarks: You need to improve" + "<br>");
}
else if(percentage < 60){
    document.write("Grade: Fail" + "<br>");
    document.write("Remarks: Sorry");
}
// **********************************

// 7
// *
// Guess Game
// **********
let secretNumber = Math.floor(Math.random() * 10);
if(secretNumber == 0){
    secretNumber += 1;
    console.log(secretNumber);
}
else{
    console.log(secretNumber);
}

// user to guess the secret number
let userValue = +prompt("Guess the secret Number between and equal to 1 to 10 🙄");

if(secretNumber === userValue){
    alert("Bingo! Correct answer🤩");
    alert("correct answer is: " + secretNumber);
}   
else if(secretNumber + 1 === userValue){
    alert("Close enough to the correct answer😯");
    alert("correct answer is: " + secretNumber);
}
else{
    alert("Sorry your guess is not right😥");
    alert("correct answer is: " + secretNumber);
}
// **********************************

// 8
// *
// **********************************
let userCheck = +prompt("The given number is divisible by 3?");
if(userCheck % 3 === 0){
    alert("The given number is divisible by 3");
}
else{
    alert("The given number is not divisible by 3");
}
// **********************************

// 9
// *
let even_Odd = +prompt("Enter any number we will check it and tell you that it is 'Even' or 'Odd'");
if(even_Odd % 2 === 0){
    alert("Even number");
}
else{
    alert("Odd number");
}
// **********************************

// 10
// *
// Enter value form user
let temperature = +prompt("Enter Temperature");
switch(true){
    case(temperature > 40):
        alert("It is too hot outside🥵");
        break;
    case(temperature > 30):
        alert("The Weather today is Normal🤗");
        break;
    case(temperature > 20):
        alert("Today’s Weather is cool😨");
        break;
    case(temperature > 10):
        alert("OMG! Today’s weather is so Cool😱");
        break;
    default:
        alert("Maybe Today Snowfall🥶");
}
// **********************************

// 11
// *
// Basic Math operator calculator
let first_Number = +prompt("Enter first number");
let second_Number = +prompt("Enter second number");
let operator1 = prompt("Enter Math basic operator like: *, /, +, -, and %");

if(operator1 == "+"){
        alert("Your sum is: " + (first_Number + second_Number));
}
else if(operator1 == "-"){
    if(first_Number > second_Number){
        alert("Your subtract is: " + (first_Number - second_Number));
    }else{
        alert("Your subtract is: " + (second_Number - first_Number));
    }
}
else if(operator1 == "/"){
        alert("Your divide is: " + (first_Number / second_Number));
}
else if(operator1 == "*"){
    alert("Your multiplication is: " + (first_Number * second_Number));
}
else if(operator1 == "%"){
    alert("Your Module is: " + (first_Number % second_Number));
}
else{
    alert("Enter correct number and operator");
}
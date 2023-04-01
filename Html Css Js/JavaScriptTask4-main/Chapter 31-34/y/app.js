// Chapter 31-34
// ************
// DATE METHODS
// ************

// 1
// *
let currentDate = new Date();
document.write(currentDate + "<br><br>");

// 2
// *
let monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let getCurrentMonth = currentDate.getMonth();
alert(monthName[getCurrentMonth]);

// 3
// *
let weekDayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let getCurrentDay = currentDate.getDay();
alert(weekDayName[getCurrentDay]);

// 4
// *
if(getCurrentDay === 6 || getCurrentDay === 0) {
    alert("It’s Fun day");
}

// 5
// *
let currentDateOfTheMonth = currentDate.getDate();
if(currentDateOfTheMonth < 16){
    alert("First fifteen days of the month");
}else{
    alert("Last days of the month");
}

// 6
// *
document.write("Current Date: " + currentDate + "<br>");
document.write("Elapsed milliseconds since January 1, 1970: " + currentDate.getTime() + "<br>");
document.write("Elapsed minutes since January 1, 1970: " + currentDate.getTime() / 60000 + "<br><br>");

// 7
// *
let hours = currentDate.getHours();
hours = hours >= 12? hours - 12: hours; 
let amANDpm = (hours <= 12)? "PM" : "AM";
document.write("It's " + amANDpm + "<br><br>");

// 8
// *
let laterDate = new Date(2020,11,31);
document.write("Later Date: " + laterDate + "<br><br>");

// 9
// *
let firstRamadan = new Date("June-18-2015");
let currentRamadan = new Date("April-2-2022");
let since = Math.trunc((currentRamadan - firstRamadan) / (1000 * 60 * 60 * 24));
document.write(since + " days have passed since 1st Ramadan, 2015" + "<br><br>");

// 10
// *
let second = Math.trunc((currentDate - firstRamadan) / (1000 * 60));
document.write("On reference date " + firstRamadan + ", <br>" + second + " seconds had passed since beginning of 2015" + "<br><br>");

// 11
// *
// let anHourAgao = currentDate.getHours() - 1;
// console.log(anHourAgao);

// 12
// *
let aaa = new Date();
document.write("Current date: " + aaa + "<br>");
aaa.setFullYear(aaa.getFullYear() - 100);
document.write("100 years back, it was " + aaa + "<br><br>");

// 13
// *
let userAge = prompt("Enter your age");
let calculateAge = currentDate.getFullYear() - Number(userAge);
document.write("Your age is: " + userAge + "<br>");
document.write("Your birth year is: " + calculateAge + "<br><br>");

// 14
// *
let customerName, currentMonth, units, chargesPerUnit, lateCharge, withInDate,afterDate;
// value declaration
customerName = prompt("Enter your name");
currentMonth = prompt("Enter Month");
units = +prompt("Enter number of units");
chargesPerUnit = +prompt("Enter Charges per unit");
lateCharge = +prompt("Late Payment Surcharge");
withInDate = units * chargesPerUnit;
afterDate = lateCharge + withInDate;
// Bill heading
document.write("==========================================" + "<br>");
document.write("==========================================" + "<br>");
document.write("<h1>K-Electric Bill</h1>" + "<br>");

document.write(`Customer Name: <b>${customerName}</b> <br>`);
document.write(`Month: <b>${currentMonth}</b> <br>`);
document.write(`Number of units: <b>${units}</b> <br>`);
document.write(`Charges per unit: <b>${chargesPerUnit}</b> <br><br>`);
document.write(`Net Amount Payable (within Due Date): <b>${withInDate}</b> <br>`);
document.write(`Late Payment Surcharge: <b>${lateCharge}</b> <br>`);
document.write(`Gross Amount Payable (after Due Date): <b>${afterDate}</b> <br>`);
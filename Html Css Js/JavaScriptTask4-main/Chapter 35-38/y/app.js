// Chapter 35-38
// *************
// FUNCTION
// ********

// 1
// *
function currentDateAndTime () {
    let date = new Date();
    document.write(date + "<br><br>");
} 
currentDateAndTime();

// 2
// *
let greetUser = function (fName, lName) {
    let fullName = `${fName} ${lName}`;
    alert(`Hello ${fullName}`);
}
greetUser("Shaykh","Mirzaban");

// 3
// *
let num1 = +prompt("Enter first no");
let num2 = +prompt("Enter last no");
let addTwoNumber = (num1, num2) => {
    return num1 + num2;
}
let sum = addTwoNumber(num1, num2);
alert(`Sum of two no is: ${sum}`);

// 4
// *
let cNum1, cNum2, cOperator;

cNum1 = Number(prompt("Enter first no"));
cNum2 = +prompt("Enter last no");
cOperator = prompt("Enter operator");

function calculator (num1, num2, operator) {
    if(operator === "+"){
        return num1 + num2;
    }else if (operator === "-"){
        return num1 > num2? num1 - num2 : num2 - num1;
    }else if (operator === "*"){
        return num1 * num2;
    }else if (operator === "/"){
        return num1 / num2;
    }
}

let compute = calculator(cNum1, cNum2, cOperator);
document.write(`First no: ${cNum1} <br> Second no: ${cNum2} <br> Your answer after operation: ${compute} <br><br>`);

// 5
// *
function square (num1) {
    return Math.pow(num1, 2);
}
let asquar = square(12);
document.write(`Square of: ${asquar} <br><br>`);

// 6
// *
function factorial (num1) {
    if (num1 < 0) {
        return -1;
    }else if(num1 == 0) {
        return 1;
    }
    return num1 * factorial(num1 - 1);
}
let afactorial = factorial(5);
document.write(`computes factorial of a number ${afactorial} <br><br>`);

// 7
// *
let count1 = +prompt("Enter starting number");
let count2 = +prompt("Enter ending number");
document.write(`Your starting value: ${count1} <br>`);
document.write(`Your ending value: ${count2} <br>`);
function counting (num1, num2) {
    for (let i = num1; i <= num2; i++){
        document.write("value: " + i + "<br>");
    }
}
counting (count1, count2);

// 8
// *
function hypotenuse (base, perpendicular) {
    let hypoten = base + perpendicular;
    function square () {
        return Math.pow(hypoten, 2);
    }
    return square();
}
let value = hypotenuse(3, 3);
document.write(`<br> hypotenuse of a right angle triangle: ${value} <br><br>`);

// 9
// *
let height = 10;
function area (width,height) {
    return width * height;
}
let aheight = area(18, height);
document.write(`area of rectangle: ${aheight} <br><br>`);

// 10
// *
let palin = prompt("Enter any word");
function palindrome (a) {
    let y = "";
    for (let i = a.length-1; i >= 0; i--){
        y += a[i];
    }
    if(y === a) {
        alert("It is palindrome");
    }else {
        alert("It's not palindrome");
    }
}
palindrome(palin);

// 11
// *
let string = "the quick brown fox";
function capitalize (string) {
    let arr, string1, string2, combine, i = 0;
    // convert string into array
    arr = string.split(" ");
    // make enpty string to store string
    string1 = "";
    for(i; i < arr.length; i++) {
        // convert array into string
        string2 = arr[i].toString();
        // first letter of word is capital and plus all
        combine = string2.slice(0, 1).toUpperCase() + string2.slice(1);
        // combine all word
        string1 += combine + " ";
    }
    // return string
    return string1;
}
let convert = capitalize(string);
document.write(`EXAMPLE STRING: ${string} <br>`);
document.write(`EXPECTED OUTPUT: ${convert} <br><br>`);

// 12
// *
let a, bArr, comp, i = 0;
a = "Web Development Tutorial";
bArr = a.split(" ");
comp = "";
for (i; i < bArr.length; i++){
    let convertString;
    convertString = bArr[i].toString();
    if (comp.length < convertString.length) {
            comp = convertString;
    }
}
document.write(`EXAMPLE STRING: ${a} <br>`);
document.write(`EXPECTED OUTPUT: ${comp} <br><br>`);

// 13
// *
let longString = "JSResourceS.com";
let findValue = "o";
function findLatter (string, letter) {
    let num, i = 0, stringLength = string.length;
    num = 0;
    for (i; i < stringLength; i++){
        if(string[i] === letter){
            num++;
        }
    }
    return num;
}
let result = findLatter(longString, findValue);
document.write(`EXAMPLE STRING: ${longString} <br>`);
document.write(`EXPECTED OUTPUT: <b>${findValue.toUpperCase()}</b> is: ${result} <br><br>`);

// 14
// *
// part 1
let userValue = prompt("Pass the radius of the circle");
function calcCircumference (radius) {
    let calcuRadius = 2 * Math.PI * radius;
    return calcuRadius;
} 
let result1 = calcCircumference(userValue);
// part 2
function calcArea (area) {
    let calcuArea = Math.PI * Math.pow(area, 2);
    return calcuArea;
}
let result2 = calcArea(userValue);
document.write(`Pass the radius is: ${userValue} <br>`);
document.write(`Circumference of circle is: ${result1} <br>`);
document.write(`Area of circle is: ${result2} <br><br>`);
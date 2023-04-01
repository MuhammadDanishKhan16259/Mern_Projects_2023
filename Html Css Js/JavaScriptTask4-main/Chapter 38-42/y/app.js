// Chapter 38-42
// *************
// FUNCTIONS, SWITCH STATEMENTS, WHILE… DOWHILE LOOPS 
// **************************************************

// 1
// *
function power (a,b) {
    return Math.pow(a,b);
}
let power1 = power(2,4);
document.write(`a raised to b answer is: ${power1} <br><br>`)

// 2
// *
let enteLeapYear = +prompt("Enter a year");
function leapYear (year) {
    let a = (year % 100 === 0)? (year % 400 === 0) : (year % 4 === 0);
    return a;
} 
let leap = leapYear(enteLeapYear);
document.write(`Is ${enteLeapYear} a leap year? ${leap} <br><br>`);

// 3
// *
function areaOfTriangle (a,b,c) {
    let s = (a+b+c) / 2;
    return function() {
        let area1 = s*(s-a)*(s-b)*(s-c);
        return area1;
    }
}
let areatri = areaOfTriangle(5, 6, 7);
document.write(`area of triangle is: ${areatri()} <br><br>`);

// 4
// *
let subj1 = +prompt("Enter first subject no");
let subj2 = +prompt("Enter second subject no");
let subj3 = +prompt("Enter third subject no");
function mainFunction (sub1, sub2, sub3) {
    let sum = sub1 + sub2 + sub3;
    return{ 
        average: function() {
            return sum / 3;
        },
        percentage: function() {
            return (sum / 100) * 300;
        }
    }
}
let a = mainFunction(subj1,subj2,subj3);
let ave = a.average();
let per = a.percentage();
document.write(`Average of 3 subject is: ${ave} <br>`);
document.write(`Percentage of 3 subject is: ${per}% <br><br>`);

// 5
// *
let giveSomePera = prompt("Enter some string");
let giveValue = prompt("Enter find value");
function indexOfa(string, value) {
    for (let i = 0; i < string.length; i++){
        if(string[i] === value){
            return i;
        }
    }
}
let aa = indexOfa(giveSomePera, giveValue);
document.write(`string is: ${giveSomePera} <br>`);
document.write(`Find value is: ${giveValue} <br>`);
document.write(`index of: ${giveValue} is: ${aa} <br><br>`);

// 6
// *
let string = "Lorem ipsum dolor sit, am";
//a,e,i,o,u
function deleteVowel (string) {
    let a = " ";
    for(let i = 0; i < string.length; i++){
        if(string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u"){
            continue;
        }
        a += string[i];
    }
    return a;
}
let rDeleteVowel = deleteVowel(string);
document.write(`Your string: <b>${string}</b> <br>`);
document.write(`Your string without vowel: <b>${rDeleteVowel}</b> <br><br>`);

// 7
// *
let string2 = "Pleases read this application and give me gratuity";
document.write(`"${string2}" <br>`);
document.write("Such occurrences are: ");
for (let i = 0; i <string2.length; i++){
    let a = string2.slice(i, i+2);
    switch(a) {
        case "ae":case "ea":case "io":case "oi":case "uo":case "ou":case "ua":
            case "oa":case "ia":case "ei":case "ie":case "eo":case "oe":case "eu":
                case "au":case "ao":case "ai":case "ue":case "iu":case "ui":case "aa":
                    case "ee":case "ii":case "oo":case "uu":
                        document.write(a + " "); 
                        break;
    }
}
document.write("<br><br>")

// 8
// *
let ditanceTwoCities = prompt("Enter distance between two cities (in km.)");
function mainFunction (a) {
    return {
        meters: function () {
            //km * 1000
            return a * 1000; 
        },
        feet: function () {
            //km * 3280.841666667
            return a * 3280.84; 
        },
        inches: function () {
            //km * 39370.1
            return a * 39370.1; 
        },
        centimeters: function () {
            //km * 100000.05400001017551
            return a * 100000.05400001017551; 
        }
    }
}
let display1 = mainFunction(1.3);
document.write(`user value is: ${ditanceTwoCities} <br>`);
document.write(`Km to Meter: ${display1.meters()} <br>`);
document.write(`Km to Feet: ${display1.feet()} <br>`);
document.write(`Km to Inches: ${display1.inches()} <br>`);
document.write(`Km to centimeters: ${display1.centimeters()} <br><br>`);

// 9
// *
let over = prompt("Enter over time");
function overTime (time) {
    if(time > 40){
        let compute = time * 12;
        return compute;
    }else{
        return time;
    }
}
let a1 = overTime(over);
document.write(`overtime rate of Rs: ${a1}.00`);

// 10
// *
let withDraw = prompt("Enter amount to withdraw!");
function text (rupe1) {
    // varaible declear
    let convertString, getLength, subtracRupe, stringrupe, get1, value1, value2;
    // value initilize into variable
    convertString = rupe1.toString();
    getLength = convertString.length;
    // condition
    if(getLength === 3){
        if(convertString.slice(1, 2) >= 5){
            subtracRupe = rupe1 - 50;
            stringrupe = subtracRupe.toString();
            value1 = `You will have ${convertString.slice(0, 1)} hundred notes 1 fifty notes ${stringrupe.slice(1, 2)} ten notes ${stringrupe.slice(2)} coin`;
            // print value
            document.write(value1 + "<br><br>");
        }else{
            get1 = convertString;
            value2 = `You will have ${get1.slice(0, 1)} hundred notes ${get1.slice(1, 2)} ten notes ${get1.slice(2)} coin`;
            document.write(value2 + "<br><br>");
        }
    }
}
text(withDraw);
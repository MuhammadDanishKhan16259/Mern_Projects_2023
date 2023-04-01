// Chapter 14-16
// *************
// ARRAYS
// ******
// 1
// *
let student_Name = [];

// 2
// *
let student_Name1 = new Array();

// 3
// *
let string = ["Hello World"];

// 4
// *
let number = [2022];

// 5
// *
let boolean = [true,false];

// 6
// *
let mixed_value = ["hello world",2022,true,2+2,"20"+22,[1,2,3,4,5]];

// 7
// *
let qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];
document.write("Qualification <br><br>");
//first method
qualification.forEach((a,a1) => document.write(a1 + ") " + a + "<br>"));
//second method
// for(let i = 0; i < qualification.length; i++){
//     document.write(i + ") " + qualification[i] + "<br>")
// }

// 8
// *
let studentName = ["Mir","Mirza","Mirzaban"];
let score_of_student = [320,230,480];
let percentage = [];
for(let i = 0; i < score_of_student.length; i++){
    percentage.push((score_of_student[i] * 100) / 500);
}

document.write("<br> Score of " + studentName[0] + " is " + score_of_student[0] + ". Percentage: " + percentage[0] + "%" + "<br>");
document.write("Score of " + studentName[1] + " is " + score_of_student[1] + ". Percentage: " + percentage[1] + "%" + "<br>");
document.write("Score of " + studentName[2] + " is " + score_of_student[2] + ". Percentage: " + percentage[2] + "%" + "<br>");

// 9
// *
let color = ["Red","Orange","Yellow"];
function colorCall(){
    document.write("<br>" + color);
}
colorCall();
let userValue = prompt("what color does he/she want to add to the beginning of the array?");
color.unshift(userValue);
colorCall();
let userValue1 = prompt("what color does he/she want to add to the end of the array?");
color.push(userValue1);
colorCall();
color.unshift("Black","White");
colorCall();
color.shift();
colorCall();
color.pop();
colorCall();
let userValue2 = prompt("which index he/she wants to add a color.");
let userColor = prompt("which color name he/she wants to add.");
color.splice(userValue2,0,userColor);
colorCall();
let userValue3 = prompt("which index he/she wants to delete color(s)");
let howManyColor = prompt("how many colors he/she wants to delete?");
color.splice(userValue3,howManyColor);
colorCall();

// 10
// *
let Score1 = [320,230,480,120];
document.write("<br><br> Scores of Students: " + Score1 + "<br>");
Score1.sort();
document.write("Ordered Scores of Students: " + Score1);

// 11
// *
let cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
let selected_cities = cities.slice(1,4);
document.write("<br><br> Cities list: <br>" + cities);
document.write("<br> Selected cities list: <br>" + selected_cities);

// 12
// *
var arr = ["This", "is", "my", "cat"];
let joinMethod = arr.join(" ");
document.write("<br><br> Array: <br>" + arr);
document.write("<br><br> String: <br>" + joinMethod);

// 13
// *
let devices = ["Keyboard","Mouse","Printer","Monitor"];
document.write("<br><br> Devices: <br>" + devices + "<br><br>");
for(let i = 0; i < devices.length; i++){
    document.write("Out: <br>" + devices[i] + "<br>");
}

// 14
// *
let devices1 = ["Keyboard","Mouse","Printer","Monitor"];
document.write("<br><br> Devices: <br>" + devices + "<br><br>");
for(let i = devices.length-1; i >= 0; i--){
    document.write("Out: <br>" + devices[i] + "<br>");
}

// 15
// *
let phone_manufactured = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"];
document.write(`<br><br> <select name='' id=''><option value=''>${phone_manufactured[0]}</option><option value=''>${phone_manufactured[1]}</option><option value=''>${phone_manufactured[2]}</option><option value=''>${phone_manufactured[3]}</option><option value=''>${phone_manufactured[4]}</option><option value=''>${phone_manufactured[5]}</option></select> <br><br>`);
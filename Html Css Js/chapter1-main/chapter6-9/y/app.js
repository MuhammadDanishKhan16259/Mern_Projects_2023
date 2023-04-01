// Chapter 6-9
// **********
// MATH EXPRESSIONS
// ****************
// 1
// *
let a = prompt("Enter a number");
document.write("Result:" + "<br>");
document.write("The value of a is: " + a + "<br><br>");
document.write("**********************" + "<br><br>");
++a;
document.write("The value of ++a is: " + a + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");
a++;
document.write("The value of a++ is: " + a + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");
--a;
document.write("The value of --a is: " + a + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");
a--;
document.write("The value of a-- is: " + a + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");
// 2
// *
var a1 = 2;
var b = 1;
document.write("a is: " + a1 + "<br>");
document.write("b is: " + b + "<br>");
var result = --a1 - --b + ++b + b--;
// {{(--a1) = 1 } - {(--b) = 0}} = 1 + {(++b) = 1} = 2 + {(b--) = 1} = 3;
document.write("result is: " + result + "<br><br>");
// 3
// *
let userName = prompt("Enter your name", "Mirzaban");
alert("Greet " + userName);
// 4 or 5
// *
let table = +prompt("Enter any number" , 5);
document.write(table + " X " + 1 + " = " + (table * 1) + "<br>");
document.write(table + " X " + 2 + " = " + (table * 2) + "<br>");
document.write(table + " X " + 3 + " = " + (table * 3) + "<br>");
document.write(table + " X " + 4 + " = " + (table * 4) + "<br>");
document.write(table + " X " + 5 + " = " + (table * 5) + "<br>");
document.write(table + " X " + 6 + " = " + (table * 6) + "<br>");
document.write(table + " X " + 7 + " = " + (table * 7) + "<br>");
document.write(table + " X " + 8 + " = " + (table * 8) + "<br>");
document.write(table + " X " + 9 + " = " + (table * 9) + "<br>");
document.write(table + " X " + 10 + " = " + (table * 10) + "<br>");
// 6
// *
let totalMark = 100;
let subject = document.getElementsByClassName("sub1");
let sub1 = prompt("Enter first Subject name");
let sub2 = prompt("Enter Second Subject name");
let sub3 = prompt("Enter third Subject name");
subject[0].innerHTML = sub1;
subject[1].innerHTML = sub2;
subject[2].innerHTML = sub3;
let obt1 = +prompt("Enter first subject obtained mark");
let obt2 = +prompt("Enter second subject obtained mark");
let obt3 = +prompt("Enter third subject obtained mark");
let sumObt = obt1 + obt2 + obt3;
let obtained = document.getElementsByClassName("ob1");
obtained[0].innerHTML = obt1;
obtained[1].innerHTML = obt2;
obtained[2].innerHTML = obt3;
let per1 = (obt1 * 100) / totalMark;
let per2 = (obt2 * 100) / totalMark;
let per3 = (obt3 * 100) / totalMark;
let sumPer = per1 + per2 + per3;
let percentage = document.getElementsByClassName("p1");
percentage[0].innerHTML = per1 + "%";
percentage[1].innerHTML = per2 + "%";
percentage[2].innerHTML = per3 + "%";
let totalObtaine = document.getElementsByClassName("totalObtaine");
totalObtaine[0].innerHTML = "total: " + sumObt;
let totalPercentage = document.getElementsByClassName("totalPercentage");
totalPercentage[0].innerHTML = "total: " + sumPer;
//  END
//  ***
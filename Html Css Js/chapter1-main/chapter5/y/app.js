// CHAPTER 5
// *********
// MATH EXPRESSIONS
// ****************
// 1
// *
let n1 = + prompt("Enter first number");
let n2 = + prompt("Enter second number");
let sum = n1 + n2;
document.write("Sum of " + n1 + " and " + n2 + " is " + sum + "<br> <br>");
// 2
// *
// subtraction
// ***********
let s1 = + prompt("Enter first number");
let s2 = + prompt("Enter second number");
let sum1 = s1 - s2;
document.write("subtraction of " + s1 + " and " + s2 + " is " + sum1 + "<br> <br>");
// multiplication
// **************
let m1 = + prompt("Enter first number");
let m2 = + prompt("Enter second number");
let sum2 = m1 * m2;
document.write("multiplication of " + m1 + " and " + m2 + " is " + sum2 + "<br> <br>");
// division
// **************
let d1 = + prompt("Enter first number");
let d2 = + prompt("Enter second number");
let sum3 = d1 / d2;
document.write("division of " + d1 + " and " + d2 + " is " + sum3 + "<br> <br>");
// modulus
// **************
let o1 = + prompt("Enter first number");
let o2 = + prompt("Enter second number");
let sum4 = o1 % o2;
document.write("modulus of " + o1 + " and " + o2 + " is " + sum4 + "<br> <br>");

// 3
// *
let a;
document.write("Value after variable declaration is: " + a + "<br>");
a = 5;
document.write("Initial value: " + a + "<br>");
a++;
document.write("Value after increment is: " + a + "<br>");
a += 7;
document.write("Value after addition is: " + a + "<br>");
--a;
document.write("Value after decrement is: " + a + "<br>");
a = a % 2;
document.write("The remainder is: " + a + "<br> <br>");

// 4
// *
let Cost = 600;
let quantity = 5;
let cal = Cost * quantity;
document.write("Total cost to buy " + quantity + " tickets to a movie is " + cal + "PKR" + "<br> <br>");

// 5
// *
document.write("Table of 4" + "<br>");
let table = 4;
let multi = "X";
let equalToSign = "=";
document.write(table + multi + "1" + equalToSign + 4 + "<br>");
document.write(table + multi + "2" + equalToSign + 8 + "<br>");
document.write(table + multi + "3" + equalToSign + 12 + "<br>");
document.write(table + multi + "4" + equalToSign + 16 + "<br>");
document.write(table + multi + "5" + equalToSign + 20 + "<br>");
document.write(table + multi + "6" + equalToSign + 24 + "<br>");
document.write(table + multi + "7" + equalToSign + 28 + "<br>");
document.write(table + multi + "8" + equalToSign + 32 + "<br>");
document.write(table + multi + "9" + equalToSign + 36 + "<br>");
document.write(table + multi + "10" + equalToSign + 40 + "<br>");
document.write("<br><br>")
// 6
// *
let Celsius = 20;
let findFahrenheit = (Celsius * 9 / 5) + 32;
document.write(Celsius + "C is " + findFahrenheit + "F" + "<br>");
let Fahrenheit = 68;
let findCelsius = (Fahrenheit - 32)* 5 / 9;
document.write(Fahrenheit + "F is " + findCelsius + "C" + "<br>");
// 7
// *
let item1 = 650;
let quantity1 = 3;
let item2 = 100;
let quantity2 = 7;
let shippingCharges = 100;
let totalSum =(item1 * quantity1) + (item2 * quantity2) + shippingCharges;
document.write("Price of item 1 is " + item1 + "<br>");
document.write("Quantity of item 1 is " + quantity1 + "<br>");
document.write("Price of item 2 is " + item2 + "<br>");
document.write("Quantity of item 2 is " + quantity2 + "<br>");
document.write("Shipping Charges " + shippingCharges + "<br><br>");
document.write("Total cost of your order is " + totalSum + "<br><br>");
// 8
// *
let totalMark = 980;
let obtained = 804;
let percentage = (obtained * 100)/ totalMark;
document.write("Total Marks: " + totalMark + "<br>");
document.write("Marks obtained: " + obtained + "<br>");
document.write("Percentage: " + percentage + "%" + "<br><br>");
// 9
// *
let currencyConvert = (10 * 104.80) + (25 * 28);
document.write("Total Currency in PKR: " + currencyConvert + "<br><br>");
// 10
// *
let num = (((3 + 5) * 10) / 2);
document.write(num + "<br><br>");
// 11
// *
let birthYear = 2003;
let currentYear = 2022;
let calculate = currentYear - birthYear;
document.write("Current Year: " + currentYear + "<br>");
document.write("Birth Year: " + birthYear + "<br>");
document.write("Your age is: " + calculate + "<br><br>");
// 12
// *
let radius = 20;
let circumference = 3.142;
let value1 = radius * (2 * circumference);
document.write("Radius of circle is: " + radius);
document.write("The circumference is: " + circumference);
document.write("The area is: " + value1 + "<br><br>");
// 13
// *
let snack = " chocolate chip ";
let currentAge = 15;
let maxAge = 65;
let snackPerDay = 3;
let total2 = (maxAge - currentAge) * 3;
document.write("Favourite Snack: " + snack + "<br>");
document.write("Current age: " + currentAge + "<br>");
document.write("Estimated Maximum Age: " + maxAge + "<br>");
document.write("Amount of snacks per day: " + snackPerDay + "<br>");
document.write("You will need " + total2 + snack + " to last you until the ripe old age of " + maxAge);
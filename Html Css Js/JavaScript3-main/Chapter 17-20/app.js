// Chapter 17-20
// *************
// ARRAYS AND LOOP
// ***************

// 1
// *
let array = [[]];

// 2
// *
let matrix = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
document.write(matrix[0].join(" ") + "<br>" + matrix[1].join(" ") + "<br>" + matrix[2].join(" ") + "<br><br>");

// 3
// *
for(let i = 1; i <= 10; i++){
    document.write(i + "<br>");
}

// 4
// *
let table = +prompt("Enter a number to show its multiplication table");
let length = +prompt("Enter length multiplication table");
document.write("<br> Multiplication table of " + table + "<br>");
document.write("Length " + length + "<br><br>");
for(let i = 1; i <= length; i++){
    document.write(table + "X" + i + "=" + (table * i) + "<br>")
}

// 5
// *
document.write("<br>");
let fruits = ["Apple","Banana","Mango","Orange","Strawberry"];
for(let i = 0; i < fruits.length; i++){
    document.write(fruits[i] + "<br>");
}
document.write("<br>");
for(let j = 0; j < fruits.length; j++){
    document.write("Element at index " + j + " is " + fruits[j] + "<br>");
}

// 6
// *
document.write("<br>Counting: <br>");
for(let i = 1; i <= 15; i++){
    document.write(i + ",");
}
// Reverse counting
document.write("<br>Reverse counting: <br>");
for(let i = 10; i >= 1; i--){
    document.write(i + ",");
}
// Even
document.write("<br>Even: <br>");
for(let i = 0; i <= 20; i = i + 2){
    document.write(i + ",");
}
// Odd
document.write("<br>Odd: <br>");
for(let i = 1; i <= 20; i = i + 2){
    document.write(i + ",");
}
// Series
document.write("<br>Series: <br>");
for(let i = 2; i <= 20; i = i + 2){
    document.write(i + "K,");
}

// 7
// *
document.write("<br><br>")
let items = ["cake","apple pie", "cookie", "chips", "patties"];
let userValue = prompt("Welcome to ABC Bakery. What do you want to order Sir/ma'am?");
let condition = false;

for(let i = 0; i < items.length; i++){
    if(items[i] === userValue){
        document.write(`${userValue} is <b>Available</b> at index ${i} in our bakery <br>`);
        condition = true;
        break;
    }
    if(items[i] !== userValue){
        continue;
    }
}
if(condition === false){
    document.write("We are sorry. " + userValue + " is not <b>not available</b> in our bakery");
}

// 8
// *
let largest_number = [24, 53, 78, 91, 12];
let maxNumber = [0];
for(let i = 0; i < largest_number.length; i++){ 
    if(largest_number[i] > maxNumber){
        maxNumber = largest_number[i];
        continue;
    }
}
document.write("<br><br> Array items: " + largest_number + "<br>");
document.write("The largest number is: " + maxNumber);

// 9
// *
let smallest_Number = [24, 53, 78, 91, 12];
let minimum = [0];
for(let i = 0; i < smallest_Number.length; i++){
    if(smallest_Number[i] > minimum){
        minimum = smallest_Number[i];
        continue;
    }else if(minimum > smallest_Number[i]){
        minimum = smallest_Number[i];
        continue;
    }
    console.log(i);
}
document.write("<br><br> Array items: " + smallest_Number + "<br>");
document.write("The smallest number is: " + minimum);

// 10
// *
document.write("<br><br>");
for(let i = 5; i <= 100; i = i + 5){
    document.write(i + ",");
}
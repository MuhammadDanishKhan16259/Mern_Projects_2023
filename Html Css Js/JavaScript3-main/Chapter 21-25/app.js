// // Chapter 21-25
// // *************
// // STRING METHODS
// // **************
// // 1
// // *
// let firstName = prompt("Enter your first name");
// let lastName = prompt("Enter your last name");
// let fullName = firstName + " " + lastName;
// alert(" Greet " + fullName);

// // 2
// // *
// let phoneModel = prompt("Enter your favorite mobile phone model.");
// document.write("My favorite phone is: " + phoneModel + "<br>" + " Length of string: " + phoneModel.length);

// // 3
// // *
// let string = "Pakistani";
// // method 1
// document.write("<br><br> String: " + string + "<br>");
// document.write("Index of n is: " + (string.indexOf("n")));
// // method 2
// // document.write("<br><br> String: " + string + "<br>");
// // for(let i = 0; i <b string.length; i++){
// //     if(string[i] === "n"){
// //         document.write("Index of n is: " + i);
// //     }
// // }

// // 4
// // *
// let string1 = "Hello World";
// document.write("<br><br> String: " + string1 + "<br>");
// document.write("Last index od 'l': " + string1.lastIndexOf("l"));

// // 5
// // *
// let string2 = "Pakistan";
// document.write("<br><br> String: " + string2 + "<br>");
// document.write("Character at index " + string2.indexOf("i") + ": " + string2.match("i"));

// // 6
// // *
// let first_name = prompt("Enter your first name ");
// let last_name = prompt(" Enter your last name ");
// let user_full_name = first_name.concat(last_name);
// alert("Greet " + user_full_name);

// // 7
// // *
// let city = "Hyderabad";
// let city1 = city.replace("Hyder", "Islam");
// document.write("<br><br> <b>City:</b> " + city);
// document.write("<br> <b>After replacement:</b> " + city1 + "<br><br>")
// // document.write(city1);

// // 8
// // *
// let message = "Ali and Sami are best friends. They play cricket and football together";
// let replace_and = message.replace(/and/g,"&");
// document.write("<b>Message:</b> " + message + "<br>");
// document.write("<b>After replacement:</b> " + replace_and + "<br><br>");

// // 9
// // *
// let value = "472";
// let value1 = + value;
// document.write("Value: " + value + "<br>");
// document.write("type: " + (typeof value) + "<br>");
// document.write("Value: " + value1 + "<br>");
// document.write("type: " + (typeof value1) + "<br><br>");

// // 10
// // *
// let userInput = prompt("Enter anything we will convert it to uppercase");
// let Uppercase = userInput.toUpperCase();
// document.write("User Input: " + userInput + "<br>");
// document.write("Upper Case: " + Uppercase + "<br><br>");

// // 11
// // *
// let userValue = prompt("Enter any word we will convert it to Title Case");
// let upper = userValue[0].toUpperCase();
// let asa = userValue[0].split();
// let titleCase = upper + userValue.slice(1);
// document.write("User input: " + userValue + "<br>");
// document.write("Tile case: " + titleCase +"<br><br>");
// // 12
// // *
// let num = 35.36;
// let a = num.toString();
// let b = a.split(".");
// let c = b.join("");
// document.write("Number: " + num + "<br>");
// document.write("Result: " + c + "<br>");

// 13
// *
let userName = prompt("enter your name");
if(userName.includes("@") === true){
    alert("Please enter a valid username");
}
else if(userName.includes("!") === true){
    alert("Please enter a valid username");
}
else if(userName.includes(",") === true){
    alert("Please enter a valid username");
}
else if(userName.includes(".") === true){
    alert("Please enter a valid username");
}

// 14
// *
let search = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?")
let store = ["cake","apple pie","cookie","chips","patties"];
let condition = false;
for(let i = 0; i < store.length; i++){
    if(search.toLowerCase() == store[i]){
        document.write("<br> <b>" + search + "</b> is available at index " + i + " in our bakery");
        condition = true;
    }
    else if(search.toLowerCase() !== store[i]){
        continue;
    }
}
if(condition === false){
    document.write("We are sorry. <b>" + search + "</b> is not available in our bakery" + "<br><br>");
}

// 15
// *
let password = prompt("Enter password");
// i.
let formContent = document.getElementById("form-content");
document.write("NodeType: " + formContent.nodeType + "<br>");

// ii
let lastName = document.getElementById("lastName");
document.write("NodeType: " + lastName.nodeType + "<br>");
document.write("NodeType: " + lastName.childNodes[0].nodeType + "<br>");
// iii.
let a = lastName.childNodes[0].innerText = "welcome";
document.write(a + '<br>');
document.write("check console.");
// iv.
let mainContent = document.getElementById("main-content");
console.log(mainContent.firstChild);
console.log(mainContent.lastChild);
// v.
console.log(lastName.previousSibling);
console.log(lastName.nextSibling);
// vi.
let email = document.getElementById("email");
console.log(email.parentNode);
console.log(email.nodeType);
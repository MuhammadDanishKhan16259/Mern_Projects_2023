// i.
let mainContent = document.getElementById("main-content");

for(let i = 0; i < 5; i++) {
    document.write(mainContent.children[i].innerHTML + "<br>");
}
// ii.
let allRender = document.getElementsByClassName("render");

for(let i = 0; i < allRender.length; i++) {
    document.write(allRender[i].innerHTML + "<br>");
}
// iii.
let firstName = document.getElementById("first-name");
firstName.value = "Shaykh";
// iv.
let lastName = document.getElementById("last-name");
lastName.value = "Mirzaban";
// v.
let email = document.getElementById("email");
email.value = "shaykhmirzaban@gmail.com";
// user Value
let BOM = {
    FirstName1: ".name1",
    lastName1: ".lastName1",
    email1: ".email2",
    password1: ".password2",
    
    FirstName2: ".first",
    lastName2: ".last",
    email2: ".email1",
    password2: ".password1",

    button: ".btn",
    container: ".container"
}

let getFName = document.querySelector(BOM.FirstName1);
let getLName = document.querySelector(BOM.lastName1);
let getEmail = document.querySelector(BOM.email1);
let getPassword = document.querySelector(BOM.password1);

let setFName = document.querySelector(BOM.FirstName2);
let setLName = document.querySelector(BOM.lastName2);
let setEmail = document.querySelector(BOM.email2);
let setPassword = document.querySelector(BOM.password2);

let button = document.querySelector(BOM.button);
let container = document.querySelector(BOM.container);


button.addEventListener("click", ()=> {
    container.style.transform = "scale(0)";
    setFName.innerHTML = getFName.value;
    setLName.innerHTML = getLName.value;
    setEmail.innerHTML = getEmail.value;
    setPassword.innerHTML = getPassword.value;
})
let button = document.querySelectorAll(".col button");
let cont1 = document.querySelector(".container1");
let body  = document.querySelector("body");
let closeBtn = document.querySelector(".closeBtn");

button.forEach((e)=>{
    e.addEventListener("click", ()=> {
        if(cont1.style.transform = "scale(0)"){
            cont1.style.transform = "scale(1)";
            body.style.overflow = "hidden";
        }
        else{
            cont1.style.transform = "scale(0)";
            body.style.overflowY = "auto";
        }
    });
});

closeBtn.addEventListener("click", ()=> {
    cont1.style.transform = "scale(0)";
    body.style.overflowY = "auto";
});
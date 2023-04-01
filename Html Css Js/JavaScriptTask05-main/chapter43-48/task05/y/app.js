let decrement = document.querySelector(".decrement");
let increment = document.querySelector(".increment");
let reset = document.querySelector(".reset");
let display = document.querySelector(".display h1");

let num = 0;

increment.addEventListener("click", incre1);
decrement.addEventListener("click", decre1);
reset.addEventListener("click", reset1);

function incre1(){
    num++;
    display.innerHTML = `${num}`;
    if(num > 0) {
        display.style.color = "green";
    }
    if(num === 0){
        display.style.color = "#000";
    }
};

function decre1 (){
    num--;
    display.innerHTML = `${num}`;
    if(num < 0) {
        display.style.color = "red";
    }

    if(num === 0) {
        display.style.color = "#000";
    }
}

function reset1 () {
    num = 0;
    display.innerHTML = 0;
    display.style.color = "#000";
}
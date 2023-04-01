let hamburger = document.querySelector(".hamburger-icon");
let longNavbar = document.querySelector(".log-navbar");
let mobileScreen = document.getElementById("changeColor");
let overflow1 = document.querySelector("body");

hamburger.addEventListener("click", mir);
function mir(){
    overflow1.classList.toggle("no-scroll");
    mobileScreen.style.backgroundColor = "black";
    longNavbar.classList.toggle("active");
}

// footer work

let foot1 = document.querySelector(".footerHeading");
let foot2 = document.querySelector(".footerHeading1");
let foot3 = document.querySelector(".sub-footerHeading1");
let foot4 = document.querySelector(".footerHeading2");
let foot5 = document.querySelector(".footerHeading3");
let foot6 = document.querySelector(".sub-footerHeading3");
let foot7 = document.querySelector(".sub-s-footerHeading3");
let foot8 = document.querySelector(".sub-s1-footerHeading3");
let foot9 = document.querySelector(".footerHeading4");
let foot10 = document.querySelector(".sub-footerHeading4");
// **********************************
let remove1 = document.querySelector(".innerList");
let remove2 = document.querySelector(".innerList1");
let remove3 = document.querySelector(".sub-innerList1");
let remove4 = document.querySelector(".innerList2");
let remove5 = document.querySelector(".innerList3");
let remove6 = document.querySelector(".sub-innerList3");
let remove7 = document.querySelector(".sub-s-innerList3");
let remove8 = document.querySelector(".sub-s1-innerList3");
let remove9 = document.querySelector(".innerList4");
let remove10 = document.querySelector(".sub-innerList4");
// **********************************

foot1.addEventListener("click",fn1);
foot2.addEventListener("click",fn2);
foot3.addEventListener("click",fn3);
foot4.addEventListener("click",fn4);
foot5.addEventListener("click",fn5);
foot6.addEventListener("click",fn6);
foot7.addEventListener("click",fn7);
foot8.addEventListener("click",fn8);
foot9.addEventListener("click",fn9);
foot10.addEventListener("click",fn10);


function fn1(){
    remove1.classList.toggle("active");
}
function fn2(){
    remove2.classList.toggle("active");
}
function fn3(){
    remove3.classList.toggle("active");
}
function fn4(){
    remove4.classList.toggle("active");
}
function fn5(){
    remove5.classList.toggle("active");
}
function fn6(){
    remove6.classList.toggle("active");
}
function fn7(){
    remove7.classList.toggle("active");
}
function fn8(){
    remove8.classList.toggle("active");
}
function fn9(){
    remove9.classList.toggle("active");
}
function fn10(){
    remove10.classList.toggle("active");
}
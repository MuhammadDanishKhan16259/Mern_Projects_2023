let hamburger = document.querySelector(".hamburger");
let mobileNavbar = document.querySelector(".mobile-navbar");
let body1 = document.querySelector("body");
let screen_blur = document.querySelector(".blur");

hamburger.addEventListener("click",fn);

function fn(){
    mobileNavbar.classList.toggle("active");
    body1.classList.toggle("scroll");
    screen_blur.classList.toggle("active");
}

let bigScreen = document.getElementById("bigScreen");
let smallImage = document.getElementsByClassName("smallImage");

smallImage[0].addEventListener("click",function(){
    bigScreen.src = smallImage[0].src;
});

smallImage[1].addEventListener("click",function(){
    bigScreen.src = smallImage[1].src;
});

smallImage[2].addEventListener("click",function(){
    bigScreen.src = smallImage[2].src;
});

smallImage[3].addEventListener("click",function(){
    bigScreen.src = smallImage[3].src;
});
let mobile = document.querySelector(".mob-nav");
let humburger = document.querySelector(".humburger");
let overflow1 = document.querySelector("body");
let screen_blur = document.querySelector(".blur");
let scroll_hidden = ()=>{
    overflow1.classList.toggle("no-scroll");
    screen_blur.classList.toggle("active");
}
humburger.addEventListener("click" , scroll_hidden);

humburger.addEventListener("click" , function(){
    console.log("hello")
    if(mobile.style.display == "block" && mobile.style.right == "9px"){
        mobile.style.display = "none";
        mobile.style.right = "-480px";
    }
    else{
        mobile.style.display = "block";
        mobile.style.right = "9px";
    }
})

console.log("welcome")
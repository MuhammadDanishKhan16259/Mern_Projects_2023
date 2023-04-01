let a = window.innerWidth;
if(a >= "1021"){
    var splide = new Splide( '.splide', {
        perPage: 3,
        rewind : true,
      } );
      
    splide.mount();
}else if(a > "810"){
    var splide = new Splide( '.splide', {
        perPage: 2,
        rewind : true,
      } );
      
    splide.mount();
}else if(a <= "810"){
    var splide = new Splide( '.splide', {
        perPage: 1,
        rewind : true,
      } );
      
    splide.mount();
}

var loading = document.querySelector(".loding");
var active1 = document.querySelector("body");
var a1 = setTimeout(function(){
    active1.classList.toggle("active");
    loading.classList.toggle("add"); 
},5000);

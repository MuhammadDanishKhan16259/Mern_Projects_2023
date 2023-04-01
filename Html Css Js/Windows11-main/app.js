setInterval(mir,1000);

function mir(){
    let date = new Date();
    let hour = date.getHours();
    let minut = date.getMinutes();
    let second = date.getSeconds();
    
    if(minut < 10){
        minut = "0" + minut;
    }
    let arr =(hour >= 12)? "PM" : "AM";
    hour = (hour >= 12)? hour-12 : hour;

    if(hour === 0 && arr == "PM"){
        if(minut === 0 && second === 0){
            hour = 12;
            arr = "PM";
        }
        else{
            hour = 12;
            arr = "PM";
        }
    };

    if(hour === 0 && arr == "AM"){
        if(minut === 0 && second === 0){
            hour = 12;
            arr = "AM";
        }
        else{
            hour = 12;
            arr = "AM";
        }
    };
    
    document.getElementById("side-box").innerHTML = `${hour}:${minut} ${arr}`;
    
}

let date = new Date;
let month = date.getMonth() + 1;
let date1 = date.getDate();
let year = date.getFullYear();

if(month < 10){
    month = "0" + month;
}
if(date1 < 10){
    date1 = "0" + date1;
}

document.getElementById("side-box-1").innerHTML=`${month}/${date1}/${year}`;

//close work for date and time;

let menuBar = document.getElementsByClassName("menu-bar")[0];
let startBar = document.getElementsByClassName("startBar")[0];

menuBar.addEventListener("click",()=>{
    if(startBar.style.bottom == "60px"){
        startBar.style.bottom = "-630px";
    }
    else{
        startBar.style.bottom = "60px";
    }
})
//display: none;

let showHiddenIcon = document.getElementsByClassName("show-hidden-icon")[0];
let showMenuBar = document.getElementsByClassName("show-menu-bar")[0];

showMenuBar.addEventListener("click",()=>{
    if(showHiddenIcon.style.bottom == "45px"){
        showHiddenIcon.style.bottom = "-245px";
    }
    else{
        showHiddenIcon.style.bottom = "45px";
    }
});
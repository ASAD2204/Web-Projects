let homeScore=0
let guestScore=0
let homeScreen=document.getElementById("home")
let guestScreen=document.getElementById("guest")
function add1(btn){
    if(btn.className === "homecls"){
    homeScore+=1
    homeScreen.innerText=homeScore
    }
    else{
        guestScore+=1
        guestScreen.innerText=guestScore;    
    }
}
function add2(btn){
    if(btn.className === "homecls"){
    homeScore+=2
    homeScreen.innerText=homeScore
    }
    else{
        guestScore+=2
        guestScreen.innerText=guestScore;    
    }
}
function add3(btn){
    if(btn.className === "homecls"){
    homeScore+=3
    homeScreen.innerText=homeScore
    }
    else{
        guestScore+=3
        guestScreen.innerText=guestScore;    
    }
}

function resetScore(){
    guestScore=0
    homeScore=0
    guestScreen.innerText=guestScore
    homeScreen.innerText=homeScore
    }
/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl=document.getElementById("input-el")
const convertBtn=document.getElementById("btn-el")
const lengthPara=document.getElementById("length")
const volumePara=document.getElementById("volume")
const massPara=document.getElementById("mass")

convertBtn.addEventListener("click",function(){
    const num=inputEl.value
    length(num)
    volume(num)
    mass(num)
    
    
})


function length(num){
    
lengthPara.textContent=`${num} meters = ${meterFeet(num)} feet | ${num} feet = ${feetMeter(num)} meters `
    
}
function volume(num){
    volumePara.textContent=`${num} liters = ${literGallon(num)} gallons | ${num} gallons = ${gallonLiter(num)} liters `
}
function mass(num){
massPara.textContent=`${num} kilos = ${meterFeet(num)} pounds | ${num} pounds = ${feetMeter(num)} kilos`    
}

function meterFeet(num){
    return (3.281*num).toFixed(3)
    
}
function feetMeter(num){
    return (num/3.281).toFixed(3)
}
function literGallon(num){
    return (num*0.264).toFixed(3)
}
function gallonLiter(num){
     return (num/0.264).toFixed(3)
}
function kgPounds(num){
    return (num*2.204).toFixed(3)
}
function poundKg(num){
    return (num/2.204).toFixed(3)
}
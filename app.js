// Buttons
let btnRed = document.querySelector(".btn-red")
let btnYellow = document.querySelector('.btn-yellow')
let btnGreen = document.querySelector('.btn-green')
let btnAll = document.querySelector('.all-turn')

// Colors
let redColor = document.querySelector(".red")
let yellowColor = document.querySelector('.yellow')
let greenColor = document.querySelector('.green')

// Working
btnRed.addEventListener("click", function(){
    greenColor.style.backgroundColor='rgb(39, 38, 38)'
    yellowColor.style.backgroundColor='rgb(39, 38, 38)'
    redColor.style.backgroundColor='red'    
})
btnYellow.addEventListener("click", function(){
    greenColor.style.backgroundColor='rgb(39, 38, 38)'
    redColor.style.backgroundColor='rgb(39, 38, 38)'
    yellowColor.style.backgroundColor='yellow'
})
btnGreen.addEventListener("click", function(){
    yellowColor.style.backgroundColor='rgb(39, 38, 38)'
    redColor.style.backgroundColor='rgb(39, 38, 38)'
    greenColor.style.backgroundColor='green'
})
btnAll.addEventListener("click", function(){
    redColor.style.backgroundColor='rgb(39, 38, 38)'
    yellowColor.style.backgroundColor='rgb(39, 38, 38)'
    greenColor.style.backgroundColor='rgb(39, 38, 38)'
})
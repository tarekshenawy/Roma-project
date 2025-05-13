let sliderone = document.getElementById("slider1");
let slidertwo = document.getElementById("slider2");
let sliderthree = document.getElementById("slider3");
let sliderfour = document.getElementById("slider4");
let prevone = document.querySelector(".prev1");
let prevtwo = document.querySelector(".prev2");
let prevthree = document.querySelector(".prev3");
let prevfour = document.querySelector(".prev4");
let nextone = document.querySelector(".next1");
let nexttwo = document.querySelector(".next2");
let nextthree = document.querySelector(".next3");
let nextfour = document.querySelector(".next4");
let navlist = document.querySelector(".navlist");
let menuicon = document.getElementById("menuicon");



prevone.addEventListener("click",()=>{
    sliderone.scrollBy({left:-300,behavior:'smooth'})
})
prevtwo.addEventListener("click",()=>{
    slidertwo.scrollBy({left:-300,behavior:'smooth'})
})
prevthree.addEventListener("click",()=>{
    sliderthree.scrollBy({left:-300,behavior:'smooth'})
})
prevfour.addEventListener("click",()=>{
    sliderfour.scrollBy({left:-300,behavior:'smooth'})
})

nextone.addEventListener("click",()=>{
    sliderone.scrollBy({left:300,behavior:"smooth"})
})
nexttwo.addEventListener("click",()=>{
    slidertwo.scrollBy({left:300,behavior:"smooth"})
})
nextthree.addEventListener("click",()=>{
    sliderthree.scrollBy({left:300,behavior:"smooth"})
})
nextfour.addEventListener("click",()=>{
    sliderfour.scrollBy({left:300,behavior:"smooth"})
})

// function menuicon

menuicon.addEventListener("click",()=>{
    navlist.classList.toggle("active")
    
})





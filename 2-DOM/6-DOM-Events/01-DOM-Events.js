/*
* DOM [Events]
* Use Events on Html
* Use Events on js
* - Events Lts :
* - onclick
* - onContextmenu
* - onmouseenter
* - onmouseleave
* - onload
* - onscroll
* - onresize
* - onfocus
* - onblur
* - onsubmit
* - Let's test this Events
* */
const container=document.querySelector(".container");
const subContainer=document.querySelector(".sub-container")
const btn=document.getElementsByTagName("button")[0];
const randomColor=()=>Math.ceil(Math.random()*255)

btn.onclick=function (e){
    // param e is the event Object
    console.log(e.type) // click
    // On each Click we want to Change the BackRound of the parent element
    container.style.background=`rgb(${randomColor()} ${randomColor()} ${randomColor()})`;
    subContainer.style.color="#fff"
}
// Test Another event
window.onload=()=>{
    console.log("Hello From window Object")
}

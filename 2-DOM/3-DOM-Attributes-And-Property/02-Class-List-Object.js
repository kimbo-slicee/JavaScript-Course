/*
* DOM [Class List]
* - ClassList
* - Length
* - contains
* - items(index)
* - add
* - remove
* - toggle(token,force)
* */
let elements =document.getElementById("home");
console.log(elements);
console.log(elements.classList);//[container,active,First,parent,light];
console.log(elements.classList.contains("active"))//true
// toggle add and remove
// Real Example
const mode=document.querySelector(".mode");
const container=document.querySelector(".container")
const btns=document.querySelectorAll("button");
btns.forEach((ele)=>{
    ele.addEventListener("click",()=>{
        addActive()
        container.classList.toggle("dark")
    });
});
const addActive=()=>btns.forEach((ele)=>ele.classList.toggle("active"))


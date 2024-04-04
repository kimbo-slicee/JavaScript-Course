/*
DOM[Eevents]
---Use Events On HTML 
----Use Events ON Js 
-----onclick 
------oncontextmenu
--------onmouseenter 
---------onmouseleave 

---onload 
----onscroll 
------onresize 

----onfocus
------onblur 
-------onsubmit
*/
let btn = document.getElementById('btn')
btn.addEventListener('click',e=>{
})
btn,oncontextmenu=(e)=>{

}
document.querySelector('input').onmouseenter=(e)=>{
    console.log(e)
}
document.querySelector('input').onmouseleave=(e)=>{
    console.log(e)
}
window.onscroll=()=>{
}
document.getElementsByTagName('input')[2].onfocus=()=>{
    console.log('hello')
}
/*
----------Event-Simulation----------
---DOM[Events Simulation]
---Click
---Focus
---Blur
*/ 
/*
let teste =document.getElementById('teste');
window.onload=function(){
    teste.focus();
}
*/ 

/*
* src: https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
* scrollTo(x,y || {left:value,top:value,behavior:"smooth"})
* scroll(x,y   || {left:value,top:value,behavior:"smooth"})
* scrollBy(x,y || {left:value,top:value,behavior:"smooth"})
* scrollX() [Alies => PageXOffset]
* scrollY() [Alies => PageYOffset]
* */
const x=document.querySelector(".x")
const y=document.querySelector(".y")
const btn=document.querySelectorAll("button");
window.onscroll=function (){
x.innerHTML=`X= ${window.scrollX}`;
y.innerHTML=`Y= ${window.scrollY}`;
if(window.scrollY>=200){
   btn[1].style.display="block";
   btn[1].onclick=()=>scrollTo({top:0,left:0,behavior:'smooth'})
}else {
    btn[1].style.display="none";
}
}
console.log(scrollX===pageXOffset);
console.log(scrollY===pageYOffset);

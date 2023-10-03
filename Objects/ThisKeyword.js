/*
------function--------
---This Introduction 
---This Inside Object Method
---when a function is called as a method of an object,
---its this is set to the object The methode is called on.
-----Global Object 
-----Test Variables withe Window And This
-----Global Context
----Function Context

search 
---Strict Mode 
*/ 
// console.log(this);
function F1(){
    console.log(this===window)//true
}
F1();
let V=document.getElementsByClassName('btn')[0];
V.onclick=function(){
console.log(this)
}
"use strict";
let F2=function(){
    console.log(this)
}
F2()
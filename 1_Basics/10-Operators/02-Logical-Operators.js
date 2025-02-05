/*
----Logical Operators-----
----!NOt
----&& And
----|| Or
*/
let userAge=30
if(userAge>5 && userAge<10){
    console.log('You are a child')
}else if(userAge>=10 && userAge<18) {
    console.log('You are a Teenager')
}else if(userAge>=18 && userAge<30){
    console.log('You are a Young')
}else if(userAge>=30 && userAge<60) {
    console.log('You are a Adult')
}
let userEmail="userEmail@gmail.com";
let password="";
if (!userEmail || !password){
    console.log('Please Enter Email and Password')
}else {
    console.log('Welcome')
}